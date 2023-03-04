import classes from "./NotFound.module.css";
import { Link } from "react-router-dom";
const NotFound = ()=>{
    return (
        <div className = {classes.notfoundcontainer}>
            <center>
                <h1>4</h1>
                <h1>0</h1>
                <h1>4</h1>
                <h2>
                    Page Not Found
                </h2>
                <br/>
                <Link className={classes.homepageLink} to="/">Go to homepage</Link>
            </center>
        </div>
    )
}

export default NotFound;