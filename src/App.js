import React from 'react';


export default function App() {
  return (
	<div>
		<h1>Images from Local</h1>
		<img src='Assets/sma1.jpg' alt="sma1"
		style={{
			display: 'grid',
			position: 'relative',
			placeItems: 'center',
			width: '50vw',
          height: '50vh',
          borderRadius: '5%',
      
		}}
		/>
		<div>
			<h1>Images from URL</h1>
			<img src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg" alt="building"
			style={{
				display: 'grid',
			position: 'relative',
			placeItems: 'center',
			width: '50vw',
          height: '50vh',
          borderRadius: '5%',
			}}
			/>
		</div>
		</div>
  )
}
