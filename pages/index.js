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
    <div style={{width:'50%'}}>
       <Slider {...settings}>
       <Image width={958} height={392} src="/wts1.jpg" alt="img" layout="fixed"  />
       <Image width={958} height={392} src="/wts2.jpg" alt="img" layout="fixed"  />
       </Slider>
       
       {/* <div style={{width:640,height:292,position:'relative'}}> */}
          {/* <Image width={640} height={292} src="/wts1.jpg" alt="img" layout="fixed"  /> */}
       {/* </div> */}
    </div>
  ) 
}
