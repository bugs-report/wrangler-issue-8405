### Which Cloudflare product(s) does this pertain to?

Wrangler

### What versions are you using?

3.109.2 [wrangle], 22.6.0 [node]

### What operating system and version are you using?

Windows 10

### Please provide a link to a minimal reproduction

[https://github.com/PrinOrange/wrangle-bug-repo-1.git](https://github.com/bugs-report/wrangler-issue-8405.git)

### Describe the Bug

Run `pnpm run dev`

And then it shows error log:
```plaintext
No bindings found.
[wrangler:inf] Ready on http://127.0.0.1:8787

X [ERROR] Build failed with 1 error:

  X [ERROR] No loader is configured for ".wasm" files:
  node_modules/.pnpm/@node-rs+jieba-wasm32-wasi@2.0.1/node_modules/@node-rs/jieba-wasm32-wasi/jieba.wasm32-wasi.wasm?url


  node_modules/.pnpm/@node-rs+jieba-wasm32-wasi@2.0.1/node_modules/@node-rs/jieba-wasm32-wasi/jieba.wasi-browser.js:8:22:
        8 │ import __wasmUrl from './jieba.wasm32-wasi.wasm?url'
```

I add the package [@node-rs/jieba](https://www.npmjs.com/package/@node-rs/jieba) for dependency. This is a node-binding package, and it refers wasm package [@node-rs/jieba-wasm32-wasi](https://www.npmjs.com/package/@node-rs/jieba-wasm32-wasi) for sub-dependency.

### Please provide any relevant error logs

_No response_
