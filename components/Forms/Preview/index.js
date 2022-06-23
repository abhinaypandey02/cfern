import styles from "../Forms.module.scss";
import {useEffect, useState} from "react";
import axios from 'axios';
export default function Preview({onBack,formData,visited}){
    const [data,setData]=useState(null);
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    useEffect(()=>{
        //mailingAddress
        formData.businessProvince=formData.prov;
        formData.departureDate=formData.entryDate;
        formData.email="";
        formData.rr="";
        formData.poBox="";
        formData.firstNameSpouse="";
        formData.sinSpouse="";
        formData.selfEmployedCheck="";
        formData.netIncomeSpouse="";
        formData.uccb11700="";
        formData.uccb21300="";
        formData.dob=formData.dob?.replaceAll('-','');
        formData.dod=formData.dod?.replaceAll('-','');
        formData.entryDate=formData.entryDate?.replaceAll('-','').slice(4);
        formData.departureDate=formData.departureDate?.replaceAll('-','').slice(4);
        for(let key in formData){
            if(formData[key]==='1'){
                formData[key]=true;
            }
            if(formData[key]==='0'){
                formData[key]=false;
            }
        }
        console.log(formData)
        axios.post('http://3.129.67.210:4000/updatePdf',formData).then(res=> {
            const length=Object.keys(res.data).length
            let bytes = new Uint8Array(length);
            for (let i = 0; i < bytes.length; i++) {
                bytes[i] = res.data[i];
            }
            const blob = new Blob([bytes], {type : 'application/pdf'});
            setData(URL.createObjectURL(blob))
        });
    },[]);
    return <div tabIndex={0} className={formContainerStyle } >
        <h1 className={'text-center font-bold mb-5'} style={{fontSize:22}}>Preview your details</h1>
        <div className={'my-5 flex justify-center'}>
            {data&&<iframe width={490} height={445} src={data} />}
        </div>
        <div className={styles.inputGroup}>
            <button onClick={onBack} className={styles.btnBack} >Back</button>
            <button className={styles.btnNext} >Submit</button>
        </div>
    </div>
}