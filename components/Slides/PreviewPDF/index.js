import styles from "../Forms.module.scss";
import {useEffect, useRef, useState} from "react";
import axios from 'axios';
export default function Preview(props){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [summary,setSummary]=useState(null);
    const count=useRef(0);
    const formContainerStyle=props.visited?styles.backAnim:styles.nextAnim;
    useEffect(()=>{
        //mailingAddress
        if(count.current>0)return;
        count.current=1;
        let formData={...props.formData}
        formData={...formData,...formData.T4}

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
        function getBlobURLFromData(data){
            console.log("PARSING DATA")
            const length=Object.keys(data).length
            let bytes = new Uint8Array(length);
            for (let i = 0; i < bytes.length; i++) {
                bytes[i] = data[i];
            }
            console.log("Done parsing data")

            const blob = new Blob([bytes], {type : 'application/pdf'});
            return URL.createObjectURL(blob)
        }
        console.log("Sending pdf request with following data ",formData)
        axios.post('http://3.129.67.210:4000/updatePdf',formData).then(res=> {
            if(res.status===200){
                setData(getBlobURLFromData(res.data[0]))
                setSummary(getBlobURLFromData(res.data[1]))
            }

        }).catch(e=>alert(e.response.data)).finally(()=>{
            setLoading(false);
        });
    },[]);
    return <div tabIndex={0} className={formContainerStyle } >
        <h1 className={'text-center font-bold mb-5'} style={{fontSize:22}}>Preview your details</h1>
        {loading&&
            <div role="status" className={'flex items-center justify-center'}>
                <div className={'mx-5'}>Loading</div>
                <svg aria-hidden="true"
                     className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>}
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