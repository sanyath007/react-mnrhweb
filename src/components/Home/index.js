import React from 'react';
import Carousel from '../Carousel';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const carouselItems = [
  {
    id: 1,
    topic: 'กลุ่มงานเวชกรรมสังคม โรงพยาบาลมหาราชนครราชสีมา',
    desc: 'กลุ่มงานเวชกรรมสังคม โรงพยาบาลมหาราชนครราชสีมา ...',
    picUrl: '01.jpg'
  },
  {
    id: 2,
    topic: 'ศูนย์แพทย์ศาสตร์ศึกษา โรงพยาบาลมหาราชนครราชสีมา',
    desc: 'ศูนย์แพทย์ศาสตร์ศึกษา โรงพยาบาลมหาราชนครราชสีมา ...',
    picUrl: '02.jpg'
  },
  {
    id: 3,
    topic: 'รับสมัครลูกจ้างชั่วคราว 75 อัตรา',
    desc: 'โรงพยาบาลมหาราชนครราชสีมา รับสมัครลูกจ้างชั่วคราว จำนวน 75 อัตรา สามารถดูรายละเอียดได้ที่...',
    picUrl: '03.jpg'
  },
  {
    id: 4,
    topic: 'เจ็บป่วยฉุกเฉิน โทร 1669',
    desc: 'เจ็บป่วยฉุกเฉิน โทร 1669 ไม่ถามสิทธิ์ ใกล้ที่ไหนไปที่นั่น...',
    picUrl: '04.jpg'
  },
  {
    id: 5,
    topic: 'ส่งเสด็จสู่สวรรคาลัย',
    desc: 'ปวงข้าพระพุทธเจ้า ขอน้อมเกล้าน้อมกระหม่อมรำลึกในพระมหากรุณาธิคุณหาที่สุดมิได้...',
    picUrl: '05.jpg'
  }
]
const Home = ({}) => (
  <div className="container-fluid" style={{ marginTop: 15 }}>
    {/* <!-- Carousel --> */}
    <Carousel items={ carouselItems }></Carousel>

    <div className="row" style={{ marginLeft: 15, marginRight: 15 }}>
      
      <LeftContent />
      
      <RightContent />

    </div>
  </div>
);

export default Home;
