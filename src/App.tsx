import React from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { vars } from "./styles";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
	:root {
		--titan: ${vars.titan};
		--flower: ${vars.flower};
		--zeu: ${vars.zeu};
	}

	body {
		overflow-y: hidden;
	}

	// Meyer's Reset
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, font, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		font-weight: inherit;
		font-style: inherit;
		font-size: 100%;
		font-family: inherit;
		vertical-align: baseline;
	}
	/* remember to define focus styles! */
	:focus {
		outline: 0;
	}
	body {
		line-height: 1;
		color: black;
		background: white;
	}
	ol, ul {
		list-style: none;
	}
	/* tables still need 'cellspacing="0"' in the markup */
	table {
		border-collapse: separate;
		border-spacing: 0;
	}
	caption, th, td {
		text-align: left;
		font-weight: normal;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: "";
	}
	blockquote, q {
		quotes: "" "";
	}
`;

const App = () => (
	<div
		className="App"
		style={{ display: "flex", flexDirection: "column", height: "100vh" }}
	>
		<GlobalStyle />
		<Navbar />
		<Outlet />
		<Footer />
	</div>
);

export default App;
