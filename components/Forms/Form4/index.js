import styles from "../Forms.module.scss";

export default function Form4({ onBack, onNext, visited }) {
    const formContainerStyle = visited ? styles.backAnim : styles.nextAnim;
    return <div tabIndex={0} className={formContainerStyle}>
        <p className="font-bold text-2xl">Add Family Details

        </p>
        <form>

            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Do you want to prepare your returns together?
                </div>
                <div className={styles.inputGroup}>
                    <select style={{ width: 164 }}>
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
                    Did your marital status change in 2021?
                </div>
                <div className={styles.inputGroup}>
                    <select style={{ width: 164 }}>
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
                    (If yes)What was your marital status before the change?
                </div>
                <div className={styles.inputGroup}>
                    <select style={{ width: 164 }}>
                        <option>

                        </option>
                        <option>
                            Single,separated, divorced,Widowed
                        </option>
                        <option>
                            Married, Common-Law partner
                        </option>

                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Do you have any dependents
                </div>
                <div className={styles.inputGroup}>
                    <select style={{ width: 164 }}>
                        <option>

                        </option>
                        <option>
                            Yes (Accordingly different sections open in the Dependents tab)

                        </option>
                        <option>
                            No
                        </option>

                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Did you have any children in shared custody in 2021?
                </div>
                <div className={styles.inputGroup}>
                    <select style={{ width: 164 }}>
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