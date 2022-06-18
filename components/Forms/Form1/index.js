import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import ErrorMessageComponent from "../../../helpers/errorMessageComponent";
export default function Form1({onNext,formData,visited}){
    const {register, handleSubmit, formState:{errors}}=useForm({defaultValues:formData});
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl">Sign Up</p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Name
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
                    Social Insurance number
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'} {...register('sin',{pattern:/^[0-9]+$/})}   placeholder={''}/>
                </div>
                <ErrorMessageComponent e={errors['sin']}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Date of birth
                </div>
                <div className={styles.inputGroup}>
                    <input {...register('dob',{required:true})} type={'date'}/>
                </div>
                <ErrorMessageComponent e={errors['dob']}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Province/Territory
                </div>
                <div className={styles.inputGroup}>
                    <select {...register('province',{validate:{
                            notBlank:v=>v!==''
                        }})} style={{width:164}}>
                        <option value={''}>
                        </option>
                        <option value={"Canada2"}>
                            Canada
                        </option>
                        <option  value={"United States"}>
                            United States
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={errors['province']}/>


            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Marital Status
                </div>
                <div className={styles.inputGroup + ""}>
                    <select  {...register('maritalStatus',{validate:{
                            notBlank:v=> {
                                return v !== ''
                            }
                        }})} style={{width:100}}>
                        <option value={''}>

                        </option>
                        <option value={'Married'}>
                            Married
                        </option>
                        <option value={'Single'}>
                            Single
                        </option>
                        <option value={'Divorced'}>
                            Divorced
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={errors['maritalStatus']}/>



            </div>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button type={'submit'} className={styles.btnNext} >Next</button>
                </div>

            </div>
        </form>
    </div>
}