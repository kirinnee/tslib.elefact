import {should} from 'chai';
import {DOMEx, DOMExtend} from "@kirinnee/domex";
import {Core, Kore} from "@kirinnee/core";
import {EleFact, ElementFactory} from "../../src";

should();

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let eleFact: ElementFactory = new EleFact(domex);

describe("EleFact", () => {
	describe("ELE", () => {
		
		it("should create ELE with correct Tag", () => {
			let ele1: HTMLElement = eleFact.ELE("img");
			let ele2: HTMLElement = eleFact.ELE("picture");
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
	
});