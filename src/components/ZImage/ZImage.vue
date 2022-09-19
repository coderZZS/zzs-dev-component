<!--
 * @Descripttion: 
 * @Author: BZR
 * @Date: 2022-09-19 14:55:51
 * @LastEditTime: 2022-09-19 15:13:04
-->
<template>
    <img :src="$props.src" :style="styleProps" class="l-image-component" :draggable="false" @click.prevent="handleClick" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useStylePick from '../../hooks/useStylePick'
import useComponentClick from '@/hooks/useComponentClick'
import { componentsDefaultProps, transformToComponentProps, isEditingProp } from '../../defaultProps'
// array that contains style props
export default defineComponent({
    name: 'ZImage',
    props: transformToComponentProps(componentsDefaultProps['z-image'].props, isEditingProp),
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

<style scoped>
.l-image-component {
    max-width: 100%;
}
</style>
