/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-09-19 14:19:56
 * @LastEditTime: 2022-09-19 16:36:29
 */
import { App } from 'vue'
import ZText from './components/ZText'
import ZImage from './components/ZImage'
import ZShape from './components/ZShape'

const components = [ZText, ZImage, ZShape]

const install = (app: App) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export { ZText, ZImage, ZShape, install }

export default {
    install,
}
