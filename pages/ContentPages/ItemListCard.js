import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "next/router";
import { withRouter, useRouter } from "next/router";
import cardJson from '../JSON_Files/Card_Item_List.json'
import styles from '../styles/Home.module.css'

function ItemListCard(props) {
    const router = useRouter()

    const [list, setList] = useState(null)
    useEffect(() => {
        console.log("data render")
    }, [])
    const handleClick = (data) => {
        debugger
        Router.push('/Service/ServiceDetails/')
    }
    console.log(cardJson)
    return (
        <>
            <div className='row m-0'>
                <div className='col-10 offset-1'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                {
                                    cardJson.map((item) => {
                                        return (
                                            <div className={`col-4 pt-1 ${styles.containerCardItem}`}>
                                                <div className={`card ${styles.image}`}>
                                                    <div className='card-body' onClick={() => handleClick(item.Id)}>
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
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    )
}
export default withRouter(ItemListCard)