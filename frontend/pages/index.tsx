import React from 'react'
import Header from "../src/Components/Header"
import Section from "../src/Components/Section"
import Footer from "../src/Components/Footer"
import './index.css'
import { useRouter } from 'next/router';

const Index: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;
  return (
    <>
    <Header />
    <Section token={token as string}/>
    <Footer token={token as string}/>
    </>
  )
}

export default Index;