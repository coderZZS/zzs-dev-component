/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-09-19 14:16:32
 * @LastEditTime: 2022-09-19 14:57:59
 */
import { App } from 'vue'
import ZShape from './ZShape.vue'

ZShape.install = (app: App) => {
    app.component(ZShape.name, ZShape)
}

export default ZShape
