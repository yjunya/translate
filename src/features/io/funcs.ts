import { createInterface } from "readline";
import { logColor } from "./constants";
import { TLogColor } from "./types";

export const color = (str: string, color: TLogColor): string => {
  return logColor[color] + str + logColor.reset;
};

export const br = (): void => {
  console.log();
};

export const sep = (sep: "-" | "="): void => {
  console.log(sep.repeat(process.stdout.columns));
};

export const prompt = async (msg: string): Promise<string> => {
  console.log(msg);
  const ans = await question("> ");
  return ans;
};

const question = (query: string): Promise<string> => {
  const readlineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(query, (answer) => {
      resolve(answer.trim());
      readlineInterface.close();
    });
  });
};
