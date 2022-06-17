import styles from "../Forms.module.scss";

export default function Form6({ onBack, onNext, visited }) {
    const formContainerStyle = visited ? styles.backAnim : styles.nextAnim;
    return <div tabIndex={0} className={formContainerStyle}>
        <p className="font-bold text-2xl">General important information

        </p>
        <form>

            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Did you own or hold specified foreign property where the total cost amount of all such property, at any time in 2021, was more than CAN$100,000?
                </div>
                <div className={styles.inputGroup}>
                    <select style={{ width: 164 }}>
                        <option>

                        </option>
                        <option>
                            Yes(Accordingly recommend filling out form T1135)
                        </option>
                        <option>
                            No
                        </option>

                    </select>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Did you dispose of your principal residence in 2021?
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
                Do you have Canadian citizenship? 
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
                if above is yes: As a Canadian citizen, do you authorize the Canada Revenue Agency to give your name, address, date of birth, and citizenship to Elections Canada to update the National Register of Electors or, if you are 14 to 17 years of age, the Register of Future Electors?

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
                Are you registered or entitled to be registered under the Indian Act?
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
                Were you confined to a prison or similar institution for a period of 90 days or more in 2021?   \
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
                if the above is YES: Were you in prison on December 31, 2021 and had been there for a total of more than six months during 2021? 
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
            <p className="text-lg">Optional benefits</p>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Will you claim the climate action benefit?
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
                Will you apply for the Ontario Trillium Benefit?
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