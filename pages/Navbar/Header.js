import react, { useState } from "react";
import get from 'lodash/get'
// import styled from 'styled-components'
// import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
// import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


// import style from '../styles/nav.css'

export default function Navbar(props){
const {style, handleLocation} = props;
const [selectedLocation, setSelectedLocation]=useState(get(props, 'location', ''))
    return (
        <>
            <div className={style.navbar}>
                <a href="#" className={style.active}>Home</a>
                <a href="#" className={style.right}>Blog</a>
                <a href="#" className={style.right}>Register as a Professional</a>
                <a href="#" className={style.right}>Login / Sign Up</a>
            </div>

            <div className={style.header}>
            <p>Home/Delhi-Ncr</p>
                <h1>Home services, on demand.</h1>
                <div className="row">
                    <div className="col-2 offset-2">
                        <select value={get(props, 'location', 0)} className={style.myInput} onChange={(e)=>{handleLocation(e)}}>
                            <option value="">Select location</option>
                            <option value="Noida">Noida</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </div>
                    
                    <div className="col-5 offset-1">
                    <input type="text" className={style.myInput} placeholder="Search.."  />
                    </div>
                </div>
               

            </div>
        </>
    )

}