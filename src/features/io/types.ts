import { logColor } from "./constants";

export type TLogColor = keyof Omit<typeof logColor, "reset">;
