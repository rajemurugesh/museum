import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
function App() {
function buttonOnClick (){
	addNotification({
	title: 'Success',
	native:true		
	})
};
return (
	<div className="App">
	<Notifications />
	<h1>Hello World!</h1>
	<button onClick={buttonOnClick}>
		Push Notification
	</button>
	</div>
);
}

export default App;
