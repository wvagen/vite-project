import React from 'react'

interface Props {
    color: 'primary' | 'secondary' | 'success',
    label: string,
    changeMyColor(color: string): void,
    changeMyLabel(label: string): void,
    onOpenAlert: () => void


}

const Button = ({ color, label, changeMyColor, changeMyLabel, onOpenAlert }: Props) => {
    return (
        <>
            <button type="button" onClick={() => {
                changeMyColor(color);
                changeMyLabel(label);
                onOpenAlert;
            }} className={'btn btn-' + color}>{label}</button>
        </>
    )
}

export default Button