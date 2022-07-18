import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import SITE_VALUES from '../../../helpers/values/values.json';
import {FormGroup} from "../../FormElements/FormGroup";


export default function Slide1({onNext, formData, visited, onBack}) {
    const {watch, handleSubmit, control} = useForm({defaultValues: formData});

    const FORM_INPUTS = [
        {
            label: "Name",
            inputs: [
                {
                    name: "firstName", placeholder: "First Name123", rules: {required: true}
                },
                {
                    name: "middleName", placeholder: "Middle Name"
                },
                {
                    name: "lastName", placeholder: "Last Name", rules: {required: true}
                }

            ]
        },
        {
            label: "Social Insurance number",
            inputs: [
                {
                    type: "number", name: "sin", rules: {required: true, maxLength: 9}
                }

            ]
        },
        {
            label: "Date of birth",
            inputs: [
                {
                    type: "date", name: "dob", rules: {required: true}
                }

            ]
        },
        {
            label: "Preferred language",
            inputs: [
                {
                    name: "language",
                    rules: {required: true
                    },
                    wrapperClassName:"w-[164px]",
                    options: SITE_VALUES.PREFERRED_LANGUAGES.map(lang => ({code: lang, name: lang}))
                }

            ]
        },
        {
            label: "Is this return for a deceased person?",
            inputs: [
                {
                    name: "forDeceased", wrapperClassName: "w-[100px]", options: SITE_VALUES.BINARY_CHOICE
                }

            ]
        },
        {
            label: "Date of death",
            inputs: [
                {
                    type: "date", name: "dod", rules: {required: true},visibility: watch("forDeceased") === '1'
                }

            ],

        },
    ]
    const formContainerStyle = visited ? styles.backAnim : styles.nextAnim;

    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle}>
        <p className="font-bold text-2xl">About You</p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            {FORM_INPUTS.map(f => <FormGroup key={f.label} control={control} label={f.label} inputs={f.inputs}/>)}
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button onClick={onBack} className={styles.btnBack}>Back</button>
                    <button type={'submit'} className={styles.btnNext}>Next</button>
                </div>
            </div>
        </form>
    </div>
}