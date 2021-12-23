import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "next/router";
import { withRouter, useRouter } from "next/router";
import cardServiceJson from '../JSON_Files/Card_ServicePopUp.json'
import styles from '../../styles/Home.module.css'

function CardPopUP(props) {
    const router = useRouter()
    const [list, setList] = useState(null)

    return (
        <>
            <div className="container pt-6">
                <div className='row'>
                    {
                        cardServiceJson.map((item) => {
                            return (
                                <div className={`col-4 pt-1 ${styles.containerCardItem}`}>
                                    <div className={`card ${styles.image}`}>
                                        <div className='card-body' >
                                            <div className="text-center">  <img src={item.thumbPath} height="50" /></div>
                                            <span className="pt-1 text-center">{item.description}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default withRouter(CardPopUP)