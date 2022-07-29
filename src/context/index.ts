import { createContext } from "react";
import { boardCtx, bodyCtx } from "../interfaces";

const BodyCtx = createContext<bodyCtx | {}>({});
const BoardCtx = createContext<boardCtx | {}>({});

export { BodyCtx, BoardCtx };
