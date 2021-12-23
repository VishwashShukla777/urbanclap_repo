import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


// import style from '../styles/nav.css'

export default function Nav(props) {
    const { style } = props;
    return (
        <>
            <div className={style.navbar}>
                <a href="#">Home</a>
                <a href="#" className={style.right}>Blog</a>
                <a href="#" className={style.right}>Register as a Professional</a>
                <a href="#" className={style.right}>Login / Sign Up</a>
            </div>
        </>
    )

}