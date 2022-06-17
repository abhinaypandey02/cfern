import styles from "../Forms.module.scss";
export default function Form1({onNext,visited}){
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl">Sign Up</p>
        <form>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Name
                </div>
                <div className={styles.inputGroup }>
                    <input type={'text'}  name={'first name' } placeholder={'First Name'}/>
                    <input type={'text'}  name={'middle name'} placeholder={'Middle Name'}/>
                    <input type={'text'}  name={'last name'} placeholder={'Last Name'}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Social Insurance number
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Date of birth
                </div>
                <div className={styles.inputGroup}>
                    <input type={'date'}  name={'date of birth'}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Province/Territory
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:164}}>
                        <option>

                        </option>
                        <option>
                            Canada
                        </option>
                        <option>
                            United States
                        </option>
                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Marital Status
                </div>
                <div className={styles.inputGroup + ""}>
                    <select style={{width:70}}>
                        <option>

                        </option>
                        <option>
                            Married
                        </option>
                        <option>
                            Single
                        </option>
                        <option>
                            Divorced
                        </option>
                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button className={styles.btnNext} onClick={onNext}>Next</button>
                </div>

            </div>
        </form>
    </div>
}