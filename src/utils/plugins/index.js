export const registerComponent = (instance, component) => {
    instance.component(component.name, component)
}

export const registerComponentProgrammatic = (instance, property, component) => {
    if (!instance.config.globalProperties.$test) instance.config.globalProperties.$test = {}
    instance.config.globalProperties.$test[property] = component
}
