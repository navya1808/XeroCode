import React from 'react';
import Image from 'next/image';
import Robot from '../../public/images/Robot.svg';
import Text1 from '../../public/images/Text1.svg';
import Text2 from '../../public/images/Text2.svg';
import Text3 from '../../public/images/Text3.svg';
import Text4 from '../../public/images/Text4.svg';
import Text5 from '../../public/images/Text5.svg';
import BenefitList1 from '../../public/images/BenefitList1.svg';
import BenefitList2 from '../../public/images/BenefitList2.svg';
import SectionImage from '../../public/images/Section.svg';
import './Section.css';
import Form from './Form';

interface Props {
  token: string; 
}

const Section: React.FC<Props> = ({ token }) => {
  return (
    <div className="section-header">
      <Image src={Text1} className="image-container header-text" alt="text" />
      <Image src={Text2} className="image-container Code-text" alt="text" />
      <Image src={Text3} className="image-container process-text" alt="text" />
      <Form token={token} />
      <Image
        src={Robot}
        style={{ height: '15%', width: '80%' }}
        className="image-container"
        alt="image"
      />
      <Image src={Text4} className="image-container header-text" alt="text" />
      <Image src={Text5} className="image-container ai-text" alt="text" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          src={BenefitList1}
          style={{ width: '50%', height: '40%', marginLeft: '2%' }}
          alt="image"
        />
        <Image
          src={BenefitList2}
          style={{ width: '50%', height: '50%', marginRight: '2%' }}
          alt="image"
        />
      </div>
      <Image src={SectionImage} className="section" alt="image" />
    </div>
  );
};

export default Section;
