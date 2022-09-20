<!--
 * @Descripttion: 
 * @Author: BZR
 * @Date: 2022-09-19 11:43:50
 * @LastEditTime: 2022-09-20 10:41:01
-->
<template>
    <component :is="props.tag" :style="styleProps" class="z-text-component" @click="handelClick">{{ props.text }}</component>
</template>

<script setup lang="ts" name="ZText">
import { defineProps } from 'vue'
import { transformToComponentProps, textDefaultProps, textStylePropsNames } from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

const props = defineProps({
    ...transformToComponentProps(textDefaultProps),
})

const { styleProps, handelClick } = useComponentCommon(props, textStylePropsNames)
</script>

<style scoped></style>
