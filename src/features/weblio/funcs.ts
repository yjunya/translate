import xml from "libxmljs";
import { api } from "./constants";

const translate = async (query: string): Promise<string> => {
  const { data } = await api.get("content/" + query);
  return data;
};

export const getMeaning = async (
  query: string
): Promise<string | undefined> => {
  const data = await translate(query);
  const xmlDoc = xml.parseHtmlString(data);
  const meaning = xmlDoc
    .get('//*[@id="summary"]/div[2]/table/tbody/tr/td[2]')
    ?.text();
  return meaning;
};
