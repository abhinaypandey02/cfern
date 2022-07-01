import styles from "../Forms.module.scss";
import {useEffect, useState} from "react";
import axios from 'axios';
export default function Preview(props){
    const [data,setData]=useState(null);
    const [summary,setSummary]=useState(null);
    const formContainerStyle=props.visited?styles.backAnim:styles.nextAnim;
    useEffect(()=>{
        //mailingAddress
        let formData={...props.formData}
        if(formData.t4Forms.length>0){
            formData={...formData,...formData.t4Forms[0]}
        }
        formData.businessProvince=formData.box10;
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
        function getBlobURLFromData(data){
            const length=Object.keys(data).length
            let bytes = new Uint8Array(length);
            for (let i = 0; i < bytes.length; i++) {
                bytes[i] = data[i];
            }
            const blob = new Blob([bytes], {type : 'application/pdf'});
            return URL.createObjectURL(blob)
        }
        axios.post('http://3.129.67.210:4000/updatePdf',formData).then(res=> {
            console.log(res.data  )
            setData(getBlobURLFromData(res.data[0]))
            setSummary(getBlobURLFromData(res.data[1]))
        });
    },[]);
    return <div tabIndex={0} className={formContainerStyle } >
        <h1 className={'text-center font-bold mb-5'} style={{fontSize:22}}>Preview your details</h1>
        <div className={'my-5 flex justify-center'}>
            {data&&<iframe width={490} height={445} src={data} />}
        </div>
        <div className={'my-5 flex justify-center'}>
            {summary&&<iframe width={490} height={445} src={summary} />}
        </div>
        <div className={styles.inputGroup}>
            <button onClick={props.onBack} className={styles.btnBack} >Back</button>
            <button className={styles.btnNext} >Submit</button>
        </div>
    </div>
}