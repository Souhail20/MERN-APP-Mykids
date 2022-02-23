import React from 'react'
import './about.css';
import './possibility.css';
import mykidslogo from '../img/possibility.png';
const About = () => {
  return (
    <div>
    <div className="area">About Us
        </div>
      <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={mykidslogo} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>مرحبا بيك في منصة قريني</h4>
      <p>منصة قريني هي منصة تعليمية ترفيهية للصغار التي تتراوح اعمارهم من 4 الى 12 سنه من خلالها يستطيعون تعلم العديد من المفاهيم بطريقة ترفيهية كتعلم القصص و الالون و الاشكال</p>
      <h4>الرجاء قم بالتسجيل للاطلاع على مزيد من المعلومات</h4>
    </div>
  </div>
    </div>
  )
}

export default About