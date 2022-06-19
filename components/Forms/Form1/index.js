import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import ErrorMessageComponent from "../../../helpers/errorMessageComponent";
import {useEffect} from "react";
export default function Form1({onNext,formData,visited}){
    const {register, watch, handleSubmit, formState:{errors}}=useForm({defaultValues:formData});
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }
    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl">About You</p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Name *
                </div>
                <div className={styles.inputGroup }>
                    <input type={'text'} {...register('firstName',{required:true})}   placeholder={'First Name'}/>
                    <input type={'text'} {...register('middleName')} placeholder={'Middle Name'}/>
                    <input type={'text'} {...register('lastName',{required:true})} placeholder={'Last Name'}/>
                </div>
                <ErrorMessageComponent e={errors.firstName||errors.lastName||errors.middleName}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Social Insurance number *
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'} {...register('sin',{required:true})}   placeholder={''}/>
                </div>
                <ErrorMessageComponent e={errors['sin']}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Date of birth *
                </div>
                <div className={styles.inputGroup}>
                    <input {...register('dob',{required:true})} type={'date'}/>
                </div>
                <ErrorMessageComponent e={errors['dob']}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Preferred language *
                </div>
                <div className={styles.inputGroup}>
                    <select {...register('preferredLanguage',{validate:{
                            notBlank:v=>v!==''
                        }})} style={{width:164}}>
                        <option value={''}>
                        </option>
                        <option value={"English"}>
                            English
                        </option>
                        <option  value={"French"}>
                           French
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={errors['preferredLanguage']}/>


            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Is this return for a deceased person?
                </div>
                <div className={styles.inputGroup + ""}>
                    <select  {...register('forDeceased')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={errors['forDeceased']}/>



            </div>
            {watch("forDeceased")==='1'&&<div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Date of death
                </div>
                <div className={styles.inputGroup}>
                    <input {...register('dod',{required:true})} type={'date'}/>
                </div>
                <ErrorMessageComponent e={errors['dod']}/>

            </div>}
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button type={'submit'} className={styles.btnNext} >Next</button>
                </div>

            </div>
        </form>
    </div>
}