import styles from './Navigation.module.css'
//style is an object, where navigation is the key
const NavBar = () => {
    return (
        <nav className={`${styles.navigation} container `}>
            <img src="./images/logo.png"/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;