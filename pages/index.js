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
         <div>
          <Image src="/wts1.jpg" alt="img" width={400} height={200} />
          </div>
          <div>
          <Image src="/wts2.jpg" alt="img" width={400} height={200} />
          </div>
       </Slider>
    </div>
  ) 
}
