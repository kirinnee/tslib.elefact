import {EleFact} from "./classLibrary/EleFact";

interface ElementData {
	id?: string,
	cls?: string | string[],
	html?: string
}

interface ElementFactory {
	Namespace: string;
	
	DIV(data?: ElementData): Element;
	
	SPAN(data?: ElementData): Element;
	
	IMG(src: string, data?: ElementData): Element;
	
	ELE(type: string, data?: ElementData): Element;
	
	BR(): Element;
	
	CreateSpecialElement(src: string, absolute?: boolean, data?: ElementData): Element;
}

export {
	ElementData,
	ElementFactory,
	EleFact
}
