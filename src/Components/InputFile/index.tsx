import React, {FC} from "react";
import "./style.scss"
import {imageUrl} from "../../utils/imageUrl";

type InputFileProps = {
    setValue: (value: string) => void
}

const InputFile: FC<InputFileProps> = ({setValue}) => {
    return (<label className="fileUpload">
        <input
            className={"inputFile"}
            accept={"image/png,image/jpeg"}
            type={"file"}
            onChange={(e) => setValue(imageUrl(e))}
        />
        file
    </label>)
}

export default InputFile