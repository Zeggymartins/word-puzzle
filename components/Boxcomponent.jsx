import styles from "./box.module.css";
export default function Boxcomponent(props){
    return(
        <div className={styles.box}>
            <span>{props.display}</span>
        </div>
    )
}