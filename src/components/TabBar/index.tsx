import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { box, text, vars } from "../../styles";

const Tabs = styled.div`
	margin: 1rem 1rem 0 1rem;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: calc(100% - 5rem);

	& a {
		position: relative;
		padding: 1rem;
		${box("100%")}
		text-align: center;
		background-color: ${vars.emerald};

		text-decoration: none;
		${text("zeu", 1.25, vars.white, 700)}

		&:first-child {
			border-radius: 1rem 0 0 0;
			border-right: 1px ${vars.grey} solid;
		}

		&:last-child {
			border-radius: 0 1rem 0 0;
			border-left: 1px ${vars.grey} solid;
		}

		&::after {
			content: "";
			position: absolute;
			width: 0;
			margin: 0 2rem;

			height: 3px;
			bottom: 0.5rem;
			left: 0;

			background-color: ${vars.white};
			visibility: hidden;
			transition: all 0.4s ease-in-out;
		}

		&:hover::after {
			visibility: visible;
			width: calc(100% - 4rem);
		}

		&.active {
			background-color: ${vars.darkEmerald};
		}
	}
`;

const TabBar = () => (
	<>
		<Tabs>
			<NavLink to="/leaderboard/dreamcast">Dreamcast</NavLink>
			<NavLink to="/leaderboard/gamecube">Gamecube</NavLink>
			<NavLink to="/leaderboard/n64">N64</NavLink>
		</Tabs>
		<Outlet />
	</>
);

export default TabBar;
