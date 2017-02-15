# Frontend-test Blocklevel

## Work and time

Time span:
12:30 - 14:00 - Setup project and main layout

20:50 - 21:50 - Pageslide Setup

22:15 - 00:00 - Pagebuild and styling Home and About

Total time spanned building so far: 4:15

Things to do:
- Build the Work Page;
- Build the Contact Page;
- Create mobile version (scale);
- Test and fine tune script;
- Dist project and final test run;
- Time for coffee;

# Template build

Setup using:

```
npm init
bower init

npm install
bower install
```

If you do not yet have the `gulp` command, you must run:

```
npm install gulp-cli -g
```

## Available gulp workflows

```
gulp dev
```

- Starts a BrowserSync server on port `3000`
- Runs all dev-tasks once
- Starts waiting for your changes

```
gulp dist
```

- Copies all the asset-data to the `dist` folder
- Compiles the current sass-files to flat css
- Minifies, uglifies and flattens both css and js files into the `dist` folder
- Updates the html file in `dist` with links to the newly flatttened files

## Other available gulp commands:

```
gulp watch
```

Watches html, scss and js files and responds with dev-tasks when they change

```
gulp serve
```

Starts a BrowserSync server on port `3000`

```
gulp bower
```

Runs wiredep and links up all bower dependencies into your html files

```
gulp dev-sass

```

Compiles the current sass-files to sourcemapped css

```
gulp dev-js
```

Runs jshint on the current js-files


```
gulp dist-sass
```

Compiles the current sass-files to flat css

```
gulp dist-html
```

- Minifies, uglifies and flattens both css and js files into the `dist` folder
- Updates the html file in `dist` with links to the newly flatttened files

```
gulp dist-copy-assets
```

Copies all the asset-data to the `dist` folder
