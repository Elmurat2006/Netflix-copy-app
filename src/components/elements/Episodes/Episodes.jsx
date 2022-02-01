import ButtonComponent from '../../UI/Button/ButtonComponent'
import styles from '../Episodes/Episodes.module.scss'
import DATA from '../../../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import ShangChi from '../../../images/ShangChi.jpeg';
import blackWidow from '../../../images/blackWidow.jpeg';
import eternals from '../../../images/eternals.jpeg';
import infinityWar from '../../../images/infinityWar.jpeg';
import 'swiper/css'

const Episodes = ({DATA,movie}) => {
	return (
		<div>
			<h1 className = {styles.title}>Movies from marvel</h1>
			<div className={styles.description}>Marvels The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.</div>
			<div>	
		<Swiper className = {styles.swiperSlider}
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
  		  >
				  <SwiperSlide className = {styles.titleSlide} style ={{'color':'#fff'}} > Shang-Chi and the Legend 10 rings
					  	<img src={ShangChi} alt="" className={styles.imgEpisodes}/>
					   </SwiperSlide>
    			  <SwiperSlide className = {styles.titleSlide} style ={{'color':'#fff'}} >Black Widow 
				  <img src={blackWidow} alt="" className={styles.imgEpisodes}/>
				  </SwiperSlide>

    			  <SwiperSlide className = {styles.titleSlide} style ={{'color':'#fff'}} >Eternals
				  <img src={eternals} alt="" className={styles.imgEpisodes}/>
					</SwiperSlide>
    			  <SwiperSlide className = {styles.titleSlide} style ={{'color':'#fff'}} >Avengers: Infinity War 
				  <img src={infinityWar} alt="" className={styles.imgEpisodes}/>
				  </SwiperSlide>
		</Swiper>
			</div>
		</div>
	)
}

export default Episodes



