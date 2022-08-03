import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Four04 from "./components/404";
import Leaderboard from "./components/Leaderboard";
import List from "./components/List";
import Starter from "./components/Starter";
import { BodyCtx } from "./context/index";

const Routing = () => {
	const bodyVal = useMemo(() => ({}), []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<BodyCtx.Provider value={bodyVal}>
							<App />
						</BodyCtx.Provider>
					}
				>
					<Route index element={<Starter />} />
					<Route path="/leaderboard" element={<Leaderboard />}>
						<Route index element={<List />} />
						<Route path=":topmap" element={<List />} />
					</Route>
					{/*
					<Route path="/challenge/:uniqId" element={} />
					*/}
					<Route path="*" element={<Four04 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
