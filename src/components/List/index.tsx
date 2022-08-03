import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../../firebase";
import { box, flex, text, vars } from "../../styles";

interface Entry {
	name: string;
	time: number;
}

interface Props {
	item: Entry;
}

const Logbar = styled.div`
	box-sizing: border-box;
	width: calc(100% - 5rem);

	${flex("column")}
	padding: 1rem;
	border-radius: 0 0 1rem 1rem;

	background-color: ${vars.darkEmerald};
	${text("flower", 1, vars.white, 500)}
	letter-spacing: 1px;
`;

const Logstyle = styled.div`
	position: relative;
	padding-bottom: 0.7rem;

	&::after {
		content: "";
		position: absolute;

		left: 50%;
		bottom: 0.5rem;
		${box("35%", "4px")}
		transform: translateX(-50%);

		border-radius: 2px;
		background-color: ${vars.whiteOp35};
	}

	& span {
		${text("titan", 1.1, vars.white, 400)}
	}
`;

const Log = ({ item }: Props) => {
	const fmtTime = (secs: number) =>
		`${Math.floor(secs / 3600)
			.toString()
			.padStart(2, "0")} : ${Math.floor((secs % 3600) / 60)
			.toString()
			.padStart(2, "0")} : ${(secs % 60).toString().padStart(2, "0")}`;
	return (
		<Logstyle>
			<span>{fmtTime(item.time)}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
			{item.name}
		</Logstyle>
	);
};

const List = () => {
	const [data, setData] = useState<Entry[] | null>(null);
	const { topmap } = useParams();

	const check = (address: string | undefined) =>
		(
			address === "dreamcast" ||
			address === "gamecube" ||
			address === "n64"
		);

	const sort = (arr: Entry[]) =>
		arr
			.sort((a: Entry, b: Entry) => (a.time > b.time ? 1 : -1))
			.slice(0, 15);

	useEffect(() => {
		if (check(topmap)) {
			const dbRef = ref(db);
			get(child(dbRef, topmap as string)).then(snap => {
				if (snap.exists())
					setData(sort(snap as unknown as Entry[]));
			});
		}
	}, []);

	if (!check(topmap)) {
		return (
			<Logbar>
				Oh no, click on the map options to fetch lederboards!
			</Logbar>
		);
	}
	return (data === null) || (data === []) ? (
		<Logbar>
			No one has played a game of how-is-waldo yet ;(. Poor waldo.
		</Logbar>
	) : (
		<Logbar>
			{data.map((ele: Entry) => (
				<Log item={ele} key={ele.name} />
			))}
		</Logbar>
	);
};

export default List;
export type { Entry };
