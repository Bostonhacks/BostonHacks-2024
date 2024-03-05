# BostonHacks-2024
Currently temporary, soon to be official 2024 Landing Site

# To run
1) Make sure Node is installed and put within your PATH so it can be called by your terminal
2) run `npm install` in the `/bostonhacks` directory. **Don't run it in the root directory or the dependencies won't install in the correct location**
3) Run `npm run dev` to start the local server
4) Go to your browser `http://localhost:3000`
5) Any changes will auto-update without needing to restart the server

# Important
- Push your changes to branches. No commits should be directly made to `main` (unless minor fix)
- Create a pull request for your branch to merge into `main`
- Someone with approval permissions will approve the merge or give feedback


# Notes
* This repository uses Typescript. Typescript is not a different language but adds extra functionality on top of Javascript. Typescript code will still run even if it flags an error as long as the Javascript code is correct.
* Try not to add insane dependencies with `npm install <package>`. Add dependencies that are necessary, remove those that you aren't using anymore. By default packages are not stored on GitHub, but the `package.json` keeps track of dependencies instead. Check that JSON file to ensure you added/removed packages. `package-lock.json` is a much more detailed but verbose overview.
* Since this is a Next App, content is by default server side rendered. This means if you wish to use React specific hooks like useRef or useState (sometimes NextJS has hooks that replace React default ones to work better), you should put `"use client"` at the top of the component.
