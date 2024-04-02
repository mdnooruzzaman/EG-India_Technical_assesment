import { Avatar } from 'antd'
import React from 'react'

interface BasicAvatarPropsI {
    src: string;
    size: any;
    style: React.CSSProperties;
}
const BasicAvatar: React.FC<BasicAvatarPropsI> = ({src, size, style}) =>  <Avatar size={size} style={style} src={src} /> 

export default BasicAvatar