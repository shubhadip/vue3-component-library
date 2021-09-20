import path from "path";
import vue from "rollup-plugin-vue";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import PostCSS from "rollup-plugin-postcss";
import simplevars from "postcss-simple-vars";
import postcssImport from "postcss-import";
import minimist from "minimist";
import postcssUrl from "postcss-url";
import url from "@rollup/plugin-url";
import nested from "postcss-nested";
import autoprefixer from "autoprefixer";
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';
import outputManifest from 'rollup-plugin-output-manifest';

const postcssConfigList = [
  postcssImport({
    resolve(id, basedir) {
      // resolve alias @css, @import '@css/style.css'
      // because @css/ has 5 chars
      if (id.startsWith("@css")) {
        return path.resolve("./src/assets/styles/css", id.slice(5));
      }

      // resolve node_modules, @import '~normalize.css/normalize.css'
      // similar to how css-loader's handling of node_modules
      if (id.startsWith("~")) {
        return path.resolve("./node_modules", id.slice(1));
      }

      // resolve relative path, @import './components/style.css'
      return path.resolve(basedir, id);
    }
  }),
  simplevars,
  nested,
  postcssUrl({ url: "inline" }),
  autoprefixer({
    overrideBrowserslist: "> 1%, IE 6, Explorer >= 10, Safari >= 7"
  })
];

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, ".");

let postVueConfig = [
  // Process only `<style module>` blocks.
  PostCSS({
    modules: {
      generateScopedName: '[local]___[hash:base64:5]',
    },
    include: /&module=.*\.css$/,
  }),
  // Process all `<style>` blocks except `<style module>`.
  PostCSS({ include: /(?<!&module=.*)\.css$/,
    plugins:[
      ...postcssConfigList
    ]
   }),
  url({
      include: [
        '**/*.svg',
        '**/*.png',
        '**/*.gif',
        '**/*.jpg',
        '**/*.jpeg'
      ]
    }),
]

if(process.env.SEP_CSS){
  postVueConfig = [css({ output: './widgets-build/bundle.css' }), ...postVueConfig]
}

const baseConfig = {
  plugins: {
    preVue: [
      alias({
        entries: [
          {
            find: "@",
            replacement: `${path.resolve(projectRoot, "src")}`
          }
        ],
        customResolver: resolve({
          extensions: [".js", ".jsx", ".vue"]
        })
      })
    ],
    replace: {
      "process.env.NODE_ENV": JSON.stringify("production"),
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    },
    vue: {
      target: "browser",
      preprocessStyles: process.env.SEP_CSS ? false : true,
      postcssPlugins: [...postcssConfigList]
    },
    postVue: [
      ...postVueConfig
    ],
    babel: {
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".vue"],
      babelHelpers: "bundled"
    }
  }
};

const entriespath = {
  index: "./src/widget.ts"
};
let buildFormats = [];

const esConfig = {
  input: entriespath,
  output: {
    compact: true,
    format: "cjs",
    dir: "widgets-build/cjs",
    exports: "named",
  },
  plugins: [
    typescript(),
    replace(baseConfig.plugins.replace),
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    ...baseConfig.plugins.postVue,
    babel({
      ...baseConfig.plugins.babel,
      presets: [["@babel/preset-env", { modules: false }]]
    }),
    commonjs(),
    outputManifest(),
  ]
};

buildFormats.push(esConfig);


// Export config
export default buildFormats;
