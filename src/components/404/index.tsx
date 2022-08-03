import React from "react";
import styled from "styled-components";
import { flex, text, vars, shadow } from "../../styles";

const Container = styled.div`
	flex-grow: 1;
	background-image: url("/background.webp");
	background-size: cover;
	background-position: center;

	overflow-y: scroll;
	${flex("column")}
	gap: 2rem;
`;

const Big = styled.h2`
	${text( "titan", 2, vars.grey )}
	${shadow( "text", vars.white )}
`;

const Small = styled.h5`
	${text( "titan", 1, vars.grey )}
	${shadow( "text", vars.white )}
`;

const Four04 = () => (
	<Container>
		<Big>404</Big>
		<Small>Oh no, you visited the wrong page! It doesn&apos;t seem to exist!</Small>
	</Container>
);

export default Four04;
