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
	let div = eleFact.DIV({id: "ele1", cls: "div-class", html: "some text 1"});
	let span = eleFact.SPAN({id: "ele2", cls: "span-class", html: "some text 2"});
	let img = eleFact.IMG("https://s3-ap-southeast-1.amazonaws.com/kirin.static.host/test/book.png", {id: "ele3"});
	let ele = eleFact.ELE("hr", {id: "ele4"});
	let br = eleFact.BR();
	$("test-target").Append([div, br, span, img, ele]);
});