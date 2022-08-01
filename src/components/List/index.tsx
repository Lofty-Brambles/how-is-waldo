import { addSeconds, formatDuration, intervalToDuration } from "date-fns";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../../firebase";
import { box, flex, text, vars } from "../../styles";

interface Col {
	[time: string]: string;
}

type Props = {
	time: number;
	name: string;
};

const Logbar = styled.div`
	box-sizing: border-box;
	width: calc(100% - 5rem);

	${flex()}
	padding: 1rem;
	border-radius: 0 0 1rem 1rem;

	background-color: ${vars.darkEmerald};
	${text("flower", 1, vars.white, 500)}
	letter-spacing: 1px;
`;

const Logstyle = styled.div`
	position: relative;

	&::after {
		content: "";
		position: absolute;

		left: 50%;
		bottom: 2px;
		${box("35%", "4px")}
		transform: translateX(-50%);

		border-radius: 2px;
		background-color: ${vars.whiteOp35};
	}

	& span {
		${text("titan", 1.1, vars.white, 400)}
	}
`;

const Log = ({ time, name }: Props) => {
	const fmtTime: string = formatDuration(
		intervalToDuration({
			start: new Date(0),
			end: addSeconds(new Date(0), time),
		}),
		{
			format: ["hours", "minutes", "seconds"],
			zero: true,
		}
	)
		.split(/\s+.*\s*/gi)
		.map(ele => ele.padStart(2, "0"))
		.join(" : ");
	return (
		<Logstyle>
			<span>{fmtTime}</span>&nbsp;&nbsp;|&nbsp;&nbsp;{name}
		</Logstyle>
	);
};

const List = () => {
	const [data, setData] = useState<Col | null>(null);
	const { topmap } = useParams();

	const init: Col = {};
	const sorted = (snapVal: Col) =>
		Object.keys(snapVal)
			.sort()
			.reduce((acc, key) => {
				acc[+key] = snapVal[+key];
				return acc;
			}, init);
	const check = (address: string | undefined) =>
		!(
			address === "dreamcast" ||
			address === "gamecube" ||
			address === "n64"
		);

	useEffect(() => {
		setData({
			23: "23ra"
		});
		/* if (check(topmap)) {
			const reference = ref(db, topmap);
			onValue(reference, snapshot => {
				const snapVal = snapshot.val as unknown as Col;
				setData(sorted(snapVal));
			});
		} */
	}, []);

	if (check(topmap)) {
		return (
			<Logbar>
				Oh no, click on the map options to fetch lederboards!
			</Logbar>
		);
	}
	return data === null ? (
		<Logbar>
			No one has played a game of how-is-waldo yet ;(. Poor waldo.
		</Logbar>
	) : (
		<Logbar>
			{Object.keys(data)
				.slice(0, 5)
				.map((ele: string) => (
					<Log time={+ele} name={data[+ele]} />
				))}
		</Logbar>
	);
};

export default List;
