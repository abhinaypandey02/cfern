import styles from "../Forms.module.scss";

export default function Form5({ onBack, onNext, visited }) {
    const formContainerStyle = visited ? styles.backAnim : styles.nextAnim;
    return <div tabIndex={0} className={formContainerStyle}>
        <p className="font-bold text-2xl">Spouse or Common-Law Partner

        </p>
        <form>

            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Do you want to prepare your returns together? Option to link return
                </div>
                <div className={styles.inputGroup}>
                    <select style={{ width: 164 }}>
                        <option>

                        </option>
                        <option>
                            Yes(If the taxpayer prefers to link the return, an option to build a return or select existing return under the same login is given.
                        </option>
                        <option>
                            No
                        </option>

                    </select>
                </div>

            </div>
            <p className="text-lg">Partner's Information</p>
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
                    Date of birth
                </div>
                <div className={styles.inputGroup}>
                    <input type={'date'}  name={'date of birth'}/>
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
            <p className="text-lg">Information from your spouse's or common-law partner's return.</p>

            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Don't have this information                </div>
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
                Check here if you don't want to report your partner’s income.
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
                Net Income (Mandatory): Amount from line 23600 of partner’s return.
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Amount of universal child care benefit (UCCB) from line 11700 of their return

                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Amount of UCCB repayment from line 21300 of their return.

                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                RDSP (Registered disability Savings Plan) Income: line12500 of partner’s return

                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Child care expenses (deduction): Line 21400 of partner’s return or allowable deduction amount from completed form T778)

                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                RDSP (Registered disability Savings Plan) Income repayment (Deduction): Line 23500 of partner’s return.
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Social benefit repaid: Line 23500 of partner’s return.
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Total Split Income from box 68360 of (Form T1206 - Tax on Split Income)
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Does your partner have any gains from mortgage foreclosures or conditional sales repossessions?
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
                Taxable capital gains Line 12700 of partner’s return

                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Gains from mortgage foreclosures and conditional sales repossessions (QFP): Line 12400 of Schedule 3 (5000-S3)

                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Gains from mortgage foreclosures and conditional sales repossessions (Other): Line 15500 of schedule 3 (5000-S3)
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'}  name={'first name'} placeholder={''}/>
                </div>

            </div>
            <p className="text-lg">Tax Situation</p>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Did your partner die in 2021?
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
                   if yes Date of Death
                </div>
                <div className={styles.inputGroup}>
                    <input type={'date'}  name={'date of birth'}/>
                </div>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Does your partner have an infirmity or disability?
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
                if Yes, Can you claim the Canada caregiver amount for your partner?
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
                Was your partner self-employed in 2021?
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
            <div className="form-check ml-4">
            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
            Check here if you <span className='font-bold'>can't</span> claim the amount for partner on line 30300
            </label>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Did you live together for all of 2021? (If no, the following questions follow)
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
                if no Did you live together on December 31, 2021?
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
                While living apart did you support (or were you being supported by) your partner?
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
                Was your partner a non-resident on December 31, 2021?

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
                Did you live in separate principal residences for medical reasons?
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
                Was your partner confined to a prison for a period of 90 days or more in 2021?
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
            <p className="text-lg">Amounts transferred from your partner </p>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                Would you like to transfer your partner’s credits?

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