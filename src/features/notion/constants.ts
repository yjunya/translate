import { Client } from "@notionhq/client";
import { NOTION_KEY } from "../../entity/common";

export const notion = new Client({ auth: NOTION_KEY });
