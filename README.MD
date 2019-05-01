# EleFact

HTMLElement Factory - simple, lightweight and easy way to create HTMLElement

Source: [GitLab](https://gitlab.com/node-packages-kirin/element-factory)

Mirror: [GitHub](https://github.com/kirinnee/tslib.elefact)

# Getting Started

Install via NPM 
```powershell
$ npm i @kirinnee/elefact
```

or 

Install via Yarn
```powershell
$ yarn add @kirinnee/elefact --prefer-offline
```

Using in browser

Attach scripts in `dist/` folder
```html
<script src="./dist/@kirinnee/elefact.min.js"></script>
```

# Usage

## Dependency/ Dependency Injection

We use a constructor injection pattern to maintain decoupled code. The 
following dependency is needed:

- [@kirinnee/core](https://www.npmjs.com/package/@kirinnee/core) 
- [@kirinnee/domex](https://www.npmjs.com/package/@kirinnee/domex)

To ensure it works crossbrowser, please use [DOM4](https://www.npmjs.com/package/dom4) 
and [Babel](https://www.npmjs.com/package/@babel/polyfill) polyfill.


#### Constructing the Element Factory

```typescript
//Construct dependencies to prepare for dependecy injectkon
let core : Core = new Kore();
core.ExtendPrimitives();
let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();
//Construct the factory
let eFact: ElemetFactory = new EleFact(domex, "any-unique-namespace");
```
#### Use Factory to Construct Element
```typescript
//Create DIV
let div = eFact.DIV({id:"id",cls:["some-class"]});
//Create SPAN
let span = eFact.SPAN({id:"id",cls:["some-class"]});
//Create IMG
let img = eFact.IMG("https://path/to/img.png",{id:"id",cls:["some-class"]});
//Create ELE
let ele = eFact.ELE("tagName",{id:"id",cls:["some-class"]});
```
## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.MD) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning 
We use [SemVer](https://semver.org/) for versioning. For the versions available, see the tags on this repository.

## Authors
* [kirinnee](mailto:kirinnee@gmail.com) 

## License
This project is licensed under MIT - see the [LICENSE.md](LICENSE.MD) file for details