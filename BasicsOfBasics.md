1. JavaScript
```text
The language itself.
Runs wherever there is a JavaScript runtime.
Typically runs on browser as is it designed for it.
```
2. Node.js
```text
A runtime that allows JavaScript to run outside the browser.

Because Node exists, you can use JS for:
	•	backend servers
	•	scripts
	•	tooling
	•	automation
```
3. npm
```text
A package manager bundled with Node.
It installs libraries and tools written in JavaScript.

Examples it installs:
	•	TypeScript (tsc)
	•	Vite
	•	React
	•	Express
	•	Prisma
	•	ESLint
	•	And thousands more

npm does not “run” JavaScript — it only installs and manages packages.
```
4. Tools that transform or prepare JavaScript
```text
These tools process your code before it runs.

Examples:

TypeScript (tsc)
	•	Converts .ts → .js
	•	Adds type checking
	•	Not a runtime — a compiler.

Vite
	•	A development/build tool mostly for frontend.
	•	It:
	•	bundles your code
	•	serves it fast in dev
	•	optimizes it for production
	•	Uses Node internally, but is focused on frontend projects.

Webpack / Rollup / esbuild

Other bundlers/compilers.

These tools exist because browsers don’t understand:
	•	TypeScript
	•	JSX
	•	modern module formats (until recently)
	•	advanced optimizations

So tools convert everything to plain browser-friendly JavaScript.
```

5. Frameworks/Libraries like React
```text
React is:

✔ A JavaScript UI library
✔ Not a runtime
✔ Not a compiler
✔ Not a build tool

React is just JavaScript code that helps you build UI.

But React needs a build tool (like Vite) because:
	•	React uses JSX → not understood by browsers
	•	JSX must be transformed into JS:
```
```jsx <h1>Hello</h1>```  ->  ```js React.createElement("h1", null, "Hello") ```
```text 
    So React works with a tooling layer to prepare the code.
```

6. Putting everything together
```text
Imagine a React + TypeScript project:

Step-by-step:
	1.	You write:
	    •	TypeScript
	    •	JSX
	2.	Vite transforms:
	    •	.tsx → JavaScript
    	•	JSX → React code
    	•	Bundles modules
    	•	Runs dev server
	3.	Browser receives:
    	•	final plain JavaScript
    	•	HTML
    	•	CSS
	4.	React runs in the browser, manipulating the UI.

```

7. So how do they relate?
```markdown
| ---------------- | ----------------- | ------------------------------------ |
|   Thing          |     What it is    |       What it does                   |
| ---------------- | ----------------- | ------------------------------------ |
| JavaScript       | language          | logic & syntax                       | 
| Node.js          | runtime           | executes JS outside browser          | 
| npm              | package manager   | installs libraries & tools           | 
| TypeScript (tsc) | compiler          | converts TS → JS                     | 
| Vite             | build tool        | transforms, bundles, serves frontend | 
| React            | UI library        | builds interactive UI                |
| ---------------- | ----------------- | ------------------------------------ |
```

