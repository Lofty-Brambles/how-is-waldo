import React from "react";
import styled from "styled-components";
import { box, flex, text, vars } from "../../styles";
import {} from "uuid";

import Map1 from "../../assets/map1.jpg";
import Map2 from "../../assets/map2.jpg";
import Map3 from "../../assets/map3.jpg";

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

const Boxing = styled.div`
	width: 100%;
	padding: 2rem;
	${flex("row", "center", "center", "wrap")}
	gap: 2rem;
`;

const Card = styled.div`
	cursor: pointer;
	${flex("column")}
	border-radius: 2rem;

	& > img {
		border-radius: 2rem;
		${box("15rem", "24rem")}
	}

	&:hover {
		box-shadow: ${vars.blackOp80} 0px 5px 15px;
		transform: scale(1.1);
	}
`;

const Starter = () => (
	<Container>
		<Wrapper>
			<SubHead>Select a game map to play!</SubHead>
			<Boxing>
				{[Map1, Map2, Map3].map((ele, i) => (
					<Card>
						<img src={ele} alt={`Map-${i}`} />
					</Card>
				))}
			</Boxing>
		</Wrapper>
	</Container>
);

export default Starter;
