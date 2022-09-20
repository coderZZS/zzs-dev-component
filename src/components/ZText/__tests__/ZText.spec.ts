/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-09-20 10:15:20
 * @LastEditTime: 2022-09-20 10:28:35
 */
import { shallowMount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import ZText from '..'
import { textDefaultProps } from '@/defaultProps'

describe('ZText.vue', () => {
    it('default ZText render', () => {
        const msg = 'test'
        const props = {
            ...textDefaultProps,
            text: msg,
        }
        const wrapper = shallowMount(ZText, { props })
        // should have the right text
        expect(wrapper.text()).toBe(msg)
        // should be default div tag
        expect(wrapper.element.tagName).toBe('DIV')
        // should have certian css attr
        const style = wrapper.attributes().style
        expect(style.includes('font-size')).toBeTruthy()
        // should not have prop has been filtered
        expect(style.includes('actionType')).toBeFalsy()
    })
})
