import {DOMEx} from "@kirinnee/domex";
import {ElementData, ElementFactory} from "../index";

class EleFact implements ElementFactory {
	
	private $: Document = document;
	private namespace: string;
	
	constructor(domex: DOMEx, namespace: string) {
		domex.AssertExtend();
		this.namespace = namespace;
	}
	
	get Namespace(): string {
		return this.namespace;
	}
	
	CreateSpecialElement(src: string, absolute: boolean = true, data: ElementData = {}): Element {
		if (data.id == null) throw new Error("ID cannot be null for special element");
		let val: string = absolute ? 'absolute' : 'relative';
		let parent = this.ELE("div", data).Style('position', val);
		let filter: { ele: Element, id: string } = this.createFilter(data.id);
		let svgParent = this.xml('svg')
			.Attr('xmlns', "http://www.w3.org/2000/svg")
			.Attr('xmlns:xlink', 'http://www.w3.org/1999/xlink');
		let image = this.xml('image')
			.Attr('width', '100%')
			.Attr('height', '100%');
		
		parent
			.Attr('elefact-special-element-filter', filter.id);
		
		svgParent
			.Style("position", "absolute")
			.Style("width", "100%")
			.Style("height", "100%")
			.Style("top", "0")
			.Style("left", "0")
			.Style("overflow:visible");
		
		image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', src);
		image.Attr('filter', `url(#${filter.id})`)
			.Attr('preserveAspectRatio', 'none');
		parent.Append([svgParent, filter.ele]);
		svgParent.Append(image);
		return parent;
	}
	
	DIV(data: ElementData = {}): Element {
		return this.ELE("div", data);
	}
	
	ELE(type: string, data: ElementData = {}): Element {
		let ele: Element = this.$.createElement(type);
		if (data.id != null) ele.Id(data.id);
		if (data.html != null) ele.innerHTML = data.html;
		if (data.cls != null) ele.AddClass(data.cls);
		return ele;
	}
	
	IMG(src: string, data: ElementData = {}): Element {
		let ret: Element = this.ELE("img", data);
		ret.Attr("src", src);
		return ret;
	}
	
	SPAN(data: ElementData = {}): Element {
		return this.ELE("span", data);
	}
	
	BR(): Element {
		return document.createElement('br');
	}
	
	private xml(type: string, data: ElementData = {}): SVGElement {
		let svg: SVGElement = document.createElementNS("http://www.w3.org/2000/svg", type);
		if (data.id != null) svg.Attr("id", data.id);
		if (data.cls != null) svg.AddClass(data.cls);
		return svg;
	}
	
	private createFilter(id: string): { ele: Element, id: string } {
		let parent = this.ELE("div");
		
		let namespace = this.namespace;
		
		let svgParent = this.xml('svg')
			.Attr("xmlns", "http://www.w3.org/2000/svg")
			.Attr("xmlns:xlink", "http://www.w3.org/1999/xlink");
		
		let filterID: string = id + namespace;
		
		let saturate: Element = this.xml("feColorMatrix", {cls: "saturate-filter"})
			.Attr('type', 'saturate')
			.Attr('values', '1');
		
		let hueRotate: Element = this.xml('feColorMatrix', {cls: 'hue-rotate-filter'})
			.Attr('type', 'hueRotate')
			.Attr('values', '0');
		let blur: Element = this.xml('feGaussianBlur').Attr('stdDeviation', '0');
		let sepia: Element = this.xml('feColorMatrix', {cls: 'sepia-filter'})
			.Attr('result', 'sepiaFilter')
			.Attr('type', 'matrix')
			.Attr('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
		let grayscale = this.xml('feColorMatrix', {cls: 'grayscale-filter'})
			.Attr('result', 'grayscaleFilter')
			.Attr('type', 'matrix')
			.Attr('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
		let contrast = this.xml('feComponentTransfer', {cls: 'contrast-filter'}).Attr('result', 'contrastFilter');
		/**/
		let cR = this.xml('feFuncR').Attr('type', 'linear').Attr('slope', '1').Attr('intercept', '0');
		/**/
		let cG = this.xml('feFuncG').Attr('type', 'linear').Attr('slope', '1').Attr('intercept', '0');
		/**/
		let cB = this.xml('feFuncB').Attr('type', 'linear').Attr('slope', '1').Attr('intercept', '0');
		contrast.Append([cR, cG, cB]);
		let brightness = this.xml('feComponentTransfer', {cls: 'brightness-filter'}).Attr('result', 'brightnessFilter');
		/**/
		let bR = this.xml('feFuncR').Attr('type', 'linear').Attr('slope', '1');
		/**/
		let bG = this.xml('feFuncG').Attr('type', 'linear').Attr('slope', '1');
		/**/
		let bB = this.xml('feFuncB').Attr('type', 'linear').Attr('slope', '1');
		brightness.Append([bR, bG, bB]);
		let negative = this.xml('feComponentTransfer', {cls: 'negative-filter'}).Attr('result', 'negativeFilter');
		/**/
		let R = this.xml('feFuncR').Attr('type', 'table').Attr('tableValues', '0 1');
		/**/
		let G = this.xml('feFuncG').Attr('type', 'table').Attr('tableValues', '0 1');
		/**/
		let B = this.xml('feFuncB').Attr('type', 'table').Attr('tableValues', '0 1');
		negative.Append([R, G, B]);
		let merge = this.xml('feMerge');
		/**/
		let m1 = this.xml('feMergeNode').Attr('in', 'sepiaFilter');
		/**/
		let m2 = this.xml('feMergeNode').Attr('in', 'grayscaleFilter');
		/**/
		let m3 = this.xml('feMergeNode').Attr('in', 'contrastFilter');
		/**/
		let m4 = this.xml('feMergeNode').Attr('in', 'brightnessFilter');
		/**/
		let m5 = this.xml('feMergeNode').Attr('in', 'negativeFilter');
		merge.Append([m1, m2, m3, m4, m5]);
		let filter = this.xml('filter', {id: filterID});
		filter.Append([saturate, hueRotate, blur, sepia, grayscale, brightness, contrast, negative, merge]);
		parent.Append(svgParent);
		svgParent.Append(filter);
		return {
			ele: parent,
			id: filterID
		}
	}
	
}


export {EleFact};