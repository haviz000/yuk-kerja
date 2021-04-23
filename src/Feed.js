import React,{useState ,useEffect} from 'react'
import './Feed.css'
import InputOption from './inputOption'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon  from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import {db} from './firebase';
import firebase from 'firebase'

function Feed() {
	const [input, setInput] = useState('');
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts").orderBy('timeStamp','asc').onSnapshot(snapshot => (
			setPosts(
				snapshot.docs.map(doc => (
			{
				id : doc.id,
				data : doc.data()
			}
			)))
		))
	},[])

	const sendPost = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			name : "Sirius Black",
			description : "Attacker",
			message : input,
			photoUrl : '',
			timeStamp: firebase.firestore.FieldValue.serverTimestamp(),

		});
		setInput('');
	};
	return (
		<div className="feed">
			<div className="feed_inputController">
				<div className="feed_input">
					<CreateIcon/>
					<form action="">
						<input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
						<button onClick={sendPost} type="submit">Send</button>
					</form>
				</div>
				<div className="feed_inputOptions">
					<InputOption title="Photo" Icon={ImageIcon} color="#70B5F9"/> 
					<InputOption title="Video" Icon={SubscriptionsIcon} color="red"/> 
					<InputOption title="Event" Icon={EventIcon} color="orange"/> 
					<InputOption title="Write article" Icon={CalendarViewDayIcon} color="green"/>
				</div>
			</div>
			{posts.map((
				{id,data:{name,description,message,photoUrl}})=>(
				<Post 
				key={id} 
				name={name} 
				description={description} 
				message={message}
				photoUrl={photoUrl}
				/>
				))}
		</div>
	)
}

export default Feed