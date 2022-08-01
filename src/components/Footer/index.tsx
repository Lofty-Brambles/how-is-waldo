import React from "react";
import styled from "styled-components";
import { box, flex, text, vars } from "../../styles";

const FootBar = styled.div`
	${box("100%", "10vh")}
	border-top: 4px ${vars.white} double;

	background-color: ${vars.emerald};
	${text("flower", 1, vars.white, 600)}

	${flex()}
	padding: 0 2rem;
`;

const Footer = () => (
	<FootBar>Made with 💘 - yeah just kidding, it was pain.</FootBar>
);

export default Footer;
