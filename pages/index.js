import Slider from "react-slick";
import Image from 'next/image'
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div style={{width:'50%',height:292}}>
       {/* <Slider {...settings}>
          <div style={{width:640,height:292,position:'relative',border:'1px solid'}}>
          <Image  src="/wts1.jpg" alt="img"  layout="fill" />
          </div>
          <div style={{width:640,height:292,position:'relative'}}>
          <Image  src="/wts2.jpg" alt="img"  layout="fill"/>
          </div>
       </Slider> */}
       
       {/* <div style={{width:640,height:292,position:'relative'}}> */}
          <Image width={640} height={292} src="/wts1.jpg" alt="img" layout="fixed"  />
       {/* </div> */}
    </div>
  ) 
}
