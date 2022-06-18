import styles from "../Forms.module.scss";

export default function Form7({ onBack, visited }) {
    const formContainerStyle = visited ? styles.backAnim : styles.nextAnim;
    return <div tabIndex={0} className={formContainerStyle}>
        <p className="font-bold text-2xl">Dependants:

        </p>
        <form>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Name
                </div>
                <div className={styles.inputGroup }>
                    <input type={'text'}  name={'first name' } placeholder={'First Name'}/>
                    <input type={'text'}  name={'last name'} placeholder={'Last Name'}/>
                </div>

            </div>
                    
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Relationship to you              
                </div>
                <div className={styles.inputGroup}>
                    <select style={{ width: 164 }}>
                        <option>

                        </option>
                        <option>
                        Child
                        </option>
                        <option>
                            Parent
                        </option>
                        <option>
                            Grandchild
                        </option>
                        <option>
                            Grandparent
                        </option>
                        <option>
                            Brother or Sister
                        </option>
                        <option>
                            Aunty or Uncle
                        </option>
                        <option>
                            Niece or Nephew
                        </option>
                        <option>
                            Great Grandparents
                        </option>
                        <option>
                        Great-Aunt or Great-Uncle
                        </option>

                    </select>
                </div>

            </div>
            <p className="">Child:

        </p>
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
                    Social Insurance number (Optional)
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                   Net Income
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Did the “Child's Name” have an infirmity or disability?
              
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
                Is Saesha your eligible dependant? 

              
                </div>
                <div className={styles.inputGroup}>
                    <select style={{ width: 164 }}>
                        <option>
                        Check rules for eligible dependants.
You can only claim one individual as an eligible dependant
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
           
            <p className="text-lg">Tax credits for “child’s name”</p>

            
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Did you have any adoption expenses for “child’s name"

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
                If yes, the taxpayer will enter the amount of eligible expense 
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Do you want to claim different adoption expenses for Ontario?


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
                If Yes, Total Ontario adoption expense


                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Claim the Ontario amount for dependent children? (following are the options



                </div>
                <div className={styles.inputGroup}>
                    <select style={{ width: 164 }}>
                        <option>

                        </option>
                        <option>
                        Claim if eligible
                        </option>
                        <option>
                        do not claim
                        </option>

                    </select>
                </div>

            </div>
            <p className="text-lg">Child care expenses</p>

          
          
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Did you have child care expenses for “child’s name”
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
                If Yes,
Form T778 will be filled up and the output will go to Line/ Box 21400 of T1.

                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
           
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>

                    <button className={styles.btnBack} onClick={onBack}>Back</button>
                </div>

            </div>
        </form>
    </div>
}