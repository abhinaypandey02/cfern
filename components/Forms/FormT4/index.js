import styles from "../Forms.module.scss";
import tooltips from '../../../helpers/tooltips.json'
import {useState} from "react";
import tooltipStyles from '../../Tooltip/Tooltip.module.scss';
import Tooltip from "../../Tooltip";
import {useForm} from "react-hook-form";
import ErrorMessageComponent from "../../../helpers/errorMessageComponent";

function SingleT4Form({deleteForm, showDelete, id}) {
    const [tooltipToShow, setTooltipToShow] = useState(-1);
    const [extraBoxes, setExtraBoxes] = useState([]);
    const [employeeName, setEmployeeName] = useState("Statement of Remuneration Paid");
    const IMP = [14, 16, 17, 18, 20]
    return <div tabIndex={0} className={"m-2 my-7"}>
        <div className="font-bold text-2xl mb-4 flex justify-between "><span>T4: {employeeName}</span>{showDelete &&
            <button className={'font-extralight'} onClick={deleteForm}><img src="https://img.icons8.com/material-sharp/24/undefined/delete.png"/></button>}
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
                    {tooltipToShow === 10 && <div className={tooltipStyles.tooltip}>
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

                    {tooltipToShow === e && <div className={tooltipStyles.tooltip}>
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
function SingleT5Form({deleteForm, showDelete, id}) {
    const [tooltipToShow, setTooltipToShow] = useState(-1);
    const [extraBoxes, setExtraBoxes] = useState([]);
    const [employeeName, setEmployeeName] = useState("Statement of Investment Income");
    const IMP = [24,25,26,13,18,10,11,12]
    return <div tabIndex={0} className={"m-2 my-7"}>
        <div className="font-bold text-2xl mb-4 flex justify-between "><span>T5: {employeeName}</span>{showDelete &&
            <button className={'font-extralight'} onClick={deleteForm}><img src="https://img.icons8.com/material-sharp/24/undefined/delete.png"/></button>}
        </div>
        <form>
            <div className={styles.t4formGroup}>
                <div className={styles.formLabel}>
                    Name of payer
                </div>
                <div className={styles.inputGroup}>
                    <input onBlur={e => setEmployeeName(e.target.value)} type={'text'} name={'first name'}
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
                        Exchange rate

                    </div>
                    <input type={'number'}/>
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
                    <input type={'text'} id={"imp_box_" + id + e}/>
                </span>)}

            </div>

            <div className={styles.formLabel} style={{margin: "15px 15px 0"}}>
                Other boxes on your T5
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
            <div className={styles.formGroup} style={{backgroundColor:"#ececec",padding:10}}>
                <div className={styles.inputGroup+" justify-between"}>
                    <div className={''}>
                        <div className={styles.formLabel}>
                            If this is a joint account, your share
                        </div>
                        <input type={"number"}/>
                        <Tooltip text={'If this is a joint account, enter the amount(s) as they appear on this T5. For example: if you earned $100 of interest in box 13 and own 75% of this account, enter $100 in box 13, and 75% in the box to the left. We\'ll then report $75 on your return.'}/>
                    </div>
                    <div>
                        <div className={styles.formLabel}>
                            Share with
                        </div>
                        <input type={"text"}/>
                    </div>
                </div>
            </div>
        </form>

    </div>

}
const SEARCH_OPTIONS=["T4","T5"]
export default function FormT4({onBack,onNext, visited}) {
    const formData = useState([]);
    const [t4Forms, setT4Forms] = useState([]);
    const [t5Forms, setT5Forms] = useState([]);
    const formContainerStyle = visited ? styles.backAnim : styles.nextAnim;

    function deleteT4Form(id) {
        return () => {
            setT4Forms(old => old.filter(f => f !== id));
        }
    }
    function deleteT5Form(id) {
        return () => {
            setT4Forms(old => old.filter(f => f !== id));
        }
    }
    function addForm({searchTerm}){
        if(searchTerm==="T4"){
            setT4Forms(o => [...o, o.length])
        } else {
            setT5Forms(o => [...o, o.length])

        }
    }
    const {register,handleSubmit, formState:{errors}}=useForm();
    return <div className={formContainerStyle}>
        <h1 className={'text-center font-bold mb-5'} style={{fontSize:22}}>Add income tax forms, deductions, and credits</h1>
        <div className={styles.t4formGroup}>
            <div className={'mb-5 w-full'}>
                <form onSubmit={handleSubmit(addForm)} className={styles.inputGroup+ " w-full "}>

                    <input {...register("searchTerm",{validate:{validForm:v=>SEARCH_OPTIONS.includes(v)}})} placeholder={'Search to add forms (e.g. T4, T5)'} type={'text'} list="browsers" className={'flex-grow !max-w-full'}/>
                    <datalist id="browsers">
                        {SEARCH_OPTIONS.map(s=><option key={s} value={s}/>)}
                    </datalist>
                    <button className={styles.btnBack} type={'submit'}>+</button>
                </form>
                <ErrorMessageComponent e={errors['searchTerm']}/>
            </div>

        </div>


        <div className='flex flex-wrap'>
            {t4Forms.map((form, i) => <div key={form}>
                <SingleT4Form deleteForm={deleteT4Form(form)} id={form} showDelete={true}/>
                {i < t4Forms.length - 1 && <hr/>}
            </div>)}

        </div>
        <div className='flex flex-wrap'>
            {t5Forms.map((form, i) => <div key={form}>
                <SingleT5Form deleteForm={deleteT5Form(form)} id={form} showDelete={true}/>
                {i < t5Forms.length - 1 && <hr/>}
            </div>)}

        </div>
        <div className={styles.formGroup}>
            <div className={styles.inputGroup}>

                <button className={styles.btnBack} onClick={onBack}>Back</button>
                <button className={styles.btnNext} onClick={()=>onNext({})}>Preview</button>
            </div>

        </div>
    </div>

}