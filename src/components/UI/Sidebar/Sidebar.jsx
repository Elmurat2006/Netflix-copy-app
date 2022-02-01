import styles from './Sidebar.module.scss'
import {Link} from 'react-router-dom'
const menu = ['Episodes', 'TV Shows', 'Films', 'My list']

const Sidebar = ({ isSidebarShow, setIsSidebarShow }) => {
	return (
		<div
			className={styles.sidebar}
			style={{ width: isSidebarShow ? '15%' : '10%' }}
		>
			<button onClick={() => setIsSidebarShow(!isSidebarShow)}>
				<i className={`bx bx-${isSidebarShow ? 'x' : 'menu'}`}></i>
			</button>
			<ul className={isSidebarShow ? styles.show : ''}>
				{menu.map(title => (
					<li key={title}>
						<a href="#">{title}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Sidebar
