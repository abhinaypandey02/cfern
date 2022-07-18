import styles from "../Forms.module.scss";
import {useForm} from "react-hook-form";
import Tooltip from "../../Tooltip";
import codes from '../../../helpers/values/country-codes';
import {useState} from "react";
import SITE_VALUES from '../../../helpers/values/values.json';
import {FormGroup} from "../../FormElements/FormGroup";

export default function Slide3({onNext, onBack, formData, visited}) {
    const { handleSubmit, control} = useForm({defaultValues: formData});
    const [loading] = useState(false);
    const formContainerStyle = visited ? styles.backAnim : styles.nextAnim;
    const FORM_INPUTS = [
        {
            label: "Care of (same as first name)",
            inputs: [
                {
                    name: "co", placeholder: "C/O (Care of)", rules: {
                        validate: {
                            equalsAboutUsName: v => v === formData.firstName
                        }
                    }
                },
            ]
        },
        {
            label: "Address",
            inputs: [
                {
                    name: "unit", placeholder: "Unit"
                },
                {
                    component: <span className={'my-auto'}>{" - "}</span>
                }, {
                    name: "streetNo", placeholder: "Street Number"
                }, {
                    name: "streetName", placeholder: "Street Name", rules: {
                        required: true
                    }
                }, {
                    tooltip: "If you have a PO Box or RR number, enter it in the “Street name” field."
                }, {
                    name: "city", placeholder: "City", rules: {
                        required: true
                    }
                }, {
                    name: "prov", placeholder: "Province", rules: {
                        required: true
                    }, options: SITE_VALUES.PROVINCES, wrapperClassName: "flex-grow"
                }, {
                    name: "postalCode", placeholder: "Postal Code", rules: {
                        required: true, maxLength: 6
                    }
                }
            ]
        },
        {
            label: "Home telephone number",
            inputs: [
                {
                    name: "areaCode", placeholder: "Area Code", wrapperClassName: "w-[130px]", rules: {
                        required: true, validate: {
                            validCode: v => codes.find(ele => ele.code === v) !== undefined
                        }
                    }, dataList: codes
                }, {
                    name: "phoneNumber", placeholder: "Phone Number", rules: {
                        required: true
                    }, type: "number"
                },
            ]
        },
    ]

    function onSubmit(data) {
        onNext(data)
    }

    return <div tabIndex={0} className={formContainerStyle}>
        <p className="font-bold text-2xl font">Canadian Mailing Address <Tooltip
            text={'If your address is outside Canada, you aren\'t able to use Wealthsimple Tax because of a NETFILE restriction.'}/>
        </p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            {FORM_INPUTS.map(f => <FormGroup key={f.label} control={control} label={f.label} inputs={f.inputs}/>)}
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button onClick={onBack} className={styles.btnBack}>Back</button>
                    <button type={'submit'}
                            className={styles.btnNext}>{loading ? "Validating number" : "Next"}</button>
                </div>
            </div>
        </form>
    </div>
}