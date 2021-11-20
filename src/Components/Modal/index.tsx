import React, {FC} from "react";
import './style.scss'

interface PropsModal {
    visible: boolean
    setVisible: (vis: boolean) => void
}

const Modal: FC<PropsModal> = ({children, setVisible, visible}) => {
    return (
        <div onClick={() => setVisible(false)} className={["modal", visible ? "active" : ""].join(" ")}>
            <div className={"bodyModal"} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal