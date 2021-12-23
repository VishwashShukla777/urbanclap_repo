import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Nav from '../Navbar/Nav'
// import style from '../styles/nav.css'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'next/router'
import ContentContainer from './ContentContainer'
import Footer from '../Footer/Footer'

function ServiceDetail() {
    const [location, setLocation] = useState('');

    console.log("component render service")
    useEffect(() => {
        debugger
        console.log("component render service")
    })

    return (
        <div >
            <Nav style={styles} />
            <ContentContainer style={styles} />
            <Footer />
        </div>
    )
}
export default withRouter(ServiceDetail)