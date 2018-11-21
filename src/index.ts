import {EleFact} from "./classLibrary/EleFact";

interface ElementData {
	id?: string,
	cls?: string | string[],
	html?: string
}

interface ElementFactory {
	DIV(data: ElementData): HTMLElement;
	
	SPAN(data: ElementData): HTMLElement;
	
	IMG(src: string, data: ElementData): HTMLElement;
	
	ELE(type: string, data: ElementData): HTMLElement;
	
	CreateSpecialElement(src: string, data: ElementData): HTMLElement;
}

export {
	ElementData,
	ElementFactory,
	EleFact
}
