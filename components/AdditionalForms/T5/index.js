import styles from "../../Slides/Forms.module.scss";
import tooltipStyles from "../../Tooltip/Tooltip.module.scss";
import tooltips from "../../../helpers/values/tooltips.json";
import Tooltip from "../../Tooltip";
import {useState} from "react";

export function T5({deleteForm, showDelete, id}) {
    const [tooltipToShow, setTooltipToShow] = useState(-1);
    const [extraBoxes, setExtraBoxes] = useState([]);
    const [employeeName, setEmployeeName] = useState("Statement of Investment Income");
    const IMP = [24,25,26,13,18,10,11,12]
    return <div tabIndex={0} className={"m-2 my-7"}>
        <div className="font-bold text-2xl mb-4 flex justify-between "><span>T5: {employeeName}</span>{showDelete &&
            <button className={'font-extralight'} onClick={deleteForm}><img src="https://img.icons8.com/material-sharp/24/undefined/delete.png"/></button>}
        </div>
        <form>
            <div className={styles.t4formGroup}>
                <div className={styles.formLabel}>
                    Name of payer
                </div>
                <div className={styles.inputGroup}>
                    <input onBlur={e => setEmployeeName(e.target.value)} type={'text'} name={'first name'}
                           placeholder={""}/>
                </div>

            </div>
            <div className={styles.t4formGroup}>
                <span className={styles.inputGroup}>
                    {tooltipToShow === 10 && <div className={tooltipStyles.tooltip}>
                        {tooltips['t4'][10]}
                    </div>}
                    <div tabIndex={0} onMouseEnter={() => setTooltipToShow(10)}
                         onMouseLeave={() => setTooltipToShow(-1)} className={styles.formLabel}>
                        Exchange rate

                    </div>
                    <input type={'number'}/>
                </span>
            </div>
            <div className={styles.t4formGroup}>

                {IMP.map(e => <span className={styles.inputGroup} key={e}>

                    {tooltipToShow === e && <div className={tooltipStyles.tooltip}>
                        {tooltips['t4'][e]}
                    </div>}
                    <div tabIndex={0} onMouseEnter={() => setTooltipToShow(e)} onMouseLeave={() => setTooltipToShow(-1)}
                         className={styles.formLabel}>
                        {e}
                    </div>
                    <input type={'text'} id={"imp_box_" + id + e}/>
                </span>)}

            </div>

            <div className={styles.formLabel} style={{margin: "15px 15px 0"}}>
                Other boxes on your T5
            </div>
            <div className={styles.t4formGroup}>

                {
                    extraBoxes.map(box => <span className={styles.inputGroup} key={box}>

                    {tooltipToShow === box && <div className={styles.tooltip}>
                        {tooltips['t4'][box]}
                    </div>}
                        <div tabIndex={0} onMouseEnter={() => setTooltipToShow(box)}
                             onMouseLeave={() => setTooltipToShow(-1)} className={styles.formLabel}>
                        {box}
                    </div>
                    <input type={'text'} id={"imp_box_" + id + box}/>
                </span>)
                }
                <span className={styles.inputGroup}>
                    <input style={{width: 40}} width={20} placeholder={'Box'} onBlur={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) {
                            if (IMP.includes(val) || extraBoxes.includes(val)) {
                                const ele = document.getElementById("imp_box_" + id + val);
                                if (ele) {
                                    ele.focus();
                                }
                            } else {
                                setExtraBoxes(old => [...old, val])
                            }
                        }
                        e.target.value = ""
                    }}/>
                </span>


            </div>
            <div className={styles.formGroup} style={{backgroundColor:"#ececec",padding:10}}>
                <div className={styles.inputGroup+" justify-between"}>
                    <div className={''}>
                        <div className={styles.formLabel}>
                            If this is a joint account, your share
                        </div>
                        <input type={"number"}/>
                        <Tooltip text={'If this is a joint account, enter the amount(s) as they appear on this T5. For example: if you earned $100 of interest in box 13 and own 75% of this account, enter $100 in box 13, and 75% in the box to the left. We\'ll then report $75 on your return.'}/>
                    </div>
                    <div>
                        <div className={styles.formLabel}>
                            Share with
                        </div>
                        <input type={"text"}/>
                    </div>
                </div>
            </div>
        </form>

    </div>

}