require("esbuild")
  .build({
    entryPoints: [
      "src/popup.tsx",
      "src/options.tsx",
      "src/index.tsx",
      "src/background.js",
    ],
    bundle: true,
    outdir: "public/dist",
    minify: true,
    sourcemap: false,
    target: ["chrome58", "firefox57"],
    loader: { ".js": "jsx" },
    define: { "process.env.NODE_ENV": '"production"' },
  })
  .catch(() => process.exit(1));
