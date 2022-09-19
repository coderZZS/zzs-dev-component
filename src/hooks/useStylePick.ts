/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-09-19 14:59:15
 * @LastEditTime: 2022-09-19 14:59:18
 */
import { pick, without } from 'lodash-es'
import { computed } from 'vue'
import { textDefaultProps } from '../defaultProps'

export const defaultStyles = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
const useStylePick = (props: any, pickStyles = defaultStyles) => {
    return computed(() => pick(props, pickStyles))
}

export default useStylePick
