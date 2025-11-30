# Type-Script
Basics of TypeScript

[Basics of basics](https://github.com/Mohammad016/Type-Script/blob/main/Server/BasicsOfBasics.md#basics)
2 ways of creating a server:
```text
1. Pure Node.js (without using Express):							2. Creating a server with Express
		Node gives you a built-in module called http.						Express uses Node’s http module behind the scenes.
		Using this, you manually:											But gives you:
			•	Create a server														•	Simpler routing
			•	Listen on a port													•	Automatically parsed body (via middleware)
			•	Inspect URLs														•	Cleaner structure
			•	Inspect methods (GET, POST, etc.)									•	Middlewares
			•	Parse request body yourself											•	Easy error handling
			•	Handle routing logic manually										•	Easy response helpers (res.json(), res.send() etc.)
			•	Set headers manually												•	Router separation into files
			•	Handle errors manually												•	Built-in utilities

Node.js http = the engine
Express = the full car built on top of that engine
```
## commonJs
Imports
```javacript
const express = require("express");
const app = require("./app");
```
Exports
```javacript
module.exports = app;
```
By Default node knows "CommonJs" so it has no problem in understanding it,
but the same is not true in case of ESM(EcmaScript Module), which are standardized JavaScript modules system using import and export statements

## ESM
Imports
```javacript
import express from "express";
import app from "./app.js";  // extension required
```
Exports
```javacript
export default app;
```
To use it make some changes
```text
  . use .mjs file extension: Files with .mjs extension are explicitly treated as ES modules.
  . set "type": "module" in package.json. This designates all .js files in that package as ES modules.
```

Node grew up on CommonJS, so when your directory files uses CommonJS, Node relaxes.
ESM stresses Node because it forces it to abandon its mother tongue (Nativity).

In CommonJS mode, Node knows exactly how to:

	•	locate files without extensions
	•	interpret imports
	•	build dependency graphs
	•	connect modules
	•	resolve paths

Everything becomes smooth and natural.

# TypeScript - The Translator
**Node cannot understand TypeScript.
It only understands pure JavaScript.**

So TypeScript does the job of a language translator.

Whenever you run:
```javascript
ts-node-dev src/server.ts
```
Here’s what happens:

### Step A — Translator wakes up
  ```text
  TypeScript reads your .ts file.
  ```
### Step B — Translator removes the “fancy things”
  ```text
  It removes:
  	•	type annotations
  	•	interfaces
  	•	generics
  	•	decorators
(Things Node cannot read.)
```

### Step C — Translator converts it into regular .js
  ```text
  Now the file becomes something Node can naturally understand.
  ```

### Step D — ts-node-dev gives it to Node immediately
  ```text
  Even though there’s no physical .js file created, ts-node-dev hands the converted code directly to the Node governor.
  ```

This is like:

“Node, I have a translated version. You can process this.”

Node never sees TypeScript — only JavaScript.

```text
Addition of these in devDependencies of package.json "@types/node", "@types/express","@types/cors"

"@types/nodes" These are TypeScript type definitions for Node.js.
      •	Node exposes many objects (like process, __dirname, setTimeout, fs, etc.).
      •	TypeScript doesn’t magically know their types — this package teaches TypeScript about them.
similarly
"@types/express" - Type definitions for Express.js.
      Without it, TypeScript doesn’t know:
    	•	what Request or Response types are
    	•	what req.body, req.params, req.query contain
    	•	what app.get(), app.post() look like
    This package lets TypeScript type-check your Express code properly.
```

## Interpretations of commands in Terminal:
### command-1  - Install TypeScript Compiler
```bash
npm install -D typescript ts-node-dev @types/node @types/express
```
```text
npm - This is the Node Package Manager, used to install and manage dependencies for your project.

install - This tells npm to add packages to your project.

-D - This flag means save these packages as devDependencies.These tools are needed only while developing (not in production).

typescript - This installs the TypeScript compiler (tsc).
            It gives you:
            	•	Ability to write .ts files
            	•	Ability to compile TypeScript → JavaScript
            	•	A type-checker for your code

ts-node-dev - A development tool that:
            	•	Runs TypeScript directly (without manually compiling)
            	•	Automatically restarts the server when you save a file
            	•	Speeds up development
            
            Think of it as:
            nodemon + ts-node combined for TypeScript projects.
```
```text
Together the command means:

“Install TypeScript, the TypeScript development server, and the necessary type definitions for Node and Express — and save them as dev-only tools.”

```

### command-2
```bash
npm install -D typescript
//without ts-node-dev and @type/node all other types
```
```text
•	You’ll install just the TypeScript compiler (tsc).
• You will NOT be able to run TypeScript files directly (without ts-node-dev which is like a nodemon + ts-node
      You need to everthing manually
        1. Compile                          - npx tsc                  - This converts .ts → .js.
        2. Run                              - node dist/index.js       - 
        3. No auto-restart on file changes  - There is no reload, no watcher, no hot-restart. so you have to run above commands again
•	No type definitions for Node or Express - then your typescript editor shows errors that is unable to find the names, modules, params,etc
```

### command-3 - creation of tsconfig.json  (You cannot properly use TypeScript in a real project without this file.)
```bash
npx tsc --init
```
```text
npx - This runs a package without installing it globally.
tsc - This is the TypeScript compiler command.
      Normally it:
      •	Compiles .ts → .js
      •	Reads your tsconfig.json to know how to compile
      But here you’re not compiling yet — you’re using a special flag.

you’re telling Node:
“Use the TypeScript compiler that exists in my project’s node_modules folder.” This way, you don’t need a global install of TypeScript.

--init - This tells TypeScript: “Create a default tsconfig.json file for me.”
```
```text
tsconfig.json is the heart of every TypeScript project.
It controls:
	•	Target JavaScript version
	•	Module system (CommonJS, ES Modules, etc.)
	•	Included/excluded folders
	•	How strict the type checker should be
	•	Whether output goes to /dist
	•	JSX settings
	•	Path aliases
```
## File Structure and the usage of each folder

### File Structure of the Server [File Structure](https://github.com/Mohammad016/Type-Script/edit/main/src/README-Src.md#file-structure)


## How request is handled
```text
•	Request recieved by the server.ts which listens to the incoming requests using app
•	Request then passes through the middleware in the app.ts where you have route definers, error handlers and authentications
•	The request after passing through auths gets mapped to the defined routes through mapping of router's files
•	The router files redirect the requesr to the actual code handler "controller" where every route's logic is defined
•	After execution the response is sent back to client
```

## Request error from POSTMAN/Client
```text
1. Check your app.ts
	•	first express must be used by app and only then router can be used by app, because the router's request/response that you are using typically belong to the express module and if you use the router before express it will throw an error
2. Check your Postman/client request
	•	Make sure you are doing POST or PUT when sending data to server not GET, and make sure the format is BODY -> RAW -> JSON because GET is used to fetch data and mostly dont have use of the request body (might only use request params atmost) and if we use • form-data • x-www-form-urlencoded • text then req.body becomes empty.
3. Check your controller destructuring
	•	if you use somthing like this `const { title } = req.body;` and req.body is undefined then it will crash
		so place a console.log(req.body);
	•	If you see {}, it means: middleware issue 		-> This means Express parsed the request successfully (It did not crash and did not skip the controller) but it found nothing to parse from the incoming request. It check only for JSON saying ("I tried finding JSON but couldn't") even though other formats maybe used
	•	If you see nothing logged: route path is wrong	-> Obviously no path is defined in routes file (routes.ts) then it won't ever trigger the line
4. Check your route properly and also for any nested routes
```
## Use Of VITE
```text
Vite is a frontend build tool + dev server specifically made for frameworks like:
	•	React
	•	Vue
	•	Svelte
	•	Vanilla JS + TS

Nodemon restarts the Node server when files change.

But the frontend is different:
	•	When you change a React component, you don’t want the entire server to restart.
	•	You want just the changed component to reload — instantly.
Vite provides HMR (Hot Module Replacement)
```
### Bundling
```text
Your React code:
	•	uses JSX
	•	uses TypeScript
	•	imports many files
	•	imports CSS internally
	•	imports images
	•	uses ES modules
	•	many modern module formats
	•	imports like import React from "react"

The browser cannot understand most of that.
It needs:
	•	pure JavaScript
	•	no JSX
	•	no TypeScript
	•	no Node-style imports
	•	one or few bundle files
	•	optimized, compressed output
Bundlers convert all this into browser-ready JavaScript.

Vite does two jobs:
------------------
(A) Dev server (instant, unbundled)
		Vite uses ES modules directly; no full bundling, so it’s fast.
(B) Production bundler (via Rollup)
		When you run vite build:
			•	your React code becomes optimized JS/CSS
			•	unused code is removed
			•	large JS chunks are split
			•	the output becomes ultra-fast for deployment

Webpack is powerful but slow:									Vite changes the entire dev experience:
	•	Bundles everything on startup								•	NO bundling at startup
	•	Rebuilds large chunks on every change						•	Instant server start
	•	Slow HMR													•	Instant HMR
																	•	Uses browser’s native ES modules
																	•	Uses super-fast ESBuild internally
Relationship:
	•	Node gives the environment						•	runs backend code  •	uses CommonJS/ESM  •	NO JSX, TS, bundling, CSS handling, or HMR
	•	Vite gives the dev server + bundler 			•	compiles your frontend  •	serves it blazing fast during development  •	bundles & optimizes it for production
```

# Working with FrontEnd

## Commands Used:
```text
cd ... 			-> Going back to project folder
mkdir client	-> Creating a client folder to keep is seperated from Server (Has number of benefits)
cd client		-> change the directory to client and install Vite and react in this

npm create vite@latest		-> creates an entire project structure (done by vite)
This command didn't work because I have node v-18 installed in my computer and the latest vite version is v-7 which is incompatible with node v-18
which is no longer supported by Vite 7 (Node 18 reached end-of-life in April 2025).
so You have 2 options
•	Install latest node version (20 or 22) and rerun the "npm create vite@latest" which works with vite v-7
•	Install a past version of vite like v-6 or v-5 which is compatible with node v-18 using command "npm create vite@6"

Choose:
	•	Project name: client
	•	Framework: React
	•	Variant: TypeScript

Then install dependencies:
		cd client	
		npm install		-> Since you have selected REACT when creating a vite (a frontend tool) project using npm, now you need to simply install the dependencies of react along with them to work with it in your vite project

```
folder structure provided by vite (+React plugin):
```text
my-app/
 ├─ node_modules/			- All downloaded packages live here. You never touch or edit it.
 ├─ public/					- static files served as-is 				•	Files in here do not go through bundling - Anything inside public becomes available at the root URL: eg: http://localhost:5173/xyz.png (if vite running on port 5173 and public has xyz.png image)
 ├─ src/					- The HEART of REACT app 					•	Everything your react app actually runs lives here.
 │   ├─ assets/				- A place for images, logos, fonts or any static files you import inside components.
 │   ├─ App.jsx				- first REACT component, 					•	You build your entire UI by connecting, splittting, and nesting more components from here
 │   ├─ main.jsx			- true entry point of your application 		•	Initializes REACT, connects REACT to the HTML page, Renders <APP /> into DOME		"Start React. Show App on the screen"
 │   └─ index.css			- Your global stylesheet					•	You can remove it if using Tailwind or another CSS setup
 ├─ .gitignore
 ├─ index.html				- This is the actual html rendered on browser. It contains only the essentials: React injects everything into the #root div by using the main.jsx (which is the script file that returns html that needs to be inserted in the index.html main html file) 
 ├─ package.json			- Dependencies + scripts					•	Contains: app name, dependencies (react, react-dom), devDependencies (vite, plugin-react), scripts
 ├─ vite.config.js			- BRAIN of vite 							•	Controls: plugins, path aliases, server config, build settings	You mostly touch this when adding features like: alias paths, environment variables, optimizations, SSR
 └─ README.md
```
Choosing of files to be placed in public or assets:
```text
•	If React imports it → put it in assets.						Files go through Vite’s pipeline. Optimized, hashed, compressed, and imported into components.
•	If the browser needs it directly → put it in public.		Files stay exactly as they are. No bundling, no optimization, no hashing.


PUBLIC  (UNPROCESSED STORAGE ROOM)
		- A static file is NOT imported inside JavaScript/React code.				examples:
		- Behavior : 	•	Not processed by Vite											•	Large videos/images shown via URL instead of importing
						•	Not optimized													•	Third-party scripts or libraries
						•	Not renamed/hashes												•	files you simply want to "place on the server"
						•	Accessible directly by URL										•	favicon.ico (A favicon.ico is a file containing a small icon that appears next to a website's name in a browser tab, a bookmark, or the address bar. It's used to help users identify a site and enforce brand consistency, and while the .ico format is common, other formats like PNG are also supported. )


ASSETS ()
		- A static file is imported or used inside code.							examples:
		- Behavior: 	•	Bundled by Vite													•	Bundled by Vite
						•	Optimized (compressed, resized if possible)						•	Optimized (compressed, resized if possible)
						•	Hashed filenames (logo.8d2ba.png)								•	Hashed filenames (logo.8d2ba.png)
						•	Included only if used → reduces bundle							•	Included only if used → reduces bundle
						•	Can be imported in code, styles, components						•	Can be imported in code, styles, components
```
