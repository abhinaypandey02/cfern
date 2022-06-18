import styles from "../Forms.module.scss";
import tooltips from '../../../helpers/tooltips.json'
import {useState} from "react";

function SingleT4Form({deleteForm, showDelete, id}) {
    const [tooltipToShow, setTooltipToShow] = useState(-1);
    const [extraBoxes, setExtraBoxes] = useState([]);
    const [employeeName, setEmployeeName] = useState("Statement of Remuneration Paid");
    const IMP = [14, 16, 17, 18, 20]
    return <div tabIndex={0} className={"m-2 my-7"}>
        <div className="font-bold text-2xl mb-4 flex justify-between "><span>T4: {employeeName}</span>{showDelete &&
            <button className={'font-extralight'} onClick={deleteForm}>X</button>}
        </div>
        <form>
            <div className={styles.t4formGroup}>
                <div className={styles.formLabel}>
                    Company&apos;s Name
                </div>
                <div className={styles.inputGroup}>
                    <input onBlur={e => setEmployeeName(e.target.value)} type={'text'} name={'first name'}
                           placeholder={""}/>
                </div>

            </div>
            <div className={styles.t4formGroup}>
                <span className={styles.inputGroup}>
                    {tooltipToShow === 10 && <div className={styles.tooltip}>
                        {tooltips['t4'][10]}
                    </div>}
                    <div tabIndex={0} onMouseEnter={() => setTooltipToShow(10)}
                         onMouseLeave={() => setTooltipToShow(-1)} className={styles.formLabel}>
                        10

                    </div>
                    <select style={{width: 70}}>
                        <option>AB</option>
                        <option>AB</option>
                        <option>AB</option>
                        <option>AB</option>
                        <option>AB</option>
                        <option>AB</option>
                        <option>AB</option>
                        <option>AB</option>
                        <option>AB</option>
                        <option>AB</option>
                    </select>
                </span>
                <span className={styles.inputGroup}>
                    {tooltipToShow === 28 && <div className={styles.tooltip}>
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
                    type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label inline-block text-gray-800  mx-4" htmlFor="flexCheckDefault">
                    CPP
                </label>
                <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
                    type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label inline-block text-gray-800 mx-4" htmlFor="flexCheckDefault">
                    CPP
                </label>
                <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
                    type="checkbox" value="" id="flexCheckDefault"/>
                </span>

            </div>
            <div className={styles.t4formGroup}>

                {IMP.map(e => <span className={styles.inputGroup} key={e}>

                    {tooltipToShow === e && <div className={styles.tooltip}>
                        {tooltips['t4'][e]}
                    </div>}
                    <div tabIndex={0} onMouseEnter={() => setTooltipToShow(e)} onMouseLeave={() => setTooltipToShow(-1)}
                         className={styles.formLabel}>
                        {e}
                    </div>
                    <input type={'text'} id={"imp_box_" + id + e}/>
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
                    <input type={'text'} id={"imp_box_" + id + box}/>
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

        </form>

    </div>

}

export default function FormT4({onBack, visited}) {
    const formData = useState([]);
    const [forms, setForms] = useState([0]);
    const formContainerStyle = visited ? styles.backAnim : styles.nextAnim;

    function deleteForm(id) {
        return () => {
            setForms(old => old.filter(f => f !== id));
        }
    }

    return <div className={formContainerStyle}>
        <button className={styles.btnBack} onClick={() => setForms(o => [...o, o.length])}>+</button>
        <div className='flex flex-wrap'>
            {forms.map((form, i) => <div key={form}>
                <SingleT4Form deleteForm={deleteForm(form)} id={form} showDelete={forms.length > 1}/>
                {i < forms.length - 1 && <hr/>}
            </div>)}

        </div>
        <div className={styles.formGroup}>
            <div className={styles.inputGroup}>

                <button className={styles.btnBack} onClick={onBack}>Back</button>
            </div>

        </div>
    </div>

}