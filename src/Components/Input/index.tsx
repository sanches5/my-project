import React from 'react';
import './style.scss';

const Input = ({textTask, setTextTask}:{textTask:string, setTextTask: (v: string) => void})  => {
    return <input type="text" className={"input"} value={textTask} onChange={(e) => setTextTask(e.target.value)}/>

}

export default Input;
