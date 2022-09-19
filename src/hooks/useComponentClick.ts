/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-09-19 15:04:51
 * @LastEditTime: 2022-09-19 15:04:54
 */
const useComponentClick = (props: any) => {
    const handleClick = () => {
        if (props.actionType && props.url && !props.isEditing) {
            window.location.href = props.url
        }
    }
    return handleClick
}

export default useComponentClick
