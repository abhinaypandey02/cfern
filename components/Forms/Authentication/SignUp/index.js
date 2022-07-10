import {useForm} from "react-hook-form";
import styles from "../../Forms.module.scss";
import ErrorMessageComponent from "../../../../helpers/errorMessageComponent";
import { getAuth } from "firebase/auth";
import {signIn, signUp} from "../../../../helpers/firebase";


export default function SignUp({onLogin}){
    const {register, watch, handleSubmit, setError, formState:{errors}}=useForm();
    const formContainerStyle=styles.nextAnim;
    function onSubmit(data){
        signUp(data.email,data.password).catch(e=>{
            console.log(e.code)
            setError("password",{type:e.code});
        });
    }
    return <div tabIndex={0} className={formContainerStyle } >
        <p className="font-bold text-2xl">Sign Up</p>
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
                <div className={styles.formLabel}>
                    Confirm Password
                </div>
                <div className={styles.inputGroup}>
                    <input type={'password'} {...register('c_password',{required:true,validate:{equalsPassword:v=>v===watch("password")}})}   placeholder={'Enter your password'}/>
                </div>
                <ErrorMessageComponent e={errors['c_password']}/>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <button type={'submit'} className={styles.btnNext} >Sign Up</button>
                    <button onClick={onLogin} className={styles.btnBack} >Login</button>
                </div>
            </div>
        </form>
    </div>
}