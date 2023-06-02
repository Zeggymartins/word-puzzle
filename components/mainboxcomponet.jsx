import style from "./mainbox.module.css";
export default function Mainbox(props) {
  return (
    <div className={style.bigbox}>
      <span>{props.show}</span>
      {props.children}
    </div>
  );
}
