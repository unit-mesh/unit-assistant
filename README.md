# bun sea(Single Executable Application) template

## REQUIREMENTS
- bun.js (of course)
- bkg ( run the `build-sea.sh`, if it isn't installed, the script will install it for you :) )


## Config what to include
1. prepare what you want to include, deps you import don't need config
2. open `bkg.config.json`
```json
{
    "entry": "index.ts",
    "lto": {
        "format": "esm",
        "include": [
            "node_modules/**/*"
        ]
    }
}
```
3. for example: you want add icons folder inside your project root:
```json
{
    "entry": "index.ts",
    "lto": {
        "format": "esm",
        "include": [
            "node_modules/**/*",
            "icons/**/*"
        ]
    }
}
```
It's pretty straightforward, right? Enjoy your journey with `Bun.js` and `Sea` :)
