import 'bootstrap/dist/css/bootstrap.min.css';
import CardPopUP from "./CardPopUP";
// import style from '../styles/nav.css'

export default function ContentContainer(props) {
    const { style } = props;
    return (
        <>
            <div className={style.header}>
                <h2 className='title'>Service Title</h2>
                <p>Description</p>
                <CardPopUP />
            </div>
        </>
    )
}