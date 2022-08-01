// Styling variables

const vars = {
	titan: "'Titan One', cursive",
	flower: "'Indie Flower', cursive",
	zeu: "'Zilla Slab', serif",

	white: "#f1f3f5",
	whiteOp35: "rgba(255, 255, 255, 0.35)",
	grey: "#a0a0a0",
	black: "#000",
	blackOp80: "rgba( 0, 0, 0, 0.80 )",
	
	emerald: "#008264",
	darkEmerald: "#005158",
};

// Styling mixins

const flex = (
	direction?: string,
	justify?: string,
	align?: string,
	wrap?: string
) => `
	display: flex;
	flex-direction: ${direction || "row"};
	justify-content: ${justify || "center"};
	align-items: ${align || "center"};
	flex-wrap: ${wrap || "nowrap"};
`;

const box = (width: string, height?: string) => `
	box-sizing: border-box;
	width: ${width};
	height: ${height || width};
`;

const shadow = (type: "text" | "box", color: string) => `
	${type}-shadow: ${color} 0px 5px 15px;
`;

const media = (
	scale: number,
	prop: "padding" | "border-radius" | "font-size"
) => `
	${prop}: ${scale * 1}rem;

	@media (max-width: 350px) {
		${prop}: ${scale * 0.25}rem;
	}

	@media (max-width: 600px) {
		${prop}: ${scale * 0.5}rem;
	}

	@media (max-width: 900px) {
		${prop}: ${scale * 1}rem;
	}

	@media (max-width: 1200px) {
		${prop}: ${scale * 2}rem;
	}
`;

const text = (type: string, sz?: number, col?: string, wt?: number) => `
	font-family: ${`var( --${type} )` || "serif"};
	font-size: ${sz || "1"}rem;
	color: ${col || "#000"};
	font-weight: ${wt || 500};
`;

export { vars, flex, box, shadow, media, text };
