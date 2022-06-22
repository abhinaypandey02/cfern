import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import ErrorMessageComponent from "../../../helpers/errorMessageComponent";
import Tooltip from "../../Tooltip";
import {PROVINCES} from '../../../helpers/values.json';
export default function Form3({onNext,onBack,formData,visited}){
    const {register, handleSubmit, formState:{errors:e}}=useForm({defaultValues:formData});
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl font">Canadian Mailing Address <Tooltip text={'If your address is outside Canada, you aren\'t able to use Wealthsimple Tax because of a NETFILE restriction.'}/> </p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <input type={'text'} {...register('co')}   placeholder={'C/O (Care of)'}/>
                </div>
                <div className={styles.inputGroup}>
                    <input type={'text'} {...register('unit')}   placeholder={'Unit'}/>
                    {" - "}
                    <input type={'text'} {...register('streetNo')}   placeholder={'Street Number'}/>
                    <input type={'text'} {...register('streetName',{required:true})}   placeholder={'Street Name *'}/>
                    <Tooltip text={"If you have a PO Box or RR number, enter it in the “Street name” field."}/>
                </div>
                <ErrorMessageComponent e={e['unit']||e['streetNo']||e['streetName']}/>

                <div className={styles.inputGroup}>
                    <input type={'text'} {...register('city',{required:true})}   placeholder={'City *'}/>

                    <select className={'flex-grow'} {...register('prov',{validate:{notBlank:v=>v!==''}})}   placeholder={'Province'}>
                        <option value={''}>Province or Territory *</option>
                        {PROVINCES.map(p=><option key={p} value={p}>{p}</option>)}
                    </select>
                    <input type={'text'} {...register('postalCode',{required:true})}   placeholder={'Postal Code *'}/>
                </div>
                <ErrorMessageComponent e={e['city']||e['prov']||e['postalCode']}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Home telephone number
                </div>
                <div className={styles.inputGroup}>
                    <input type={'number'} {...register('phoneCode')}   placeholder={''}/>
                    <input type={'number'} {...register('phoneNumber')}   placeholder={''}/>
                </div>
                <ErrorMessageComponent e={e['phoneCode']||e['phoneNumber']}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button onClick={onBack} className={styles.btnBack} >Back</button>
                    <button type={'submit'} className={styles.btnNext} >Next</button>
                </div>

            </div>
        </form>
    </div>
}