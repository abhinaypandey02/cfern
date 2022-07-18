import React from "react";
import {useController} from "react-hook-form";
import ErrorMessageComponent from "../../ErrorMessageComponent";

export function FormInput({name, type, placeholder, label, rules, control, options, wrapperClassName,inputClassName,dataList}) {
    const {field, fieldState: {error}} = useController({
        name: name, control: control, rules: rules,

    })
    return <div className={'relative p-[4px] '+wrapperClassName}>
        {options && <select className={inputClassName} {...field}>
            <option/>
            {options.map(o => <option key={o.code} value={o.code}>{o.name}</option>)}
        </select>}
        {!options && <input className={inputClassName} placeholder={(placeholder || label)+(rules&&rules.required?" *":"")} type={type || "text"} {...field} list={dataList&&"listFor"+name}/>}
        {dataList&&<datalist id={"listFor"+name}>
            <option value={""}/>
            {dataList.map((item, index) => <option key={item.code} value={item.code}>{item.name}</option>)}
        </datalist>}
        <div>
            {error && <ErrorMessageComponent e={error}/>}

        </div>
    </div>
}