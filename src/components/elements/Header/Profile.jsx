import {Dropdown,Button,ButtonGroup} from 'react-bootstrap'
import styles from './Header.module.scss'

const Profile = () => {
	return (
		<div className={styles['profile-wrapper']}>
			<div className={styles.notification}>
				<i className='bx bxs-bell'></i>
				<span></span>
			</div>
			<div className={styles.profile}>
				<div>
					<img
						src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50'
						alt=''
					/>
				</div>
				<i >
				<Dropdown as={ButtonGroup}>


						<Dropdown.Toggle split style ={{backgroundColor:'#0f1011',borderRadius:30,border: '1px solid rgba(255, 255, 255, 0.7)'}} id="dropdown-split-basic" />

						<Dropdown.Menu id="dropdown-">
							<Dropdown.Item href="#/action-1">Marvel</Dropdown.Item>
							<Dropdown.Item href="#/action-2">DC</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Disney</Dropdown.Item>
					</Dropdown.Menu>
					</Dropdown>
				</i>
			</div>
		</div>
	)
}

export default Profile
