import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroSection, HeroText, ButtonWrapper } from './HeroStyles';

function Hero() {
	return (
		<HeroSection id='hero'>
			<Container>
				<MainHeading inverse>
					Find the best events and meetups with us
				</MainHeading>
				<HeroText>
					We help you find all of your favourite events in one place
				</HeroText>

				<ButtonWrapper>
					<Link to='/sign-up'>
						<Button big>Find your event</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
}

export default Hero;
