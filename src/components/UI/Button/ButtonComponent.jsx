import styles from './Button.module.scss'
import {useState} from 'react'
// import Modal from '../Modal/Modal'

const ButtonComponent = ({ children, cb }) => {
	const [active, setActive] = useState(true)

	return (
		<button onClick={cb} className={styles.button}>
			{children}
			{/* {<Modal active ={active} setActive={setActive}/> } */}
		</button>
	)
}

export default ButtonComponent
