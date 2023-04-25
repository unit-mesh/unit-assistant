import Parser from "web-tree-sitter";
import fs from "node:fs/promises";
await Parser.init();

async function loadLanguageParser(path: string) {
    return Parser.Language.load(path);
}
const parsers = {
    c: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-c.wasm"),
    csharp: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-c_sharp.wasm"),
    cpp: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-cpp.wasm"),
    go: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-go.wasm"),
    java: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-java.wasm"),
    javascript: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-javascript.wasm"),
    typescript: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-typescript.wasm"),
    tsx: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-tsx.wasm"),
    kotlin: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-kotlin.wasm"),
    lua: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-lua.wasm"),
    python: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-python.wasm"),
    rust: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-rust.wasm"),
    swift: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-swift.wasm"),
    zig: await loadLanguageParser("node_modules/@unit-mesh/treesitter-artifacts/wasm/tree-sitter-zig.wasm"),
}

const parser = new Parser();
parser.setLanguage(parsers.typescript);

const sourceCode = `
console.log("Hello World");
`;

const result = parser.parse(sourceCode);
console.log(result.rootNode.toString());