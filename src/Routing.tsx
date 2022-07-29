import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
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
					{/*
					<Route index element={} />
					<Route path="/challenge/:uniqId" element={} />
					<Route path="/leaderboard" element={}>
						<Route path="/:uniqId" element={} />
					</Route>
					<Route path="*" element={} />
				*/}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
