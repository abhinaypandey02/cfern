import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import ErrorMessageComponent from "../../../helpers/errorMessageComponent";
import Tooltip from "../../Tooltip";
import {PROVINCES,SELF_GOVERNING_FIRST_NATIONS} from '../../../helpers/values.json';

export default function Form4({onNext,onBack,formData,visited}){
    const {register,watch, handleSubmit, formState:{errors:e}}=useForm({defaultValues:formData});
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl font">About Your Residence</p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    In which province or territory did you live on December 31, 2021? *
                </div>
                <div className={styles.inputGroup}>
                    <select {...register('province31dec',{validate:{notBlank:v=>v!==''}})}   placeholder={''}>
                        <option></option>
                        {PROVINCES.map(p=><option value={p} key={p}>{p}</option>)}
                    </select>
                    <Tooltip text={'If you emigrated or are a non-resident of Canada, you can\'t use Wealthsimple Tax.'}/>
                </div>
                <ErrorMessageComponent e={e['province31dec']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    If your province or territory of residence changed in 2021, enter the date of your move
                </div>
                <div className={styles.inputGroup}>
                    <input type={'date'} {...register('dateOfMove')}   placeholder={''}/>
                </div>
                <ErrorMessageComponent e={e['dateOfMove']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Is your home address the same as your mailing address? *
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('homeIsMailing',{validate:{notBlank:v=>v!==''}})} style={{width:100}}>
                        <option/>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['homeIsMailing']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    In which province or territory do you currently live? *
                </div>
                <div className={styles.inputGroup}>
                    <select {...register('provinceCurrent',{validate:{notBlank:v=>v!==''}})}   placeholder={''}>
                        <option></option>
                        {PROVINCES.map(p=><option value={p} key={p}>{p}</option>)}
                    </select>
                    <Tooltip text={'This is where you currently live. It can be the same or different than your current mailing address.'}/>
                </div>
                <ErrorMessageComponent e={e['provinceCurrent']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Did you reside within the Settlement Land of a Self-Governing Yukon First Nation on December 31, 2021?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('resideInYukon')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['resideInYukon']}/>
            </div>
            {watch("resideInYukon")==='1'&&<div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Which Self-Governing First Nation?
                </div>
                <div className={styles.inputGroup}>
                    <select {...register('selfGoverningNation',{required:true})}   placeholder={''}>
                        <option></option>
                        {SELF_GOVERNING_FIRST_NATIONS.map(p=><option value={p} key={p}>{p}</option>)}
                    </select>
                </div>
                <ErrorMessageComponent e={e['selfGoverningNation']}/>
            </div>}
            {watch("resideInYukon")==='1'&&<div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Are you a citizen of that Self-Governing First Nation?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('citizenOfSelfGoverning')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['resideInYukon']}/>
            </div>}
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Did you reside outside of Whitehorse on December 31, 2021? *
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('outsideWhitehorse',{validate:{notBlank:v=>v!==''}})} style={{width:100}}>
                        <option/>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                    <Tooltip text={'We ask this to help determine your Yukon Carbon Rebate.'}/>
                </div>
                <ErrorMessageComponent e={e['outsideWhitehorse']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Did you become a resident of Canada (immigrate) for tax purposes in 2021?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('newImmigrantTax')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['newImmigrantTax']}/>
            </div>
            {watch("newImmigrantTax")==='1'&&<div className={styles.formGroup}>
            <div className={styles.formLabel}>
                Learn more about filing a Canadian tax return as a new immigrant.
            </div>
            </div>}
            {watch("newImmigrantTax")==='1'&&<div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Do you agree that it is your responsibility to properly report your income, allowable credits and deductions?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('agreeResponsibility',{validate:{onlyYes:v=> v === '1'}})} style={{width:100}}>
                        <option value={1}>
                            Yes
                        </option>
                        <option value={0}>
                            No
                        </option>

                    </select>
                </div>
                <ErrorMessageComponent e={e['agreeResponsibility']}/>
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