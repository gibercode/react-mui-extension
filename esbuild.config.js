const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');
esbuild
  .build({
    entryPoints: ['src/popup.tsx', 'src/options.tsx'],
    bundle: true,
    outdir: 'public/dist',
    minify: true,
    sourcemap: false,
    target: ['chrome58', 'firefox57'],
    loader: { '.js': 'jsx', '.tsx': 'tsx', '.css': 'css' },
    define: { 'process.env.NODE_ENV': '"production"' },
    plugins: [
      sassPlugin(),
    
    ],
  })
  .catch(() => process.exit(1));
