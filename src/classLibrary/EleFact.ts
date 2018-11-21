import {DOMEx} from "@kirinnee/domex";
import {ElementData, ElementFactory} from "../index";

class EleFact implements ElementFactory {
	
	//private $ : Document = document;
	
	constructor(domex: DOMEx) {
		domex.AssertExtend();
	}
	
	CreateSpecialElement(src: string, data: ElementData): HTMLElement {
		throw new Error("Not Implemented");
	}
	
	DIV(data: ElementData): HTMLElement {
		throw new Error("Not Implemented");
	}
	
	ELE(type: string, data: ElementData): HTMLElement {
		throw new Error("Not Implemented");
	}
	
	IMG(src: string, data: ElementData): HTMLElement {
		throw new Error("Not Implemented");
	}
	
	SPAN(data: ElementData): HTMLElement {
		throw new Error("Not Implemented");
	}
	
	
}


export {EleFact};