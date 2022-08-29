import React from 'react';
import Content from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';
import { heroData } from '../data/HeroData';

function HomePage() {
	return (
		<>
			<Hero />
			<Info id='about' />
			<Features id='features' />
			<div id='events'>
				{heroData.map((contentData, index) => (
					<Content {...contentData} key={index} />
				))}
			</div>
		</>
	);
}

export default HomePage;
