import React from 'react'
import Logo from '../../public/images/Logo.svg'
import XeroCodee from '../../public/images/XeroCodee.svg'
import Image from 'next/image';
import './Header.css'

const Header = () => {
  return (
    <>
    <div className="header">
    <Image src={Logo} alt="Logo" className="logo-image" />
    <Image src={XeroCodee} alt="XeroCodee" className="xero-image" />
    </div>
    <div className="divider" />
    </>
  )
}

export default Header