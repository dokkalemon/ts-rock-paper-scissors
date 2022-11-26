import { CSSProperties } from 'react'

interface ITriangleProps {
    color?: string | undefined;
    opacity?: string | undefined;
    style?: CSSProperties;
}

function Triangle({ color = '#000', style, opacity = '.2' }: ITriangleProps) {
    return <div style={style}>
        <svg width="313" height="278" xmlns="http://www.w3.org/2000/svg">
            <path stroke={color} stroke-width="15" fill="none" opacity={opacity} d="M156.5 262 300 8H13z" />
        </svg>
    </div>
}

export default Triangle