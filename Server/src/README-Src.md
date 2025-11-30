## File Structure
```text
Benefit of seperating app and server
1. run the app in different environments
  •	A dev server
	•	A prod server with clustering
	•	A serverless deployment
	•	Tests without starting the actual server
2. Testing becomes much easier
3. Cleaner project structure
	•	app.ts stays purely about Express logic.
	•	server.ts stays purely about runtime logic.
4. Makes the code deployable anywhereWhen frameworks like:
	•	Vercel
	•	AWS Lambda
	•	Cloudflare Workers
run your app, they need your Express instance, not your server. So they import your app and integrate it into their own environment.
This only works cleanly when app.ts is separate.
```
```markdown

- project
  - src
    - app.ts                  - This is where you build the Express app - define middleware, set up routes, attach error handlers, configure JSON parsing, CORS, etc.It does not start a server. It only produces a configured Express instance.
    - server.ts               - This file imports the Express app and then: picks a port, starts listening, handles server-level events (shutdown, errors, logs)
    - controllers             (LOGIC LAYER) - handle API endpoints (req/res)
      -   controller.ts       - These functions handle the actual work: reading, updating, creating and deleting
          - eg: user.controller.ts
          - eg: product.controller.ts
          - eg: order.controller.ts
    - models                  (SCHEMA/DATABASE LAYER) - define DB schemas or data structures. A model describes one entity, even if your database holds many.
      -  model.ts             - we plug in MongoDB/Postgres or for temporary database use an array
          - eg: user.model.ts
          - eg: product.model.ts
          - eg: order.model.ts
    -  routes                 (ROUTING/API ROUTE LAYER) - define the actual Express routes.
      -  route.ts             - Create Routes (organizing endpoints)
          - eg: user.route.ts
          - eg: product.route.ts
          - eg: order.route.ts
    -  types                  (TypeScript interfaces & custom types)
      -  type.ts              - This acts like a “shape” of the data, telling TypeScript what a Todo looks like. You can use Interface for writing the type of data in other folder or use "type" to define the type of variable used "inline" where it is initialised
          - eg: user.type.ts
          - eg: product.type.ts
          - eg: request.type.ts
          - eg: api.type.ts
    - utils
      - helpers.ts
      - constants.ts
    - components
      - Button.tsx
      - Modal.tsx
  - public
    - index.html
    - logo.png
  - README.md
  - package.json
```
