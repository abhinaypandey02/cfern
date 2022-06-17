import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {useState} from "react";
import Form1 from "../components/Forms/Form1";
import Form2 from "../components/Forms/Form2";
import Form3 from "../components/Forms/Form3";
import Form4 from "../components/Forms/Form4";
import Form5 from "../components/Forms/Form5";
import Form6 from "../components/Forms/Form6";
import Form7 from "../components/Forms/Form7";

export default function Home() {
    const [currentForm, setCurrentForm] = useState(0);
    const [prevForm, setPrevForm] = useState(0);
    const onNext = () => setCurrentForm(old => {
        setPrevForm(old);
        return old + 1
    });
    const onBack = () => setCurrentForm(old => {
        setPrevForm(old);
        return old - 1
    });
    const FORMS = [
        <Form1 onNext={onNext} key={0} visited={currentForm < prevForm}/>,
        <Form2 onBack={onBack} onNext={onNext} key={1} visited={currentForm < prevForm}/>,
        <Form3 onBack={onBack} onNext={onNext} key={2} visited={currentForm < prevForm}/>,
        <Form4 onBack={onBack} onNext={onNext} key={3} visited={currentForm < prevForm}/>,
        <Form5 onBack={onBack} onNext={onNext} key={4} visited={currentForm < prevForm}/>,
        <Form6 onBack={onBack} onNext={onNext} key={5} visited={currentForm < prevForm}/>,
        <Form7 onBack={onBack} key={6} visited={currentForm < prevForm}/>
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
