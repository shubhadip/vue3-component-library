import { nextTick } from 'vue'
import * as components from "./components/index"

import  {setVueInstance } from './utils/config/index'

const install = (instance) => {
    nextTick(() => {
        setVueInstance(instance)
        for (let componentKey in components) {
            instance.use((components)[componentKey])
        }
    })
}

export default install

export * from './components'