require("esbuild")
  .build({
    entryPoints: ["src/popup.tsx", "src/options.tsx"],
    bundle: true,
    outdir: "public/dist",
    minify: true,
    sourcemap: false,
    target: ["chrome58", "firefox57"],
    loader: { ".js": "jsx", ".tsx": "tsx" },
    define: { "process.env.NODE_ENV": '"production"' },
  })
  .catch(() => process.exit(1));
