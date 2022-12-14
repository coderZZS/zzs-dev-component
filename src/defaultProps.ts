import { without } from 'lodash-es'

export interface CommonDefaultProps {
    tag: string
    actionType: string
    url: string
    height: string
    width: string
    paddingLeft: string
    paddingRight: string
    paddingTop: string
    paddingBottom: string
    borderStyle: string
    borderColor: string
    borderWidth: string
    borderRadius: string
    boxShadow: string
    opacity: number
    position: string
    left: string
    top: string
    right: string
}

export const commonDefaultProps: CommonDefaultProps = {
    tag: 'div',
    // actions
    actionType: '',
    url: '',
    // size
    height: '',
    width: '200px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    // border type
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // shadow and opacity
    boxShadow: '0 0 0 #000000',
    opacity: 1,
    // position and x y
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0',
}

export interface TextDefaultProps extends CommonDefaultProps {
    text: string
    fontSize: string
    fontFamily: string
    fontWeight: string
    fontStyle: string
    textDecoration: string
    lineHeight: string
    textAlign: string
    color: string
    backgroundColor: string
}

export const textDefaultProps: TextDefaultProps = {
    // basic props - font styles
    text: '正文内容',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    ...commonDefaultProps,
}

export interface ImageComponentProps extends CommonDefaultProps {
    src: string
}
export const imageDefaultProps: ImageComponentProps = {
    src: 'test.url',
    ...commonDefaultProps,
}

export const shapeDefaultProps = {
    backgroundColor: '',
    ...commonDefaultProps,
}

export const isEditingProp = {
    isEditing: {
        type: Boolean,
        default: false,
    },
}

export const componentsDefaultProps = {
    'z-text': {
        props: textDefaultProps,
    },
    'z-image': {
        props: imageDefaultProps,
    },
    'z-shape': {
        props: shapeDefaultProps,
    },
}

export type PropsTypes = TextDefaultProps & ImageComponentProps

export const textStylePropsNames = without(Object.keys(textDefaultProps), 'actionType', 'text', 'url', 'tag')
export const imageDefaultPropsNames = without(Object.keys(imageDefaultProps))

export const transformToComponentProps = <T extends object>(props: T, extraProps?: { [key: string]: any }) => {
    type ReturnType = { [key in keyof T]: any }
    const mapProps: ReturnType = {} as ReturnType

    Object.keys(props).forEach((key: string) => {
        const value = props[key as keyof T] as any
        mapProps[key as keyof T] = {
            type: value.constructor,
            default: value,
        }
    })
    if (extraProps) {
        return { ...mapProps, ...extraProps }
    } else {
        return mapProps
    }
    // return mapValues(props, (item: any) => ({ type: item.constructor, default: item }))
}
