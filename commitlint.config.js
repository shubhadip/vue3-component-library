/**
 * Definition	Description
  - feat	A new feature
  - fix	A bug fix
  - docs	Documentation only changes
  - style	Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  - refactor	A code change that neither fixes a bug nor adds a feature
  - perf	A code change that improves performance
  - test	Adding missing or correcting existing tests
  - chore	Changes to the build process or auxiliary tools and libraries such as documentation generation

 * 
    X.Y.Z => Release versioning format
  - fix(pencil): loader element not loading fix => Will bump up Z
  - feat(pencil): new datepicker component added => Will bump up Y
  - perf(pencil): vue3 released => Will bump the X
  - BREAKING CHANGE: vue3 released  => Will bump the Y
  - Refer for the format of commit messages: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => message.includes('WIP')],
  rules: {
    'body-max-line-length': [0, 'always', Infinity], // added this due to semantic release bug
  },
};
