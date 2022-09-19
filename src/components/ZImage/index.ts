/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-09-19 14:56:31
 * @LastEditTime: 2022-09-19 14:58:17
 */
import { App } from 'vue'
import ZImage from './ZImage.vue'
ZImage.install = (app: App) => {
    app.component(ZImage.name, ZImage)
}

export default ZImage
