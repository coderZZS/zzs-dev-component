/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-09-19 14:16:32
 * @LastEditTime: 2022-09-19 14:19:27
 */
import { App } from 'vue'
import ZText from './ZText.vue'

ZText.install = (app: App) => {
    app.component(ZText.name, ZText)
}

export default ZText
