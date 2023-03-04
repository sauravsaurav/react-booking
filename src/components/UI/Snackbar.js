import classes from "./Snackbar.module.css";
const Snackbar = (props)=>{
    return (
        <div className={`${classes.snackbar} ${classes.show}`}>{props.message}</div>
    )
}

export default Snackbar;