import React, {FC} from 'react';
import './style.scss'

type FormTaskProps = {
    handleSaveTask: () => void
    textTask: string
    setTextTask: (value: string) => void
}

const FormTaskCreate: FC<FormTaskProps> = ({handleSaveTask, textTask, setTextTask}) => {
    return <div className={"formTaskCreate"}>
        <input
            type="text"
            className={"input"}
            value={textTask}
            onChange={(e) => setTextTask(e.target.value)}
        />
        <button
            className={"buttonCreateTask"}
            onClick={handleSaveTask}
        >create task
        </button>
    </div>
}

export default FormTaskCreate;
