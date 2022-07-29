import React from "react";
import styled from "styled-components";
import { Zap } from "react-feather";
import styles from "../../assets/styles.json";

const Header = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 10vh;
	color: ${styles.white};
	background-color: ${styles.emerald};

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
`;

const Title = styled.h1`
	font-family: var(--titan);
	font-size: 1.5rem;
`;

const LeaderLink = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.5rem;

	font-family: var(--flower);
	font-weight: 700;
	font-size: 1.2rem;

	&:hover {
		background-color: ${styles["dark-emerald"]};
	}
`;

const Navbar = () => (
	<Header>
		<Title>How is waldo?</Title>
		<LeaderLink>
			<Zap size={24} color="red" />
			&nbsp;Leaderboard
		</LeaderLink>
	</Header>
);

export default Navbar;
