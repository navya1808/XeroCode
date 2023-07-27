import React from 'react';
import './Footer.css';
import './Form.css';
import Text6 from '../../public/images/Text6.svg';
import Text7 from '../../public/images/Text7.svg';
import Text8 from '../../public/images/Text8.svg';
import Form from './Form';
import Image from 'next/image';

interface Props {
  token: string;
}

const Footer: React.FC<Props> = ({ token }) => {
  return (
    <div className="footer">
      <Image src={Text6} className="image-container header-text" alt="text" />
      <Image src={Text7} className="image-container text7" alt="text" />
      <Form token={token} />
      <Image src={Text8} className="image-container text8" alt="text" />
    </div>
  );
};

export default Footer;
