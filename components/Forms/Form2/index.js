import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
export default function Form2({onBack,onNext,visited,formData}){
    const {register, handleSubmit, formState:{errors}}=useForm({defaultValues:formData});
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle}>
        <p className="font-bold text-2xl">Additional Details
        </p>
        <form>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Your Province
                </div>
                <div className={styles.inputGroup}>
                    <input type={'text'} name={'first name'} placeholder={'Province'}/>
                    </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Territory of residence on December 31, 2022
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:164}}>
                    <option>
                            
                        </option>
                        <option>
                            On
                        </option>
                        
                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                   Mailing Address
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'} name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Is your home address same as your mailing address above?
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:164}}>
                    <option>
                        
                        </option>
                        <option>
                            Yes
                        </option>
                        <option>
                            No
                        </option>
                        
                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Your current province or territory of residence if it is different from your mailing address above.
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'} name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Is this return for a deceased person?
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:164}}>
                    <option>
                        
                        </option>
                        <option>
                            Yes
                        </option>
                        <option>
                            No
                        </option>
                        
                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Will you be filing the Income tax return with CRA for the first time?
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:164}}>
                    <option>
                        
                        </option>
                        <option>
                            Yes
                        </option>
                        <option>
                            No
                        </option>
                        
                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Did you become a resident of Canada (Immigrate) for tax purposes in 2022?
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:164}}>
                    <option>
                        
                        </option>
                        <option>
                            Yes
                        </option>
                        <option>
                            No
                        </option>
                        
                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Date of Entry (If yes)
                </div>
                <div className={styles.inputGroup}>
                    <input type={'date'} name={'date of birth'}/>
                </div>

            </div>
            
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button className={styles.btnBack} onClick={onBack}>Back</button>
                    <button className={styles.btnNext} onClick={onNext}>Next</button>

                </div>

            </div>
        </form>
    </div>
}