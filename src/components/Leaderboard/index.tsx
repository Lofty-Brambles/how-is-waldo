import React from "react";
import styled from "styled-components";
import{ text, flex, vars } from "../../styles";
import TabBar from "../TabBar";

const Container = styled.div`
	flex-grow: 1;
	background-image: url("/background.webp");
	background-size: cover;
	background-position: center;
	
	overflow-y: scroll;
`;

const Wrapper = styled.div`
	${flex("column")}
	margin: 2rem;
	padding: 2rem;
	border-radius: 2rem;
	background-color: ${vars.blackOp80};
`;

const SubHead = styled.div`
	width: 100%;
	text-align: center;
	${text("titan", 1.2, vars.white, 500)}
`;

const Leaderboard = () => (
	<Container>
		<Wrapper>
			<SubHead>📦 | Leaderboards!</SubHead>
			<TabBar />
		</Wrapper>
	</Container>
);

export default Leaderboard;
