import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core';

function Sidebar() {

	const recentItem = (topic) => (
			<div className="sidebar_recentItem">
			<span className="sidebar_hash">#</span>
			<p>{topic}</p>
			</div>
		)

	return (
		<div className="Sidebar">
			<div className="sidebar_top">
				<img src="https://images.wallpaperscraft.com/image/planets_space_open_space_129764_2560x1440.jpg" alt=""/>
				<Avatar className="sidebar_avatar"/>
				<h2>Harry Potter</h2>
				<h4>potter@hogwarts.wz</h4>
			</div>
			<div className="sidebar_stats">
				<div className="sidebar_stat">
					<p>Who viewed you</p>
					<p className="sidebar_statNumber">2,989</p>
				</div>
				<div className="sidebar_stat">
					<p>Views on posts</p>
					<p className="sidebar_statNumber">3,892</p>
				</div>
			</div>
			<div className="sidebar_bottom">
				<p>Recent</p>
				{recentItem('Goblet of fire')}
				{recentItem('The Azkaban')}
				{recentItem('Dementor Attack')}
				{recentItem('Voldemort is fire up')}
				{recentItem('Dumbledor Save Hogwarts')}
			</div>
		</div>
	)
}
 
export default Sidebar