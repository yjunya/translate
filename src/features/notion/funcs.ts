import { br, color } from "../io";
import { notion } from "./constants";
import { NOTION_DATABASE_ID } from "../../entity/common";

export const writeNotion = async (
  word: string,
  meaning: string
): Promise<void> => {
  console.log("notionに書き込み中...");
  try {
    const res = await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        word: {
          type: "title",
          title: [
            {
              type: "text",
              text: { content: word },
              annotations: { bold: true },
            },
          ],
        },
        meaning: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: meaning },
              annotations: { bold: true },
            },
          ],
        },
      },
    });
    console.log(color("完了", "green"));
  } catch (error) {
    console.error(error);
    console.log("\n" + color("エラーが発生したため終了します．", "red"));
    return;
  } finally {
    br();
  }
};
