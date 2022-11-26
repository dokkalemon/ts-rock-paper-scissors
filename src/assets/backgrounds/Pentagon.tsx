import { CSSProperties } from 'react'

interface IPentagonProps {
    color?: string | undefined;
    opacity?: string | undefined;
    style?: CSSProperties;
}

function Pentagon({ color = '#000', style, opacity = '.2' }: IPentagonProps) {
    return <div style={style}>
        <svg xmlns="http://www.w3.org/2000/svg" width="329" height="313">
            <path fill="none" stroke={color} stroke-width="15" d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z" opacity={opacity} />
        </svg>
    </div>
}

export default Pentagon