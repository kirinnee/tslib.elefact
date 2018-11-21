import {IPage} from "./Helper";

let pages :IPage = {
	chunks: [
		["index", "./test/e2e/index.ts"],
		["special", "./test/e2e/special.ts"]
	],
	pages: [
		{
			template: "index.html",
			output: "index.html",
			chunks: ['index'],
			title: 'Index'
		},
		{
			template: "index.html",
			output: "special.html",
			chunks: ['special'],
			title: 'Special Element Test'
		}
	],
};

export {pages};