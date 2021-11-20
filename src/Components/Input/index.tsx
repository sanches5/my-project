import React from 'react';
import './style.scss';

const Input = ({value, onChange}: { value: string, onChange: (v: string) => void }) => {
    return <input
        type="text"
        className={"input"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />
}

export default Input;
