import style from "./textbox.module.css";
export default function Textboxcomponent(props){
    return(
        <div className={style.textbox}>
            <span>{props.output}</span>
        </div>
    )
}