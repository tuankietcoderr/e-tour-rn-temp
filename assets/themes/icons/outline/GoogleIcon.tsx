import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import SvgWraper from '../SvgWrapper'
const GoogleIcon = (props: SvgProps) => (
    <SvgWraper {...props}>
        <Path
            d="M18.737 8.446h-8.065v3.315h4.607a3.933 3.933 0 0 1-1.71 2.585c-.768.513-1.748.817-2.9.817-2.23 0-4.115-1.507-4.79-3.531a5.191 5.191 0 0 1-.267-1.628c0-.564.098-1.113.267-1.627.677-2.022 2.563-3.529 4.793-3.529 1.257 0 2.384.433 3.272 1.281L16.4 3.672c-1.484-1.384-3.42-2.232-5.727-2.232a8.557 8.557 0 0 0-8.56 8.567 8.557 8.557 0 0 0 8.56 8.565c2.312 0 4.25-.768 5.665-2.076 1.618-1.492 2.554-3.688 2.554-6.297 0-.608-.054-1.19-.154-1.753Z"
            fill={props.color || '#959595'}
        />
    </SvgWraper>
)
export default GoogleIcon
