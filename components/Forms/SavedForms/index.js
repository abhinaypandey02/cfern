import {getAuth} from "firebase/auth";
import {useEffect, useState} from "react";
import {getSavedForms} from "../../../helpers/firebase";
import styles from "../Forms.module.scss";
import ErrorMessageComponent from "../../../helpers/errorMessageComponent";

export default function SavedForms({visited,setNewFormData,setOldFormData}){
    const [forms,setForms]=useState([]);
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;

    useEffect(()=>{
        getSavedForms().then(res=>setForms(res))
    },[])
    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl">Start or continue a return</p>
        <div className={styles.formGroup+" my-5 mx-8"}>

            {forms.map(f=><button style={{width:"100%"}} key={f.id} onClick={()=>setOldFormData(f)} className={styles.btnBack} >{f.firstName}</button>)}

        </div>
        <div className={styles.formGroup+" mx-8"}>
            <button onClick={setNewFormData} className={styles.btnNext+" w-full "} >+ Someone new</button>
        </div>
    </div>
}