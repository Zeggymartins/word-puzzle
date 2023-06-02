import style from "./middlebox.module.css"
export default function MiddleBox(props){
    return(
        <div className={style.middlebox}>
        <span>{props.box}</span>
        </div>
    )
}
