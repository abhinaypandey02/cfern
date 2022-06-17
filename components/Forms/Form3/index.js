import styles from "../Forms.module.scss";

export default function Form3({onBack,onNext,visited}){
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    return <div tabIndex={0} className={formContainerStyle}>
        <p className="font-bold text-2xl">Add Income

        </p>
        <form>
            
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Income Slips
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:164}}>
                        <option>

                        </option>
                        <option>
                            T4
                        </option>
                        <option>
                            T4A
                        </option>
                        <option>
                            T3
                        </option>
                        <option>
                            T5
                        </option>
                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Icnome Type
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:164}}>
                        <option>

                        </option>
                        <option>
                        Business Income
                        </option>
                        <option>
                        Rental Income
                        </option>
                        <option>
                        Capital gains or losses
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