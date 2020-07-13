# Bigo
Mustache based templates boilerplater and easy generator for server-rendered websites and applications.

## Dependencies
- Mustache.js
- Express.js
- Typescript

## Install and use
### Install
Get Bigo CLI via npm with the following command:
```bash
npm install -g bigojs
```

### Start a project
To start a new Bigo project with a default autogenerated application, `blank` or `landing`, run the following command:
```bash
bigo start myName --type landing
```

This will generate an Express application with a Bigo skeleton in a diretory `\myName`.

### Run
The Bigo CLI includes a `run` command that ultimately runs the main file in the `package.json` with [ts-node](https://www.npmjs.com/package/ts-node). 
```bash
bigo run
```
The project created is a Typescript Express aplication, so there are multiple ways of running the application.

## Generate
```bash
bigo generate myComponent
```
This will create the following files:
```
.
|- myComponent
|  |- myComponent.ts
|  |- myComponent.html
```