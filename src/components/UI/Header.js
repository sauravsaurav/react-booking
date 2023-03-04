import { NavLink } from "react-router-dom";
import "../../App.css";
import {useState} from "react";
import { useSelector } from "react-redux";

const Header = ()=>{
    const [refresh , setRefresh] = useState(false);

    const colors = ['tomato','yellow','white','orange','dodgerblue','pink', 'lightgreen'];
    const randomNumber = ()=>{
        return Math.floor(Math.random() * 7) + 1
    }

    const refreshHandler = ()=>{
        setRefresh(prevState=>!prevState);
    }

    const booked = useSelector(state=> state.movie.booked);
    const seats = useSelector(state => state.seat.booked.totalBooked);
    return (
        <div className="globalHeader">
                <h2 onMouseOver={refreshHandler}>
                    <span className={colors[randomNumber()]}>P</span>
                    <span className={colors[randomNumber()]}>i</span>
                    <span className={colors[randomNumber()]}>c</span>
                    <span className={colors[randomNumber()]}>a</span>
                      
                    <span className={colors[randomNumber()]}>B</span>
                    <span className={colors[randomNumber()]}>o</span>
                    <span className={colors[randomNumber()]}>o</span>
                    <span className={colors[randomNumber()]}>k</span>
                </h2>
                <nav className="globalNavLinks">
                    <NavLink to="/" className={({isActive})=> isActive ? 'navLink activeLink' : 'navLink'}>Movies</NavLink>
                    <NavLink to="/booking" style={{pointerEvents : !booked ? "none" : "auto" , background : !booked ? 'gray' : ''}} className={({isActive})=> isActive ? 'navLink activeLink' : 'navLink'} >Booking</NavLink>
                    <NavLink to="/checkout" style={{pointerEvents : (!booked || seats === 0) ? "none" : "auto" , background : (!booked || seats === 0) ? 'gray' : ''}} className={({isActive})=> isActive ? 'navLink activeLink' : 'navLink'}>Checkout</NavLink>
                </nav>
        </div>
    )
}

export default Header;