import {Core, Kore} from "@kirinnee/core";
import {DOMEx, DOMExtend} from "@kirinnee/domex";
import {EleFact, ElementFactory} from "../../src";

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let eleFact: ElementFactory = new EleFact(domex, "kirin-namespace");

let $ = (id: string): HTMLElement => document.getElementById(id) as HTMLElement;

$("test-1").Click(() => {
	let specialElement = eleFact
		.CreateSpecialElement("https://s3-ap-southeast-1.amazonaws.com/kirin.static.host/test/book.png", false, {id: "help"})
		.Style("width", "50vw")
		.Style("height", "50vw");
	$("test-target").Append(specialElement);
});