import styles from "../Forms.module.scss";
export default function Form2({onBack,onNext,visited}){
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    return <div tabIndex={0} className={formContainerStyle}>
        <form>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Name
                </div>
                <div className={styles.inputGroup}>
                    <input type={'text'} name={'first name'} placeholder={'First Name'}/>
                    <input type={'text'} name={'middle name'} placeholder={'Middle Name'}/>
                    <input type={'text'} name={'last name'} placeholder={'Last Name'}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Social Insurance number
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'} name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Date of birth
                </div>
                <div className={styles.inputGroup}>
                    <input type={'date'} name={'date of birth'}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Preferred language
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:164}}>
                        <option>

                        </option>
                        <option>
                            English
                        </option>
                        <option>
                            French
                        </option>
                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Is this return for a deceased person?
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:70}}>
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
                <div className={styles.inputGroup}>
                    <button className={styles.btnBack} onClick={onBack}>Back</button>
                    <button className={styles.btnNext} onClick={onNext}>Next</button>

                </div>

            </div>
        </form>
    </div>
}