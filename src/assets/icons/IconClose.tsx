import { CSSProperties } from 'react'

interface IIconCloseProps {
    color?: string | undefined;
    opacity?: string | undefined;
    style?: CSSProperties;
}

function IconClose({ color = '#3B4262', style, opacity = '.25' }: IIconCloseProps) {
    return <div style={style}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path fill={color} fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity={opacity} />
        </svg>
    </div>
}

export default IconClose