<br>
<br>

<h1 align=center>`MODULE_NOT_FOUND` when using Yarn 2 + global cache</h1>

<br>

## Steps to reproduce

1. Clone or download this repository
2. Run `yarn` to install dependencies
3. Run `yarn start`

<br>

You'll see the `MODULE_NOT_FOUND` error in the Terminal.  
Note that everything works once you change `enableGlobalCache` to `false` in `.yarnrc.yml` and reinstall dependencies.

<br>

> If you don't have `yarn` installed on your system, you can run `npm run yarn:install` and `npm run yarn:start` instead. Those commands will directly call yarn, which is checked into the repository anyway.

<br>
