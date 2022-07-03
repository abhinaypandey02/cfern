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
                <div  className={styles.formLabel}>
                    In which <a href={'https://my.wealthsimple.com/tax/2021/?lang=en'}>province or territory did you live</a> on December 31, 2021? *
                </div>
                <div className={styles.inputGroup}>
                    <select style={{width:120}}  {...register('oldProvince',{validate:{notBlank:v=>v!==''}})}   placeholder={''}>
                        <option></option>
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland &amp; Labrador</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="NU">Nunavut</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Prince Edward Island</option>
                        <option value="QC">Québec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="YT">Yukon</option>

                        <option value="NR">Non-resident (not supported)</option>
                        <option value="DR">Deemed resident (not supported)</option>
                    </select>
                    <Tooltip text={'If you emigrated or are a non-resident of Canada, you can\'t use Wealthsimple Tax.'}/>
                </div>
                <ErrorMessageComponent e={e['oldProvince']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    If your province or territory of residence changed in 2021, enter the date of your move
                </div>
                <div className={styles.inputGroup}>
                    <input type={'date'} {...register('entryDate')}   placeholder={''}/>
                </div>
                <ErrorMessageComponent e={e['entryDate']}/>
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
                    <select style={{width:120}} {...register('currentProvince',{validate:{notBlank:v=>v!==''}})}   placeholder={''}>
                        <option></option>
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland &amp; Labrador</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="NU">Nunavut</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Prince Edward Island</option>
                        <option value="QC">Québec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="YT">Yukon</option>

                        <option value="NR">Non-resident (not supported)</option>
                        <option value="DR">Deemed resident (not supported)</option>
                    </select>
                    <Tooltip text={'This is where you currently live. It can be the same or different than your current mailing address.'}/>
                </div>
                <ErrorMessageComponent e={e['currentProvince']}/>
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
                        <option value="None" selected=""></option>
                        <option value="11001">Carcross/Tagish</option>
                        <option value="11002">Champagne and Aishihik</option>
                        <option value="11003">Kluane</option>
                        <option value="11004">Kwanlin Dun</option>
                        <option value="11006">Little Salmon/Carmacks</option>
                        <option value="11007">Nacho Nyak Dun</option>
                        <option value="11009">Selkirk</option>
                        <option value="11010">Ta&apos;an Kwach&apos;an Council</option>
                        <option value="11011">Teslin Tlingit</option>
                        <option value="11012">Tr&apos;ondëk Hwëch&apos;in</option>
                        <option value="11013">Vuntut Gwitchin</option>
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
                    Did you <a href={'https://l.smpltx.ca/en/cra/non-resident/become-resident'}>become a resident of Canada (immigrate)</a> for tax purposes in 2021?
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