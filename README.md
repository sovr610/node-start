# node-start
This is an easy to use, yet powerful template for a general starting point for development of a typescript node backend server. There is built in features for:

    - Linting (eslint)
    - testing (jest & supertest)
    - building (tsc)
    - optimizing (gulp & google closure compiler)
    - publish (nexe to make the server into an executable)

Everything is automated in this template! just `git clone`, run `npm install` and you are already got a head start!

# npm commands

    - `npm run test` -> runs the jest tests
    - `npm run lint` -> runs eslint with google standard style, it fixes issues also.
    - `npm run build` -> basic `npx tsc` to transpile the typescript into javascript files in `./dist`
    - `npm run concat` -> combines all javascript files (from `npm run build`) into one javascript file `./dist/combine/all.js`
    - `npm run compile:googleClosure` -> optimize and compile the javascript even more into js file: `./dist/compile/out.js`
    - `npm run compile:nexe` -> compile optimized javascript file to an `exe` file called `server.exe`
    - `npm run run:dev` -> runs the server after combined into one javascript file. Runs code at `npm run concat`
    - `npm run run:compile` -> runs the server after the google-closure-compiler has performed it's optimizations. Runs the `out.js` javascript file.
    - `npm run publish` -> Goes through section of linting, building, optimizing, then compiles the code into an executable file.

# Extras

    - with lint-staged and husky npm modules, every git commit you do, will lint the code for you automatically.
# Future goals

    * Adding jsdoc to work with typescript with documenting code automatically.
        - requires a lot of work and a few work arounds to keep the comments in once transpiled.
        - uses a lot of babel dependencies to get this to work.

    * Have an integrated cli to customize how you want the template to be setup.
        - jest/supertest or cypress?
        - TypeScript or JavaScript?
        - example `npx node-start create -c configuration.json` (or different arguments)

    * integrate possible assembly script? webassembly anyone?
        - assembly script is a typescript based language that compiles into webassembly, being much faster than javascript.

    * publish to npm registery so more people have access to the template/ soon maybe framework

    * json to api
        - have a config.server.json file to convert json data into endpoints in the server code.
        - just a thought, not sure how well this will do with complex endpoints.