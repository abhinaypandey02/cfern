import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useEffect, useState } from "react";
import Slide1 from "../components/Slides/Slide1";
import FormT4 from "../components/AdditionalForms";
import Slide2 from "../components/Slides/Slide2";
import Slide3 from "../components/Slides/Slide3";
import Slide4 from "../components/Slides/Slide4";
import Slide5 from "../components/Slides/Slide5";
import Slide6 from "../components/Slides/Slide6";
import Preview from "../components/Slides/PreviewPDF";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginForm from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";
import { v4 } from 'uuid';
import SavedForms from "../components/SavedForms";
import { setSavedForm, signOut } from "../helpers/firebase";
import { sendForm } from './api/sendForm';
const auth = getAuth();

export default function Home() {
  const [currentForm, setCurrentForm] = useState(0);
  const [prevForm, setPrevForm] = useState(0);
  const [formData, setFormData] = useState({});
  const [signUpPage, setSignUpPage] = useState(false);
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(auth, u => {
      setUser(u)
    })
  }, [])
  function setOldFormData(form) {
    onNext(form)
  }
  function setNewFormData() {
    onNext({
      id: v4()
    })
  }
  const onNext = (data) => setCurrentForm(old => {
    setFormData(old => {
      setSavedForm({ ...old, ...data })
      return { ...old, ...data }
    });
    setPrevForm(old);
    return old + 1
  });
  const onBack = () => setCurrentForm(old => {
    setPrevForm(old);
    return old - 1
  });
  const FORMS = [
    <SavedForms setNewFormData={setNewFormData} setOldFormData={setOldFormData} key={0} visited={currentForm < prevForm} />,
    <Slide1 formData={formData} onNext={onNext} onBack={onBack} key={1} visited={currentForm < prevForm} />,
    <Slide2 formData={formData} onBack={onBack} onNext={onNext} key={2} visited={currentForm < prevForm} />,
    <Slide3 formData={formData} onBack={onBack} onNext={onNext} key={3} visited={currentForm < prevForm} />,
    <Slide4 formData={formData} onBack={onBack} onNext={onNext} key={4} visited={currentForm < prevForm} />,
    <Slide5 formData={formData} onBack={onBack} onNext={onNext} key={5} visited={currentForm < prevForm} />,
    <Slide6 formData={formData} onBack={onBack} onNext={onNext} key={6} visited={currentForm < prevForm} />,

    <FormT4 formData={formData} onBack={onBack} onNext={onNext} key={7} visited={currentForm < prevForm} />,
    <Preview formData={formData} onBack={onBack} key={8} visited={currentForm < prevForm} />,
  ];

  return (<div className={'relative'}>
    <Head>
      <title>Cfern</title>
      <meta name="description" content="hello" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {user !== undefined && <div className={styles.main}>
      {user ?
        <div className={styles.formContainer}>
          {
            FORMS[currentForm]
          }
          <button className={styles.test} onClick={() => sendForm()}>Test</button>
          <div className={styles.breadcrumbContainer}>{[1, 2, 3, 4, 5, 6, 7].map(number => {
            return (
              <div key={number}
                className={number === currentForm ? styles.selected : styles.crumb}
                onClick={() => { setCurrentForm(number) }}
              >
                {number}
              </div>
            )
          })}</div>
        </div>
        : (signUpPage ?
          <SignUp onLogin={() => setSignUpPage(false)} />
          : <LoginForm
            formData={formData}
            onSignUp={() => setSignUpPage(true)}
            onNext={onNext}
            key={1}
            visited={currentForm < prevForm}
          />)}
    </div>}
    {user && <button className={'absolute bottom-0 right-0 m-8 px-5 py-2 bg-red-400 rounded text-white'} onClick={signOut}>Logout</button>}
  </div>)
}
