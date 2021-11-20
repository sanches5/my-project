import React, {FC, useState} from "react";
import "./style.scss"

interface PropsExpandText {
    text: string
}

const ExpandText: FC<PropsExpandText> = ({text}) => {
    const [visible, setVisible] = useState<boolean>(false)

    return (<div className={"expand"}>
        <p className={["textPost", visible ? "" : "preVisible"].join(" ")}>
            {text.length > 50 && !visible ? text.slice(0, 50) + "..." : text}
        </p>
        {text.length > 50 ? <p
            className={"expandTextPost"}
            onClick={() => setVisible(!visible)}>
            {visible ? "expand text" : "collapse text"}
        </p> : null}
    </div>)
}

export default ExpandText