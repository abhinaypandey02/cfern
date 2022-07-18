import React from 'react';
import styles from "../styles.module.scss";
import {FormInput} from "../FormInput";
import Tooltip from "../../Tooltip";

export function FormGroup({label, inputs, control}) {
    const required = inputs.find(inp => inp.rules && inp.rules.required);
    inputs = inputs.filter(inp => inp.visibility !== false);
    const validInputElements=inputs.filter(inp=>inp.name)
    if (validInputElements.length === 0) return null;
    const inputsToRender = inputs.map(inp => {
        if (inp.component) return inp.component;
        if (inp.tooltip) return <Tooltip text={inp.tooltip}/>
        return <FormInput {...inp} control={control} label={label} key={inp.name}/>
    })

    return <div className={styles.formGroup}>
        <div className={styles.formLabel}>
            {label} {required && "*"}
        </div>
        <div className={styles.inputGroup}>
            {inputsToRender}
        </div>
    </div>
}