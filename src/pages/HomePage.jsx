import React from 'react';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';

function HomePage() {
	return (
		<>
			<Hero />
			<Info id='about' />
			<Features id='features' />
		</>
	);
}

export default HomePage;
