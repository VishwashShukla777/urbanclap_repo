import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './Navbar/Header'
// import style from '../styles/nav.css'
import styled from 'styled-components'
import { useState } from 'react';
import { isEmpty } from 'lodash';
import ItemListCard from './ContentPages/ItemListCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer'


export default function Home() {
  const [location, setLocation] = useState('');

  const handleLocation = (e) => {
    debugger
    //  console.log("data ", e.target.value)
    setLocation(e.target.value)
  }

  return (
    <div >
      <Header
        location={location}
        handleLocation={handleLocation}
        style={styles}
      />
      {
        !isEmpty(location) &&
        <main >
          <ItemListCard />
        </main> || null
      }
      <Footer />
    </div>
  )
}
