import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import ErrorMessageComponent from "../../../helpers/errorMessageComponent";
import Tooltip from "../../Tooltip";
import codes from '../../../config/country-codes';
import axios from "axios";
import {useState} from "react";

export default function Form3({onNext, onBack, formData, visited}) {
    const {register, handleSubmit, formState: {errors: e}, getValues, trigger} = useForm({defaultValues: formData,reValidateMode:'onSubmit'});
    const [loading, setLoading] = useState(false);
    const formContainerStyle = visited ? styles.backAnim : styles.nextAnim;

    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle}>
        <p className="font-bold text-2xl font">Canadian Mailing Address <Tooltip
            text={'If your address is outside Canada, you aren\'t able to use Wealthsimple Tax because of a NETFILE restriction.'}/>
        </p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <input type={'text'} {...register('co', {
                        validate: {
                            equalsAboutUsName: v => v === formData.firstName
                        }
                    })} placeholder={'C/O (Care of)'}/>
                </div>
                <ErrorMessageComponent e={e['co']}/>

                <div className={styles.inputGroup}>
                    <input type={'text'} {...register('unit')} placeholder={'Unit'}/>
                    {" - "}
                    <input type={'text'} {...register('streetNo')} placeholder={'Street Number'}/>
                    <input type={'text'} {...register('streetName', {required: true})} placeholder={'Street Name *'}/>
                    <Tooltip text={"If you have a PO Box or RR number, enter it in the “Street name” field."}/>
                </div>
                <ErrorMessageComponent e={e['unit'] || e['streetNo'] || e['streetName']}/>

                <div className={styles.inputGroup}>
                    <input type={'text'} {...register('city', {required: true})} placeholder={'City *'}/>

                    <select className={'flex-grow'} {...register('prov', {validate: {notBlank: v => v !== ''}})}
                            placeholder={'Province'}>
                        <option value={''}>Province or Territory *</option>

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
                    <input type={'text'} {...register('postalCode', {required: true})} placeholder={'Postal Code *'}/>
                </div>
                <ErrorMessageComponent e={e['city'] || e['prov'] || e['postalCode']}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Home telephone number
                </div>
                <div className={styles.inputGroup}>
                    <input placeholder={'Area Code'} style={{width: 120}}
                           list={'country-list'} {...register('areaCode', {
                        required: true, validate: {
                            validCode: v => codes.find(ele => ele.MobileCode === v) !== undefined
                        }
                    })} id="country-codes"/>
                    <datalist id={'country-list'}>
                        <option value={""}/>
                        {codes.map((code, index) => <option key={index} value={code.MobileCode}>{code.Name}</option>)}
                    </datalist>
                    <input type={'number'} {...register('phoneNumber', {
                        required:true,
                        validate: {
                            validateNumberAPI: async v => {
                                const noErrors = await trigger(['co', 'unit', 'streetNo', 'streetName', 'city', 'prov', 'postalCode', 'phoneCode']);
                                if (!noErrors) return true;
                                let code = getValues('areaCode')
                                if (!code) return false;
                                setLoading(true);
                                try {
                                    return true;
                                    const res = await axios.get(`https://api.apilayer.com/number_verification/validate?number=${code.slice(1) + v}`, {
                                        headers: {
                                            "apikey": "OjZjNzcNBEyO8xvVjilnHX5MjeBvC5Q5"
                                        }
                                    })
                                    setLoading(false);
                                    return res.data.valid;

                                } catch (e) {
                                    setLoading(false);

                                    return true;
                                }

                            }
                        }
                    })} placeholder={'Phone Number'}/>
                </div>
                <ErrorMessageComponent e={e['phoneCode'] || e['phoneNumber']}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button onClick={onBack} className={styles.btnBack}>Back</button>
                    <button type={'submit'} disabled={loading}
                            className={styles.btnNext}>{loading ? "Validating number" : "Next"}</button>
                </div>

            </div>
        </form>
    </div>
}