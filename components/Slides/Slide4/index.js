import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import SITE_VALUES from "../../../helpers/values/values.json";
import {FormGroup} from "../../FormElements/FormGroup";
export default function Slide4({onNext,onBack,formData,visited}){
    const {watch, handleSubmit,control,formState:{isDirty}}=useForm({defaultValues:formData});
    const FORM_INPUTS = [
        {
            label: <>In which <a href={'https://my.wealthsimple.com/tax/2021/?lang=en'}>province or territory did you live</a> on December 31, 2021? *</>,
            inputs: [
                {
                    name: "oldProvince", rules: {required: true},
                    options: SITE_VALUES.PROVINCES
                },
                {
                    tooltip:"If you emigrated or are a non-resident of Canada, you can\'t use Wealthsimple Tax."
                }
            ]
        },
        {
            label: "If your province or territory of residence changed in 2021, enter the date of your move",
            inputs: [
                {
                    type: "date", name: "entryDate", rules: {
                        min:"2021-01-01", max:"2021-12-31"
                    }
                }
            ]
        },
        {
            label: "Is your home address the same as your mailing address?",
            inputs: [
                {
                    options: SITE_VALUES.BINARY_CHOICE, name: "homeIsMailing", rules: {required: true}, wrapperClassName:"w-[100px]"
                }

            ]
        },
        {
            label: "In which province or territory do you currently live?",
            inputs: [
                {
                    name: "currentProvince", rules: {required: true},
                    options: SITE_VALUES.PROVINCES
                },
                {
                    tooltip:"This is where you currently live. It can be the same or different than your current mailing address."
                }

            ]
        },
        {
            label: "Did you reside within the Settlement Land of a Self-Governing Yukon First Nation on December 31, 2021?",
            inputs: [
                {
                    name: "resideInYukon", wrapperClassName: "w-[100px]", options: SITE_VALUES.BINARY_CHOICE
                }
            ]
        },
        {
            label: "Which Self-Governing First Nation?",
            inputs: [
                {
                    visibility:watch("resideInYukon")==='1',options:SITE_VALUES.SELF_GOVERNING_FIRST_NATIONS, name: "selfGoverningNation", rules: {required: true}
                }

            ],

        },{
            label: "Are you a citizen of that Self-Governing First Nation?",
            inputs: [
                {
                    visibility:watch("resideInYukon")==='1',options:SITE_VALUES.BINARY_CHOICE, name: "citizenOfSelfGoverning",
                }
            ],

        },{
            label: "Did you reside outside of Whitehorse on December 31, 2021?",
            inputs: [
                { options:SITE_VALUES.BINARY_CHOICE,wrapperClassName:"w-[100px]", name: "outsideWhitehorse", rules:{required: true}
                },{
                tooltip: "We ask this to help determine your Yukon Carbon Rebate."
                }
            ],
        },{
            label: <>Did you <a href={'https://l.smpltx.ca/en/cra/non-resident/become-resident'}>become a resident of Canada (immigrate)</a> for tax purposes in 2021?</>,
            inputs: [
                {options:SITE_VALUES.BINARY_CHOICE, name: "newImmigrantTax", wrapperClassName: "w-[100px]"
                }
            ],

        },{
            label: "Do you agree that it is your responsibility to properly report your income, allowable credits and deductions?",
            inputs: [
                {options:SITE_VALUES.BINARY_CHOICE,visibility:watch("newImmigrantTax")==='1', name: "agreeResponsibility", wrapperClassName: "w-[100px]",rules:{validate:{onlyYes:v=> v === '1'}}
                }
            ],

        },
    ]
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl font">About Your Residence</p>
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