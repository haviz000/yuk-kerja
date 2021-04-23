import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InputOption from './inputOption';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({name,description,message,photoUrl}) {
	return (
		<div className="post">
			<div className="post_header">
				<Avatar/>
				<div className="post_info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
			<div className="post_body">
				{message}
			</div>
			<div className="post_buttons">
				<InputOption Icon={ThumbUpIcon} title="Like" color="orange"/>
				<InputOption Icon={MessageIcon} title="Comment" color="orange"/>
				<InputOption Icon={ShareIcon} title="Share" color="orange"/>
				<InputOption Icon={SendIcon} title="Send" color="orange"/>
			</div>
		</div>
	)
}

export default Post