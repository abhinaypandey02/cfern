import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import ErrorMessageComponent from "../../../helpers/errorMessageComponent";
import Tooltip from "../../Tooltip";
import {PROVINCES,MARITAL_STATUSES} from '../../../helpers/values.json';

export default function Form6({onNext,onBack,formData,visited}){
    const {register, handleSubmit, formState:{errors:e}, watch}=useForm({defaultValues:formData});
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl font">Misc</p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Did you own or hold specified foreign property where the total cost amount of all such property, at any time in the year, was more than CAN$100,000 in 2021? You are allowed to say No to this question in the year you became a Canadian resident.
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('foreignPropertyCheck')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                    <Tooltip text={'If yes, you must complete form T1135.'}/>
                </div>
                <ErrorMessageComponent e={e['foreignPropertyCheck']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Did you <a href={'https://l.smpltx.ca/en/cra/line-127/principal-residence'}>dispose of your principal residence</a> in 2021?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('disposedPrincipalResidence')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                    <Tooltip text={'If, in 2021, you either sold or were deemed to have disposed of a property that was your principal residence at any time that you owned it, answer Yes.'}/>

                </div>
                <ErrorMessageComponent e={e['disposedPrincipalResidence']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Are you filing an income tax return with the CRA for the first time?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('fillingFirstTime')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                    <Tooltip text={'If you have ever filed a paper tax return or if someone has filed a tax return for you, answer “No”.'}/>

                </div>
                <ErrorMessageComponent e={e['fillingFirstTime']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Are you a Canadian citizen?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('canadianCitizen')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['canadianCitizen']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Are you a person registered under the Indian Act?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('indianAct')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['indianAct']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Were you confined to a prison for a period of 90 days or more in 2021?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('confinedToPrison')} style={{width:100}}>
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['confinedToPrison']}/>
            </div>
            {watch("confinedToPrison")==='1'&&<div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Were you in prison on December 31, 2021 and had been there for a total of more than six months during 2021?
                </div>
                <div className={styles.inputGroup}>
                    <select  {...register('moreThan6Prison',{validate:{notBlank:v=>v!==''}})} style={{width:100}}>
                        <option />
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
                            Yes
                        </option>
                    </select>
                </div>
                <ErrorMessageComponent e={e['moreThan6Prison']}/>
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