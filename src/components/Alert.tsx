import { ReactNode, useState } from "react"

interface Props {
    color?: string
    label: string,
    onClose: () => void
}

const Alert = ({ color, label, onClose }: Props) => {
    return <>
        {<div className={'alert alert-' + color + ' alert-dismissible'} role="alert">
            {label}
            <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </>
}

export default Alert