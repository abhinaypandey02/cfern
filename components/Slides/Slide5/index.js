import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import SITE_VALUES from '../../../helpers/values/values.json';
import {FormGroup} from "../../FormElements/FormGroup";

export default function Slide5({onNext,onBack,formData,visited}){
    const {watch, handleSubmit, control, formState:{isDirty}}=useForm({defaultValues:formData});
    const FORM_INPUTS = [
        {
            label: "Marital status on December 31, 2021",
            inputs: [
                {
                    name: "maritalStatus", rules: {required:true},
                    options: SITE_VALUES.MARITAL_STATUSES.map(s=>({code:s,name:s})), wrapperClassName: "w-[120px]"
                }
            ]
        },
        {
            label: "Do you want to prepare your returns together?",
            inputs: [
                {
                    options: SITE_VALUES.BINARY_CHOICE, name: "prepareReturnsTogether", rules: {required: true}, wrapperClassName:"w-[100px]"
                }

            ]
        },
        {
            label: "Did your marital status change in 2021?",
            inputs: [
                {
                    name: "maritalStatusChanged", wrapperClassName: "w-[100px]", options: SITE_VALUES.BINARY_CHOICE
                }
            ]
        },
        {
            label: "Date of change",
            inputs: [
                {
                    visibility:watch("maritalStatusChanged")==='1',type:"date", name: "dateOfChange", rules: {required: true}
                }

            ],

        },{
            label: "What was your marital status before the change?",
            inputs: [
                {
                    visibility:watch("maritalStatusChanged")==='1',options:SITE_VALUES.MARITAL_STATUSES.map(s=>({code:s,name:s})), name: "maritalStatusBefore",
                }
            ],

        },{
            label: "Do you have any dependants?",
            inputs: [
                { options:SITE_VALUES.BINARY_CHOICE,wrapperClassName:"w-[100px]", name: "anyDependents", rules:{required: true}
                },{
                    tooltip: "We ask this to help determine your Yukon Carbon Rebate."
                }
            ],
        },{
            label: <>Did you have any children in <a href={'https://l.smpltx.ca/en/cra/ccb/shared'}>shared custody</a>?</>,
            inputs: [
                {options:SITE_VALUES.BINARY_CHOICE, name: "sharedCustody", wrapperClassName: "w-[100px]",visibility:watch("anyDependents")==='1',rules:{required: true}
                },
                {
                    tooltip: "This information is only used for estimating your GST/HST credit and related provincial credits. \nIf not all of your children were in shared custody Wealthsimple Tax might underestimate your benefit payments. The CRA\'s calculators may provide a more accurate estimate."
                }
            ],

        },{
            label: "Do you agree that it is your responsibility to properly report your income, allowable credits and deductions?",
            inputs: [
                {options:SITE_VALUES.BINARY_CHOICE, name: "agreeResponsibility", wrapperClassName: "w-[100px]",rules:{validate:{onlyYes:v=> v === '1'}}
                }
            ],

        },
    ]
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl font">You and Your Family</p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            {FORM_INPUTS.map(f => <FormGroup key={f.label} control={control} label={f.label} inputs={f.inputs}/>)}
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button type={'button'} onClick={()=>{
                        if(isDirty){
                            if(window.confirm("There are unsaved changes. Are you sure want to go back?")) onBack();
                        } else onBack()
                    }} className={styles.btnBack} >Back</button>
                    <button type={'submit'} className={styles.btnNext} >Next</button>
                </div>

            </div>
        </form>
    </div>
}