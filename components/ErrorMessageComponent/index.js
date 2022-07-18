import MESSAGES from '../../helpers/values/errorMessages.json';
export default function ErrorMessageComponent({e}){
    if(!e) return null;
    let message;
    console.log(e)
    if(e.message) message={e};
    else if(MESSAGES[e.type]) message=MESSAGES[e.type];
    else message="This field is invalid!"
    return <span style={{
        color:"red",
        margin:"5px",
        fontSize:13,
        fontWeight:400
    }}>{message}</span>
}