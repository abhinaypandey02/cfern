import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {useState} from "react";
import Form1 from "../components/Forms/Form1";
import FormT4 from "../components/Forms/FormT4";
import Form2 from "../components/Forms/Form2";
import Form3 from "../components/Forms/Form3";
import Form4 from "../components/Forms/Form4";
import Form5 from "../components/Forms/Form5";
import Form6 from "../components/Forms/Form6";
import Preview from "../components/Forms/Preview";

export default function Home() {
    const [currentForm, setCurrentForm] = useState(0);
    const [prevForm, setPrevForm] = useState(0);
    const [formData,setFormData]=useState({});
    const onNext = (data) => setCurrentForm(old => {
        setFormData(old=>({...old,...data}))
        setPrevForm(old);
        return old + 1
    });
    const onBack = () => setCurrentForm(old => {
        setPrevForm(old);
        return old - 1
    });
    const FORMS = [
        <Form1 formData={formData} onNext={onNext} key={0} visited={currentForm < prevForm}/>,
        <Form2 formData={formData} onBack={onBack} onNext={onNext} key={1} visited={currentForm < prevForm}/>,
        <Form3 formData={formData} onBack={onBack} onNext={onNext} key={1} visited={currentForm < prevForm}/>,
        <Form4 formData={formData} onBack={onBack} onNext={onNext} key={1} visited={currentForm < prevForm}/>,
        <Form5 formData={formData} onBack={onBack} onNext={onNext} key={1} visited={currentForm < prevForm}/>,
        <Form6 formData={formData} onBack={onBack} onNext={onNext} key={1} visited={currentForm < prevForm}/>,

        <FormT4 formData={formData} onBack={onBack} onNext={onNext} key={1} visited={currentForm < prevForm}/>,
        <Preview formData={formData} onBack={onBack} key={1} visited={currentForm < prevForm}/>,

    ];

    return (<div>
        <Head>
            <title>Cfern</title>
            <meta name="description" content="hello"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className={styles.main}>
            {FORMS[currentForm]}
        </div>
    </div>)
}
