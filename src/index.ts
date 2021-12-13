import { br, color, prompt, sep } from "./features/io";
import { getMeaning } from "./features/weblio";
import { writeNotion } from "./features/notion";

const main = async () => {
  br();
  while (true) {
    const query = await prompt(
      "検索ワードを入力してください(" + color("ctrl+C", "red") + " で終了)"
    );
    br();
    const words = query.split(/\s+/);
    if (!query) {
      console.log(color("不正なクエリです．", "red"));
      continue;
    }
    const meaning = await getMeaning(words.join("+"));
    if (!meaning) {
      console.log(color(`${query} は見つかりませんでした．`, "red"));
      continue;
    }

    sep("=");
    console.log("クエリ\n\t" + color(query, "magenta"));
    sep("-");
    console.log("結果\n\n\t" + color(meaning, "cyan") + "\n");
    sep("=");
    br();

    while (true) {
      const yn = await prompt("notionに保存しますか？(y/n)");
      if (yn === "y") {
        await writeNotion(query, meaning);
        break;
      } else if (yn === "n") {
        br();
        break;
      }
    }
  }
};

void main();
