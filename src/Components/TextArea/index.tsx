import React, {FC} from "react";
import "./style.scss"

type TextAreaProps = {
    value: string,
    setValue: (value: string) => void
}

const TextArea: FC<TextAreaProps> = ({value, setValue}) => {
    return (<>
        <textarea
            className={"textArea"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            cols={30}
            rows={4}
            onKeyDown={(e) => e.code === "Enter" ? e.currentTarget.rows = e.currentTarget.rows + 1 : ""}/>
    </>)
}

export default TextArea