import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {useEffect, useState} from "react";
import Form1 from "../components/Forms/Form1";
import FormT4 from "../components/Forms/FormT4";
import Form2 from "../components/Forms/Form2";
import Form3 from "../components/Forms/Form3";
import Form4 from "../components/Forms/Form4";
import Form5 from "../components/Forms/Form5";
import Form6 from "../components/Forms/Form6";
import Preview from "../components/Forms/Preview";
import {getAuth,onAuthStateChanged } from "firebase/auth";
import LoginForm from "../components/Forms/Authentication/Login";
import SignUp from "../components/Forms/Authentication/SignUp";
import {v4} from 'uuid';
import SavedForms from "../components/Forms/SavedForms";
import {setSavedForm, signOut} from "../helpers/firebase";
const auth = getAuth();

export default function Home() {
    const [currentForm, setCurrentForm] = useState(0);
    const [prevForm, setPrevForm] = useState(0);
    const [formData,setFormData]=useState({});
    const [signUpPage,setSignUpPage]=useState(false);
    const [user,setUser]=useState(undefined);
    useEffect(()=>{
        onAuthStateChanged(auth,u=>{
            setUser(u)
        })
    },[])
    function setOldFormData(form){
        onNext(form)
    }
    function setNewFormData(){
        onNext({
            id:v4()
        })
    }
    const onNext = (data) => setCurrentForm(old => {
        setFormData(old=>{
            setSavedForm({...old,...data})
            return {...old,...data}
        });
        setPrevForm(old);
        return old + 1
    });
    const onBack = () => setCurrentForm(old => {
        setPrevForm(old);
        return old - 1
    });
    const FORMS = [
        <SavedForms setNewFormData={setNewFormData} setOldFormData={setOldFormData} key={0} visited={currentForm < prevForm}/>,
        <Form1 formData={formData} onNext={onNext} onBack={onBack} key={1} visited={currentForm < prevForm}/>,
        <Form2 formData={formData} onBack={onBack} onNext={onNext} key={2} visited={currentForm < prevForm}/>,
        <Form3 formData={formData} onBack={onBack} onNext={onNext} key={3} visited={currentForm < prevForm}/>,
        <Form4 formData={formData} onBack={onBack} onNext={onNext} key={4} visited={currentForm < prevForm}/>,
        <Form5 formData={formData} onBack={onBack} onNext={onNext} key={5} visited={currentForm < prevForm}/>,
        <Form6 formData={formData} onBack={onBack} onNext={onNext} key={6} visited={currentForm < prevForm}/>,

        <FormT4 formData={formData} onBack={onBack} onNext={onNext} key={7} visited={currentForm < prevForm}/>,
        <Preview formData={formData} onBack={onBack} key={8} visited={currentForm < prevForm}/>,
    ];

    return (<div className={'relative'}>
        <Head>
            <title>Cfern</title>
            <meta name="description" content="hello"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        {user!==undefined&&<div className={styles.main}>
            {user?FORMS[currentForm]:(signUpPage?<SignUp onLogin={()=>setSignUpPage(false)}/>:<LoginForm formData={formData} onSignUp={()=>setSignUpPage(true)} onNext={onNext} key={1} visited={currentForm < prevForm}/>)}
        </div>}
        {user&&<button className={'absolute bottom-0 right-0 m-8 px-5 py-2 bg-red-400 rounded text-white'} onClick={signOut}>Logout</button>}
    </div>)
}
