import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import SITE_VALUES from "../../../helpers/values/values.json";
import {FormGroup} from "../../FormElements/FormGroup";

export default function Slide6({onNext,onBack,formData,visited}){
    const {handleSubmit, watch,control}=useForm({defaultValues:formData});
    const FORM_INPUTS = [
        {
            label: "Did you own or hold specified foreign property where the total cost amount of all such property, at any time in the year, was more than CAN$100,000 in 2021? You are allowed to say No to this question in the year you became a Canadian resident.",
            inputs: [
                {
                    options: SITE_VALUES.BINARY_CHOICE, name: "foreignPropertyCheck", rules: {required: true}, wrapperClassName:"w-[100px]"
                },
                {tooltip:"If yes, you must complete form T1135."}

            ]
        },{
            label: <>Did you <a href={'https://l.smpltx.ca/en/cra/line-127/principal-residence'}>dispose of your principal residence</a> in 2021?</>,
            inputs: [
                {
                    options: SITE_VALUES.BINARY_CHOICE, name: "disposedPrincipalResidence", rules: {required: true}, wrapperClassName:"w-[100px]"
                },{tooltip:"If, in 2021, you either sold or were deemed to have disposed of a property that was your principal residence at any time that you owned it, answer Yes."}

            ]
        },{
            label: "Are you filing an income tax return with the CRA for the first time?",
            inputs: [
                {
                    options: SITE_VALUES.BINARY_CHOICE, name: "fillingFirstTime", rules: {required: true}, wrapperClassName:"w-[100px]"
                },{tooltip:"If you have ever filed a paper tax return or if someone has filed a tax return for you, answer “No”."}

            ]
        },{
            label: "Are you a Canadian citizen?",
            inputs: [
                {
                    options: SITE_VALUES.BINARY_CHOICE, name: "canadianCitizen", rules: {required: true}, wrapperClassName:"w-[100px]"
                }

            ]
        },{
            label: "Are you a person registered under the Indian Act?",
            inputs: [
                {
                    options: SITE_VALUES.BINARY_CHOICE, name: "indianAct", rules: {required: true}, wrapperClassName:"w-[100px]"
                }

            ]
        },{
            label: "Were you confined to a prison for a period of 90 days or more in 2021?",
            inputs: [
                {
                    options: SITE_VALUES.BINARY_CHOICE, name: "confinedToPrison", rules: {required: true}, wrapperClassName:"w-[100px]"
                }

            ]
        },{
            label: "Were you in prison on December 31, 2021 and had been there for a total of more than six months during 2021?",
            inputs: [
                {
                    options: SITE_VALUES.BINARY_CHOICE, name: "moreThan6Prison", rules: {required: true}, wrapperClassName:"w-[100px]", visibility:watch("confinedToPrison")==='1'
                }

            ]
        },
    ]
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl font">Misc</p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            {FORM_INPUTS.map(f => <FormGroup key={f.label} control={control} label={f.label} inputs={f.inputs}/>)}

            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button onClick={onBack} className={styles.btnBack} >Back</button>
                    <button type={'submit'} className={styles.btnNext} >Next</button>
                </div>

            </div>
        </form>
    </div>
}