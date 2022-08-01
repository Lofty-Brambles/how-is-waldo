import React from "react";
import styled from "styled-components";
import { Zap } from "react-feather";
import { Link } from "react-router-dom";
import { vars, flex, box, text } from "../../styles";

const Header = styled.div`
	${box("100%", "10vh")}

	color: ${vars.white};
	background-color: ${vars.emerald};
	border-bottom: 4px ${vars.white} double;

	${flex("row", "space-between")}
	padding: 0 2rem;

	& a {
		text-decoration: none;
		color: ${vars.white};
	}
`;

const Title = styled.h1`
	font-family: var(--titan);
	font-size: 1.5rem;
`;

const LeaderLink = styled.div`
	${flex()}
	padding: 0.5rem;
	border-radius: 0.5rem;
	${text("flower", 1.2, vars.white, 700)}

	&:hover {
		background-color: ${vars.darkEmerald};
	}
`;

const Navbar = () => (
	<Header>
		<Link to="/">
			<Title>How is waldo?</Title>
		</Link>
		<Link to="/leaderboard">
			<LeaderLink>
				<Zap size={24} color="red" />
				&nbsp;Leaderboard
			</LeaderLink>
		</Link>
	</Header>
);

export default Navbar;
