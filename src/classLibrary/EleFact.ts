import {DOMEx} from "@kirinnee/domex";
import {ElementData, ElementFactory} from "../index";

class EleFact implements ElementFactory {
	
	private $: Document = document;
	
	constructor(domex: DOMEx) {
		domex.AssertExtend();
	}
	
	CreateSpecialElement(src: string, data: ElementData = {}): HTMLElement {
		throw new Error("Not Implemented");
	}
	
	DIV(data: ElementData = {}): HTMLElement {
		return this.ELE("div", data);
	}
	
	ELE(type: string, data: ElementData = {}): HTMLElement {
		let ele: HTMLElement = this.$.createElement(type);
		if (data.id != null) ele.Id(data.id);
		if (data.html != null) ele.innerHTML = data.html;
		if (data.cls != null) ele.AddClass(data.cls);
		return ele;
	}
	
	IMG(src: string, data: ElementData = {}): HTMLElement {
		throw new Error("Not Implemented");
	}
	
	SPAN(data: ElementData = {}): HTMLElement {
		throw new Error("Not Implemented");
	}
	
	
}


export {EleFact};