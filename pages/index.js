import Slider from "react-slick";
import Image from 'next/image'
export default function Home() {
  const settings = {
    className: "banner-carousel",
        centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding:"350px",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive:[
      {
          breakpoint: 600,
          settings: {
              centerPadding: "20px",
              arrows:false,
              // nextArrow: null,
              // prevArrow: null,
              dots:true,
              // dotsClass: `slick-dots ${style.dots_mobile}`,
          }
        },
  ]
  };
  return (
    <div style={{width:'100%'}}>
       <Slider {...settings}>
         <div className="slide">
           <div className="remove-mobile">
              <Image width={958} height={392} src="/wts1.jpg" alt="img" layout="responsive"  />
           </div>
           <div className="show-mobile">
             <div style={{padding:10}}>
              <div style={{width:'100%',height:350,position:'relative'}}>
                <Image   objectFit="fill"src={`/wtsm1.jpg`} alt="" layout="fill"/>

              </div>
             </div>
             

           </div>

         </div>
         <div className="slide">
         <div className="remove-mobile">
              <Image width={958} height={392} src="/wts1.jpg" alt="img" layout="responsive"  />
           </div>
           <div className="show-mobile">
           <div style={{padding:10}}>
              <div style={{width:'100%',height:350,position:'relative'}}>
                <Image   objectFit="fill"src={`/wtsm1.jpg`} alt="" layout="fill"/>

              </div>
             </div>
           </div>
         </div>
         <div className="slide">
          <div className="remove-mobile">
              <Image width={958} height={392} src="/wts1.jpg" alt="img" layout="responsive"  />
           </div>
           <div className="show-mobile">
           <div style={{padding:10}}>
              <div style={{width:'100%',height:350,position:'relative'}}>
                <Image   objectFit="fill"src={`/wtsm1.jpg`} alt="" layout="fill"/>

              </div>
             </div>
           </div>
         </div>
         
       
      
       </Slider>
       {/* <h1>Hello</h1> */}
    </div>
  ) 
}
