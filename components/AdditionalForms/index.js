import styles from "../Slides/Forms.module.scss";
import {useState} from "react";
import {useForm} from "react-hook-form";
import ErrorMessageComponent from "../ErrorMessageComponent";
import {T4} from "./T4";
import {T5} from "./T5";
const SEARCH_OPTIONS=["T4","T5"]
export default function FormT4({onBack,onNext, visited,formData}) {
    const [t4Forms, setT4Forms] = useState(formData.t4Forms||[]);
    const [t5Forms, setT5Forms] = useState(formData.t5Forms||[]);
    const formContainerStyle = visited ? styles.backAnim : styles.nextAnim;

    function deleteT4Form(id) {
        return () => {
            setT4Forms(old => old.filter(f => f.id !== id));
        }
    }
    function deleteT5Form(id) {
        return () => {
            setT5Forms(old => old.filter(f => f.id !== id));
        }
    }
    function getSum(forms){
        const FORM={};
        forms.forEach(form=>{
            Object.keys(form).forEach(key=>{
                if(key==='box10')FORM[key]=form[key]
                else if(FORM[key]) FORM[key]+=form[key];
                else FORM[key]=form[key]

            })
        })
        return FORM;
    }
    function addForm({searchTerm}){
        if(searchTerm==="T4"){
            setT4Forms(o => [...o, {id:o.length}])
        } else {
            setT5Forms(o => [...o, {id:o.length}])

        }
    }
    const {register,handleSubmit, formState:{errors}}=useForm();
    return <div className={formContainerStyle}>
        <h1 className={'text-center font-bold mb-5'} style={{fontSize:22}}>Add income tax forms, deductions, and credits</h1>
        <div className={styles.t4formGroup}>
            <div className={'mb-5 w-full'}>
                <form  onSubmit={handleSubmit(addForm)} className={styles.inputGroup+ " w-full "}>

                    <input {...register("searchTerm",{validate:{validForm:v=>SEARCH_OPTIONS.includes(v)}})} placeholder={'Search to add forms (e.g. T4, T5)'} type={'text'} list="browsers" className={'flex-grow !max-w-full'}/>
                    <datalist id="browsers">
                        {SEARCH_OPTIONS.map(s=><option key={s} value={s}/>)}
                    </datalist>
                    <button className={styles.btnBack} type={'submit'}>+</button>
                </form>
                <ErrorMessageComponent e={errors['searchTerm']}/>
            </div>

        </div>

        <form onSubmit={(e)=> {
            e.preventDefault();
            if(t4Forms.length===0) {
                alert("T4 Form required to generate the pdf!");
                return;
            }
            const T4={},T5={};
            t4Forms.forEach(form=>{
                Object.keys(form).forEach(key=>{
                    if(T4[key]) T4[key]+=form[key];
                })
            })
            t5Forms.forEach(form=>{
                Object.keys(form).forEach(key=>{
                    if(T4[key]) T4[key]+=form[key];
                })
            })

            onNext({T4:getSum(t4Forms), T5:getSum(t5Forms)})
        }}>
            <div className='flex flex-wrap'>
                {t4Forms.map((form, i) => <div key={form.id}>
                    <T4 setT4Forms={setT4Forms} deleteForm={deleteT4Form(form.id)} form={form} showDelete={true}/>
                    {i < t4Forms.length - 1 && <hr/>}
                </div>)}

            </div>
            <div className='flex flex-wrap'>
                {t5Forms.map((form, i) => <div key={form.id}>
                    <T5 deleteForm={deleteT5Form(form.id)} id={form.id} showDelete={true}/>
                    {i < t5Forms.length - 1 && <hr/>}
                </div>)}

            </div>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button className={styles.btnBack} type={'button'} onClick={()=>{
                        if (window.confirm("There might be unsaved changes. Are you sure want to go back?")) onBack();
                    }}>Back</button>
                    <button className={styles.btnNext} type={'submit'}>Preview</button>
                </div>

            </div>
        </form>

    </div>

}