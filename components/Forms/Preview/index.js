import styles from "../Forms.module.scss";
export default function Preview({onBack,formData,visited}){
    const formContainerStyle=visited?styles.backAnim:styles.nextAnim;
    return <div tabIndex={0} className={formContainerStyle } >
        <h1 className={'text-center font-bold mb-5'} style={{fontSize:22}}>Preview your details</h1>
        <div className={'my-5'}>PDF HERE</div>
        <div className={styles.inputGroup}>
            <button onClick={onBack} className={styles.btnBack} >Back</button>
            <button className={styles.btnNext} >Submit</button>
        </div>
    </div>
}