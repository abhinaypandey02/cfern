import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import ErrorMessageComponent from "../../../helpers/errorMessageComponent";
export default function Form2({onNext,onBack,formData,visited}){
    const {register, handleSubmit, formState:{errors}}=useForm({defaultValues:formData});
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl">NETFILE Access Code</p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <div className={'mb-9'}>
                    For the 2021 tax year, prior to filing your tax return electronically, you will be asked to enter an Access code. This code does not apply to you if you are filing your tax return for the first time.
                    <br/>
                    <br/>
                    Your unique Access code can be found on your Notice of Assessment (NOA) for a previous tax year. This eight-character Access code is made up of numbers and letters and is located on the right side of your NOA. The placement and labelling of the Access code differs slightly depending on the version of the NOA you are looking at, but will always be on the right side of the NOA.
                    <br/>
                    <br/>
                    On the paper version of your NOA as well as the PDF version in My Account, the Access code is not labelled, but can be found directly underneath the Date issued at the top right of the page. If you are viewing your NOA in My Account or using the Express NOA service in certified tax software, the Access code is found directly under the Notice details box at the top right of the page.
                    <br/>
                    <br/>
                    You will have to enter your Access code after your name, date of birth, and social insurance number. While this Access code is not mandatory, if you do not enter your Access code, you will not be able to use any information from your 2021 tax return when confirming your identity with the Canada Revenue Agency. You will have to rely on other information for authentication purposes.
                </div>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    NETFILE Access Code
                </div>
                <div className={styles.inputGroup}>
                    <input type={'text'} {...register('netfileCode')}   placeholder={''}/>
                </div>
                <ErrorMessageComponent e={errors['netfileCode']}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button onClick={onBack}  className={styles.btnBack} >Back</button>
                    <button type={'submit'} className={styles.btnNext} >Next</button>
                </div>

            </div>
        </form>
    </div>
}