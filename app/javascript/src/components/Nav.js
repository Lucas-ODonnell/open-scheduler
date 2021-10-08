import React, {useState, useEffect} from 'react';
import ComputerNav from './ComputerNav';
import MobileNav from './MobileNav';
import './Nav.css';

const Nav = ({FontAwesomeIcon}) => {
	const [isMobile, setIsMobile] = useState(false);
	const [windowSize, setWindowSize] = useState(undefined);
	const [icon, setIcon] = useState(false);
	const [showMenu, setShowMenu] = useState(false); //mobile navigation

	const showBurger = (windowSize) => {
		if (windowSize <= 960) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}

	useEffect(()=> {
		showBurger(windowSize);
		const handleResize = () => {
			setWindowSize(window.innerWidth)
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, [showBurger])

	const handleBurgerClick = () => {
		setShowMenu(!showMenu);
	}

	const cleanup = () => {
		setShowMenu(false);
		setIcon(false);
	}

	return (
		<nav>
			<div className="navigation">
				<div className="nav-container">
					<div className="nav-header">
						<h1>Open Scheduler</h1>
					</div>
					{!isMobile ?
					<ComputerNav/> //nav for computers
					:
					//changes to icon at less than 960 width
					<div className="mobile-body"> 
						<button onClick={()=> {handleBurgerClick(); setIcon(!icon)}}>{!icon ? <FontAwesomeIcon icon="bars" /> : <FontAwesomeIcon icon="times" /> }</button>
					</div>
					}
				</div>
			</div>
			{showMenu ?
			<MobileNav {...{cleanup}}/>
			:
			<></>
			}
		</nav>
	)
}
export default Nav;
