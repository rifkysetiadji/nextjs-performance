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
       {/* <Slider {...settings}>
         <div>
          <Image objectFit="contain" src="/wts1.jpg" alt="img" width={400} height={200} layout="responsive" />
          </div>
          <div>
          <Image objectFit="contain" src="/wts2.jpg" alt="img" width={400} height={200} layout="responsive"/>
          </div>
       </Slider> */}
       <Image objectFit="contain" src="/wts1.jpg" alt="img" width={400} height={200} layout="responsive" />
    </div>
  ) 
}
