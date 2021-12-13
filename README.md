# translate

## 概要

英単語を入力すると weblio で翻訳，notion に保存する CLI．

## 環境

```
node v15.11.0
```

## 使い方

### env

`.env`に notion の secret key と database id が必要．

### notion db のスキーマ

```
word: {
	type: "title",
	title: [
	{
		type: "text",
	},
	],
},
meaning: {
	type: "rich_text",
	rich_text: [
		{
		type: "text",
		},
	],
}
```
