import {Selector} from 'testcafe';

import {should} from 'chai';

should();

fixture`Index Page`.page`./targets/index.html`;

test('Elements are properly generated', async t => {
	await t
		.click('#test-1');
	
	let divClass: boolean = await Selector("#ele1").hasClass("div-class");
	let divText: string = await Selector("#ele1").innerText;
	let spanClass: boolean = await Selector("#ele2").hasClass("span-class");
	let spanText: string = await Selector("#ele2").innerText;
	let imgSrc: string = await Selector("#ele3").getAttribute("src");
	let eleTag: string = await Selector("#ele4").tagName;
	
	divClass.should.be.true;
	spanClass.should.be.true;
	divText.trim().should.equal("some text 1");
	spanText.trim().should.equal("some text 2");
	imgSrc.trim().should.equal("https://s3-ap-southeast-1.amazonaws.com/kirin.static.host/test/book.png");
	eleTag.toLowerCase().should.equal("hr");
});