import {should} from 'chai';
import {DOMEx, DOMExtend} from "@kirinnee/domex";
import {Core, Kore} from "@kirinnee/core";
import {EleFact, ElementFactory} from "../../src";

should();

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let eleFact: ElementFactory = new EleFact(domex, "super-secret");

describe("EleFact", () => {
	
	describe("Namespace", () => {
		it("should return namespace", () => {
			eleFact.Namespace.should.equal("super-secret");
		});
	});
	
	describe("ELE", () => {
		
		it("should create ELE with correct Tag", () => {
			let ele1: Element = eleFact.ELE("img");
			let ele2: Element = eleFact.ELE("picture");
			ele1.tagName.toLowerCase().should.deep.equal("img");
			ele2.tagName.toLowerCase().should.deep.equal("picture");
		});
		
		it("should properly assign ID", () => {
			let eleClean = eleFact.ELE("div", {id: "id-1"});
			let eleClass = eleFact.ELE("div", {id: "id-2", cls: "blue"});
			let eleHTML = eleFact.ELE("div", {id: "id-3", html: "some text"});
			eleClean.getAttribute("id")!.should.deep.equal('id-1');
			eleClass.getAttribute("id")!.should.deep.equal('id-2');
			eleHTML.getAttribute("id")!.should.deep.equal('id-3');
		});
		
		it("should properly assign class", () => {
			let assignSingle = eleFact.ELE("div", {cls: "blue"});
			let assignMany = eleFact.ELE("div", {cls: ["blue", "green", "red"]});
			
			assignSingle.classList.contains("blue").should.be.true;
			assignSingle.classList.contains("green").should.be.false;
			assignSingle.classList.contains("red").should.be.false;
			assignMany.classList.contains("blue").should.be.true;
			assignMany.classList.contains("green").should.be.true;
			assignMany.classList.contains("red").should.be.true;
		});
		
		it("should properly assign inner HTML", () => {
			let innerHTML = eleFact.ELE("div", {html: "some text"});
			let withID = eleFact.ELE("div", {html: "some text 2", id: "id-1"});
			let withClass = eleFact.ELE("div", {html: "some text 3", cls: "blue"});
			
			innerHTML.innerHTML.should.deep.equal("some text");
			withID.innerHTML.should.deep.equal("some text 2");
			withClass.innerHTML.should.deep.equal("some text 3");
		});
		
	});
	
	describe("DIV", () => {
		
		it("should return div Tag", () => {
			eleFact.DIV().tagName.should.equal("DIV");
		});
		
		it("should properly assign ID", () => {
			let eleClean = eleFact.DIV({id: "id-1"});
			let eleClass = eleFact.DIV({id: "id-2", cls: "blue"});
			let eleHTML = eleFact.DIV({id: "id-3", html: "some text"});
			eleClean.getAttribute("id")!.should.deep.equal('id-1');
			eleClass.getAttribute("id")!.should.deep.equal('id-2');
			eleHTML.getAttribute("id")!.should.deep.equal('id-3');
			
			eleClean.tagName.should.deep.equal('DIV');
			eleClass.tagName.should.deep.equal('DIV');
			eleHTML.tagName.should.deep.equal('DIV');
			
			
		});
		
		it("should properly assign class", () => {
			let assignSingle = eleFact.DIV({cls: "blue"});
			let assignMany = eleFact.DIV({cls: ["blue", "green", "red"]});
			
			assignSingle.classList.contains("blue").should.be.true;
			assignSingle.classList.contains("green").should.be.false;
			assignSingle.classList.contains("red").should.be.false;
			assignMany.classList.contains("blue").should.be.true;
			assignMany.classList.contains("green").should.be.true;
			assignMany.classList.contains("red").should.be.true;
			assignSingle.tagName.should.be.equal("DIV");
			assignMany.tagName.should.be.equal("DIV");
			
		});
		
		it("should properly assign inner HTML", () => {
			let innerHTML = eleFact.DIV({html: "some text"});
			let withID = eleFact.DIV({html: "some text 2", id: "id-1"});
			let withClass = eleFact.DIV({html: "some text 3", cls: "blue"});
			
			innerHTML.innerHTML.should.deep.equal("some text");
			withID.innerHTML.should.deep.equal("some text 2");
			withClass.innerHTML.should.deep.equal("some text 3");
			
			innerHTML.tagName.should.be.equal("DIV");
			withID.tagName.should.be.equal("DIV");
			withClass.tagName.should.be.equal("DIV");
			
		});
	});
	
	describe("SPAN", () => {
		it("should return span Tag", () => {
			eleFact.SPAN().tagName.should.equal("SPAN");
		});
		
		it("should properly assign ID", () => {
			let eleClean = eleFact.SPAN({id: "id-1"});
			let eleClass = eleFact.SPAN({id: "id-2", cls: "blue"});
			let eleHTML = eleFact.SPAN({id: "id-3", html: "some text"});
			eleClean.getAttribute("id")!.should.deep.equal('id-1');
			eleClass.getAttribute("id")!.should.deep.equal('id-2');
			eleHTML.getAttribute("id")!.should.deep.equal('id-3');
			
			eleClean.tagName.should.deep.equal('SPAN');
			eleClass.tagName.should.deep.equal('SPAN');
			eleHTML.tagName.should.deep.equal('SPAN');
			
			
		});
		
		it("should properly assign class", () => {
			let assignSingle = eleFact.SPAN({cls: "blue"});
			let assignMany = eleFact.SPAN({cls: ["blue", "green", "red"]});
			
			assignSingle.classList.contains("blue").should.be.true;
			assignSingle.classList.contains("green").should.be.false;
			assignSingle.classList.contains("red").should.be.false;
			assignMany.classList.contains("blue").should.be.true;
			assignMany.classList.contains("green").should.be.true;
			assignMany.classList.contains("red").should.be.true;
			assignSingle.tagName.should.be.equal("SPAN");
			assignMany.tagName.should.be.equal("SPAN");
			
		});
		
		it("should properly assign inner HTML", () => {
			let innerHTML = eleFact.SPAN({html: "some text"});
			let withID = eleFact.SPAN({html: "some text 2", id: "id-1"});
			let withClass = eleFact.SPAN({html: "some text 3", cls: "blue"});
			
			innerHTML.innerHTML.should.deep.equal("some text");
			withID.innerHTML.should.deep.equal("some text 2");
			withClass.innerHTML.should.deep.equal("some text 3");
			
			innerHTML.tagName.should.be.equal("SPAN");
			withID.tagName.should.be.equal("SPAN");
			withClass.tagName.should.be.equal("SPAN");
			
		});
	});
	
	describe("BR",()=>{
		it("should return BR element",()=>{
			eleFact.BR().tagName.should.deep.equal("BR");
		});
	});
	
	describe("IMG", () => {
		
		let src = "https://sophie.moe/images/under_def.png";
		it("should return img Tag", () => {
			eleFact.IMG(src).tagName.should.equal("IMG");
		});
		
		it("should properly assign ID", () => {
			let eleClean = eleFact.IMG(src, {id: "id-1"});
			let eleClass = eleFact.IMG(src, {id: "id-2", cls: "blue"});
			let eleHTML = eleFact.IMG(src, {id: "id-3", html: "some text"});
			eleClean.getAttribute("id")!.should.deep.equal('id-1');
			eleClass.getAttribute("id")!.should.deep.equal('id-2');
			eleHTML.getAttribute("id")!.should.deep.equal('id-3');
			
			eleClean.tagName.should.deep.equal('IMG');
			eleClass.tagName.should.deep.equal('IMG');
			eleHTML.tagName.should.deep.equal('IMG');
			
			eleClean.getAttribute("src")!.should.deep.equal("https://sophie.moe/images/under_def.png");
			eleClass.getAttribute("src")!.should.deep.equal("https://sophie.moe/images/under_def.png");
			eleHTML.getAttribute("src")!.should.deep.equal("https://sophie.moe/images/under_def.png");
		});
		
		it("should properly assign class", () => {
			let assignSingle = eleFact.IMG(src, {cls: "blue"});
			let assignMany = eleFact.IMG(src, {cls: ["blue", "green", "red"]});
			
			assignSingle.classList.contains("blue").should.be.true;
			assignSingle.classList.contains("green").should.be.false;
			assignSingle.classList.contains("red").should.be.false;
			assignMany.classList.contains("blue").should.be.true;
			assignMany.classList.contains("green").should.be.true;
			assignMany.classList.contains("red").should.be.true;
			assignSingle.tagName.should.be.equal("IMG");
			assignMany.tagName.should.be.equal("IMG");
			
			assignSingle.getAttribute("src")!.should.deep.equal("https://sophie.moe/images/under_def.png");
			assignMany.getAttribute("src")!.should.deep.equal("https://sophie.moe/images/under_def.png");
			
		});
		
		it("should properly assign inner HTML", () => {
			let innerHTML = eleFact.IMG(src, {html: "some text"});
			let withID = eleFact.IMG(src, {html: "some text 2", id: "id-1"});
			let withClass = eleFact.IMG(src, {html: "some text 3", cls: "blue"});
			
			innerHTML.innerHTML.should.deep.equal("some text");
			withID.innerHTML.should.deep.equal("some text 2");
			withClass.innerHTML.should.deep.equal("some text 3");
			
			innerHTML.tagName.should.be.equal("IMG");
			withID.tagName.should.be.equal("IMG");
			withClass.tagName.should.be.equal("IMG");
			
			innerHTML.getAttribute("src")!.should.deep.equal("https://sophie.moe/images/under_def.png");
			withID.getAttribute("src")!.should.deep.equal("https://sophie.moe/images/under_def.png");
			withClass.getAttribute("src")!.should.deep.equal("https://sophie.moe/images/under_def.png");
			
		});
	});
	
	
	describe("SpecialElement", () => {
		
		it("should throw error if no ID is supplied", () => {
			let x = () => eleFact.CreateSpecialElement("https://sophie.moe/images/under_def.png");
			x.should.throw("ID cannot be null for special element");
		});
		
		it("should create special element with correct data with absolute", () => {
			let withID: HTMLElement = eleFact.CreateSpecialElement("https://sophie.moe/images/under_def.png", true, {id: "hey"}) as HTMLElement;
			let withClass: HTMLElement = eleFact.CreateSpecialElement("https://sophie.moe/images/under_def.png", true, {
				id: "mega",
				cls: "yes"
			}) as HTMLElement;
			
			withID.getAttribute("id")!.should.equal("hey");
			withClass.classList.contains("yes").should.be.true;
			withID.style.position!.should.equal("absolute");
			withClass.style.position!.should.equal("absolute");
		});
		it("should create special element with correct data with relative", () => {
			let withID: HTMLElement = eleFact.CreateSpecialElement("https://sophie.moe/images/under_def.png", false, {id: "hey"}) as HTMLElement;
			let withClass: HTMLElement = eleFact.CreateSpecialElement("https://sophie.moe/images/under_def.png", false, {
				id: "mega",
				cls: "yes"
			}) as HTMLElement;
			
			withID.getAttribute("id")!.should.equal("hey");
			withClass.classList.contains("yes").should.be.true;
			withID.style.position!.should.equal("relative");
			withClass.style.position!.should.equal("relative");
		});
	});
	
});