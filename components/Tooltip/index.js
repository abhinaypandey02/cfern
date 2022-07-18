import styles from "./Tooltip.module.scss";
import {useState} from "react";

export default function Tooltip({text}){
    const [show,setShow]=useState(false);
    return <span className={'relative mx-2 my-auto'}>
        {show&&<div className={styles.tooltipRight+" "}>
            {text}
        </div>}
        <button onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>?</button>
    </span>
}