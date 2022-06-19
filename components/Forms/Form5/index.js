import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import ErrorMessageComponent from "../../../helpers/errorMessageComponent";
import Tooltip from "../../Tooltip";
import {PROVINCES,MARITAL_STATUSES} from '../../../helpers/values.json';

export default function Form5({onNext,onBack,formData,visited}){
    const {register,watch, handleSubmit, formState:{errors:e}}=useForm({defaultValues:formData});
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl font">You and Your Family</p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Marital status on December 31, 2021 *
                </div>
                <div className={styles.inputGroup}>
                    <select {...register('maritalStatus')}   placeholder={''}>
                        <option></option>
                        {MARITAL_STATUSES.map(p=><option value={p} key={p}>{p}</option>)}
                    </select>
                </div>
                <ErrorMessageComponent e={e['maritalStatus']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Do you want to prepare your returns together?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('prepareReturnsTogether')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['prepareReturnsTogether']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Did your marital status change in 2021?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('maritalStatusChanged')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['maritalStatusChanged']}/>
            </div>
            {watch("maritalStatusChanged")==='1'&&<div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Date of change
                </div>
                <div className={styles.inputGroup}>
                    <input {...register('dateOfChange',{required:true})} type={'date'}/>
                </div>
                <ErrorMessageComponent e={e['dateOfChange']}/>

            </div>}
            {watch("maritalStatusChanged")==='1'&&<div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    What was your marital status before the change?
                </div>
                <div className={styles.inputGroup}>
                    <select {...register('maritalStatusBefore',{validate:{notBlank:v=>v!==''}})}   placeholder={''}>
                        <option></option>
                        {MARITAL_STATUSES.map(p=><option value={p} key={p}>{p}</option>)}
                    </select>
                </div>
                <ErrorMessageComponent e={e['maritalStatusBefore']}/>
            </div>}

            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Do you have any dependants?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('anyDependents')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['anyDependents']}/>
            </div>
            {watch("anyDependents")==='1'&&<div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Did you have any children in shared custody? *
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('sharedCustody',{validate:{notBlank:v=>v!==''}})} style={{width:100}}>
                        <option/>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['sharedCustody']}/>
            </div>}
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button onClick={onBack} className={styles.btnBack} >Back</button>
                    <button type={'submit'} className={styles.btnNext} >Next</button>
                </div>

            </div>
        </form>
    </div>
}