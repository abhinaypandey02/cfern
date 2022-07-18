import {useForm} from "react-hook-form";
import styles from "../../Slides/Forms.module.scss";
import ErrorMessageComponent from "../../ErrorMessageComponent";
import { getAuth } from "firebase/auth";
import {signIn, signInWithGoogle} from "../../../helpers/firebase";


export default function LoginForm({onSignUp}){
    const {register, watch, handleSubmit, setError, formState:{errors}}=useForm();
    const formContainerStyle=styles.nextAnim;
    function onSubmit(data){
        signIn(data.email,data.password).catch(e=>{
            console.log(e.code)
            setError("password",{type:e.code});
        });
    }
    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl">Login</p>
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Email
                </div>
                <div className={styles.inputGroup}>
                    <input type={'email'} {...register('email',{required:true})}   placeholder={'Enter your email'}/>
                </div>
                <ErrorMessageComponent e={errors['email']}/>

            </div>
            <div className={styles.formGroup}>
                <div className={styles.formLabel}>
                    Password
                </div>
                <div className={styles.inputGroup}>
                    <input type={'password'} {...register('password',{required:true})}   placeholder={'Enter your password'}/>
                </div>
                <ErrorMessageComponent e={errors['password']}/>
            </div>

            <div className={styles.formGroup}>
                <div className={styles.inputGroup+ " flex items-center !mb-5"}>
                    <div>Or sign in with:</div>
                    <button type={'button'} onClick={signInWithGoogle} className={styles.btnBack+" !p-2 !mx-4 !rounded-full"} ><img src="https://img.icons8.com/color/28/000000/google-logo.png"/></button>
                </div>
                <div className={styles.inputGroup}>
                    <button type={'submit'} className={styles.btnNext} >Login</button>
                    <button onClick={onSignUp} className={styles.btnBack} >Sign Up</button>
                </div>
            </div>
        </form>
    </div>
}