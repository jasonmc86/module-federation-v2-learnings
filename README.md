# Module Fed v2 Example
This project is a React application show casing module federation v2 built with Rsbuild. It includes a setup for unit testing using Vitest and React Testing Library.

It has a simple setup of a button that is shared between the host and remote application.

Hot module replacement is enabled for both the host and remote application. And works if you change the producer, you see the module update without refreshing in the host (consumer)

Vitest is also setup to run tests, showing the producer rendering correctly in the consumer app.

## Getting Started
To get started, clone the repository and run the following commands:

Within both the `producer` and `consumer` directories, run the following commands:
```bash
pnpm install
pnpm dev
```
to start the development server's.

------------------------------------

To run the tests, run the following command in the `consumer` directory:
```bash
pnpm test
```