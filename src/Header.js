import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import logo from './assets/logo.png';
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
	return (
		<div className='header'>
			

			<div className="header_left">
				<img src={logo} />

				<div className="header_search">
					<SearchIcon/>
					<input placeholder="Search" type="text" name="" id=""/>
				</div>
			</div>
			<div className="header_right">
				<HeaderOption Icon={HomeIcon} title='Home'/>
				<HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
				<HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
				<HeaderOption Icon={ChatIcon} title='Messaging'/>
				<HeaderOption Icon={NotificationsIcon} title='Notifications'/>
				<HeaderOption avatar='https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914' title='me'/>
			</div>
		</div>
	)
}

export default Header;