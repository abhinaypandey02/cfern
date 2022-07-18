import styles from "../../Slides/Forms.module.scss";
import tooltipStyles from "../../Tooltip/Tooltip.module.scss";
import tooltips from "../../../helpers/values/tooltips.json";
import {useEffect, useState} from "react";

export function T4({deleteForm, showDelete, form, setT4Forms}) {
    const [tooltipToShow, setTooltipToShow] = useState(-1);
    const [extraBoxes, setExtraBoxes] = useState(form.extraBoxes||[]);
    const [employeeName, setEmployeeName] = useState("Statement of Remuneration Paid");
    const IMP = [14, 16, 17, 18, 20, 22, 24, 26, 44, 46, 50, 52, 55, 56, 29];
    const T4Validations={
        16:{
            type:'number',
            max:290.51
        },
        17:{
            notAllowed:(form.cpp||form.ei||(form.ppip&&form.box10!=='QC')),
        },
        26:{
            notAllowed:(form.cpp)
        },
        24:{
            notAllowed:(form.ei)
        },
    }
    useEffect(()=>{
        setT4Forms(o=>{
            o[form.id].extraBoxes=extraBoxes;
            return [...o];
        })
    },[extraBoxes, form.id, setT4Forms])
    return <div tabIndex={0} className={"m-2 my-7"}>
        <div className="font-bold text-2xl mb-4 flex justify-between "><span>T4: {employeeName}</span>{showDelete &&
            <button className={'font-extralight'} onClick={deleteForm}><img src="https://img.icons8.com/material-sharp/24/undefined/delete.png"/></button>}
        </div>
        <div className={styles.t4formGroup}>
            <div className={styles.formLabel}>
                Company&apos;s Name
            </div>
            <div className={styles.inputGroup}>
                <input value={form.employeeName} onChange={(e)=>{
                    setT4Forms(o=>{
                        o[form.id].employeeName=e.target.value;
                        return [...o];
                    })}
                } onBlur={e => setEmployeeName(e.target.value)} type={'text'} name={'first name'}
                       placeholder={""}/>
            </div>

        </div>
        <div className={styles.t4formGroup}>
                <span className={styles.inputGroup}>
                    {tooltipToShow === 10 && <div className={tooltipStyles.tooltip}>
                        {tooltips['t4'][10]}
                    </div>}
                    <div tabIndex={0} onMouseEnter={() => setTooltipToShow(10)}
                         onMouseLeave={() => setTooltipToShow(-1)} className={styles.formLabel}>
                        10

                    </div>
                    <select required={true} defaultValue={form.box10} onChange={ev=>{setT4Forms(o=>{
                        o[form.id][`box10`]=ev.target.value;
                        return [...o];
                    })}} style={{width: 70}}>
                        <option value={undefined}></option>
                        <option value="AB">AB</option>
                        <option value="BC">BC</option>
                        <option value="MB">MB</option>
                        <option value="NB">NB</option>
                        <option value="NL">NL</option>
                        <option value="NS">NS</option>
                        <option value="NT">NT</option>
                        <option value="NU">NU</option>
                        <option value="ON">ON</option>
                        <option value="PE">PE</option>
                        <option value="QC">QC</option>
                        <option value="SK">SK</option>
                        <option value="YT">YT</option>
						<option value="US">US</option>
						<option value="EZ">EZ</option>
						<option value="EX">EX</option>
						<option value="ZZ">ZZ</option>
                    </select>
                </span>
            <span className={styles.inputGroup}>
                    {tooltipToShow === 28 && <div className={tooltipStyles.tooltip}>
                        {tooltips['t4'][28]}
                    </div>}
                <div tabIndex={0} onMouseEnter={() => setTooltipToShow(28)}
                     onMouseLeave={() => setTooltipToShow(-1)} className={styles.formLabel + "  md:!ml-4 m-0"}>
                    28
                </div>
                <label className="form-check-label inline-block text-gray-800  mx-4" htmlFor="flexCheckDefault">
                    CPP
                </label>
                <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
                    type="checkbox" onChange={ev=>{

                    setT4Forms(o=>{
                        o[form.id]['cpp']=ev.target.checked;
                        return [...o];
                    })}} defaultChecked={form.cpp} id="flexCheckDefault"/>
                <label className="form-check-label inline-block text-gray-800  mx-4" htmlFor="flexCheckDefault">
                    EI
                </label>
                <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
                    type="checkbox" onChange={ev=>{

                    setT4Forms(o=>{
                        o[form.id]['ei']=ev.target.checked;
                        return [...o];
                    })}} defaultChecked={form.ei} id="flexCheckDefault"/>
                <label className="form-check-label inline-block text-gray-800 mx-4" htmlFor="flexCheckDefault">
                    PPIP
                </label>
                <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
                    type="checkbox" onChange={ev=>{

                    setT4Forms(o=>{
                        o[form.id]['ppip']=ev.target.checked;
                        return [...o];
                    })}} defaultChecked={form.ppip} id="flexCheckDefault"/>
                </span>

        </div>
        <div className={styles.t4formGroup}>

            {IMP.map(e => <span className={styles.inputGroup} key={e}>

                    {tooltipToShow === e && <div className={tooltipStyles.tooltip}>
                        {tooltips['t4'][e]}
                    </div>}
                <div tabIndex={0} onMouseEnter={() => setTooltipToShow(e)} onMouseLeave={() => setTooltipToShow(-1)}
                     className={styles.formLabel}>
                        {e}
                    </div>
                    <input min={T4Validations[e]?.min} placeholder={T4Validations[e]?.notAllowed?"Exempted":""} disabled={T4Validations[e]?.notAllowed} max={T4Validations[e]?.max} defaultValue={form[`box${e}`]} onChange={ev=>{setT4Forms(o=>{
                        o[form.id][`box${e}`]=ev.target.value;
                        return [...o];
                    })}} type={T4Validations[e]?T4Validations[e].type:'text'} id={"imp_box_" + form.id + e}/>
                </span>)}

        </div>

        <div className={styles.formLabel} style={{margin: "15px 15px 0"}}>
            Other boxes on your T4
        </div>
        <div className={styles.t4formGroup}>

            {
                extraBoxes.map(box => <span className={styles.inputGroup} key={box}>

                    {tooltipToShow === box && <div className={styles.tooltip}>
                        {tooltips['t4'][box]}
                    </div>}
                    <div tabIndex={0} onMouseEnter={() => setTooltipToShow(box)}
                         onMouseLeave={() => setTooltipToShow(-1)} className={styles.formLabel}>
                        {box}
                    </div>
                    <input min={T4Validations[box]?.min} placeholder={T4Validations[box]?.notAllowed?"Exempted":""} disabled={T4Validations[box]?.notAllowed} max={T4Validations[box]?.max} defaultValue={form[`box${box}`]} onChange={e=>{setT4Forms(o=>{

                        o[form.id][`box${box}`]=e.target.value;
                        return [...o];
                    })}} type={T4Validations[box]?T4Validations[box].type:'text'} id={"imp_box_" + form.id + box}/>
                </span>)
            }
            <span className={styles.inputGroup}>
                    <input style={{width: 40}} width={20} placeholder={'Box'} onBlur={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) {
                            if (IMP.includes(val) || extraBoxes.includes(val)) {
                                const ele = document.getElementById("imp_box_" + id + val);
                                if (ele) {
                                    ele.focus();
                                }
                            } else {
                                setExtraBoxes(old => [...old, val])
                            }
                        }
                        e.target.value = ""
                    }}/>
                </span>


        </div>


    </div>

}