import ButtonComponent from '../../UI/Button/ButtonComponent'
import styles from './Main.module.scss'
import Modal from '../Modal/Modal'
import FavouritesState from '../Modal/Favourites'

const Information = ({ movie, show,setShow,handleShow,handleClose}) => {
	const addToFavorites = movieName => {
			let favorites = localStorage.getItem('favMovies')

			if(favorites){
				favorites = JSON.parse(favorites)
				localStorage.setItem('movie', movieName)
				alert(`${movieName} теперь в избранном!`)
			}
	}

	return (
		<div className={styles.info}>
			<img src={movie.logo} alt={movie.name} width={200} style = {{marginLeft:40}}/>
			<div className={styles.additional}>
				<span style ={{marginLeft:40}}>{movie.year}</span>
				<span style = {{border: '1px solid #999', borderRadius: '6px', padding: '5px',marginLeft:40}}>{movie.limitAge}</span>
				<span style ={{marginLeft:40}}>{movie.rating}</span>
				<span style ={{marginLeft:40}}>{movie.duration}</span>
			</div>

				<div className={styles.description}>{movie.description}</div>
				<div className={styles.description}>{movie.description2}</div>



			<div className={styles.buttons}>
					<Modal onClick = {()=> handleShow()}/>
				<FavouritesState  onClick = {()=> handleShow()}/>
			</div>
		</div>
	)
}

export default Information
