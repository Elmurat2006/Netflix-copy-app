import styles from '../Episodes/Episodes.module.scss'

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";


// import ShangChi from '../../../images/ShangChi.jpeg';
// import blackWidow from '../../../images/blackWidow.jpeg';
// import eternals from '../../../images/eternals.jpeg';
// import infinityWar from '../../../images/infinityWar.jpeg';

const Episodes = () => {
	return (
		<div>
			<h1 className = {styles.title}>Episodes from marvel</h1>
			<div className={styles.description}>Marvels The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.</div>
			<div>	
						<div className="ml-40">
						<Swiper  navigation={true} modules={[Navigation]}  className="mySwiper">
				  <SwiperSlide>
					  <iframe style={{marginLeft:60,marginRight:40,marginBottom:60}} width="360" height="415" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					  <iframe style ={{marginRight:40,marginBottom:60}}width="360" height="415" src="https://www.youtube.com/embed/x_me3xsvDgk?start=3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					  <iframe style ={{marginBottom:60}} width="360" height="415" src="https://www.youtube.com/embed/giWIr7U1deA?start=2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					  </SwiperSlide>
				  <SwiperSlide>
				  <iframe style={{marginLeft:60,marginRight:40,marginBottom:60}} width="360" height="415" src="https://www.youtube.com/embed/dE1P4zDhhqw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				  <iframe style ={{marginRight:40,marginBottom:60}}width="360" height="415" src="https://www.youtube.com/embed/SXqzTZeuQZQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				  <iframe style ={{marginBottom:60}} width="360" height="415" src= "https://www.youtube.com/embed/z1vv6k0LsuY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				  </SwiperSlide>
				</Swiper>
						</div>
				

			</div>
		</div>
	)
}

export default Episodes







// export default function App() {
//   return (
//     <>
//       <Swiper navigation={true} modules={[Navigation]} >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
