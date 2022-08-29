import React from 'react';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';

function HomePage() {
	return (
		<>
			<Hero />
			<Info id='about' />
		</>
	);
}

export default HomePage;
