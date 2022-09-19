<!--
 * @Descripttion: 
 * @Author: BZR
 * @Date: 2022-09-19 14:57:34
 * @LastEditTime: 2022-09-19 15:13:09
-->
<template>
    <div :style="styleProps" class="l-shape-component" :draggable="false" @click.prevent="handleClick"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useStylePick from '@/hooks/useStylePick'
import useComponentClick from '@/hooks/useComponentClick'
import { componentsDefaultProps, transformToComponentProps, isEditingProp } from '../../defaultProps'
const defaultProps = transformToComponentProps(componentsDefaultProps['z-shape'].props, isEditingProp)
// array that contains style props
export default defineComponent({
    name: 'ZShape',
    props: {
        ...defaultProps,
    },
    setup(props) {
        const styleProps = useStylePick(props)
        const handleClick = useComponentClick(props)
        return {
            styleProps,
            handleClick,
        }
    },
})
</script>
