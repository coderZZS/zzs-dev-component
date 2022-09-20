/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-06-21 10:55:34
 * @LastEditTime: 2022-09-20 10:13:25
 */
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    server: {
        port: 8888,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
					@import "@/style/settings/var.scss";
					@import "@/style/tools/index.scss";
				`,
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        transformMode: {
            web: [/\.[jt]sx$/],
        },
    },
})
