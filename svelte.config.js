import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: vercel(),
		vite: {
      server: {
        fs: {
          // throws an error without this when importing Fira font
          allow: ['..', 'node_modules/@fontsource/fira-code']
        },
      },
      define: {
					'__TRY_VERSION__': JSON.stringify(process.env.npm_package_version),
			}
		}
	},
	preprocess: preprocess({
    postcss: true
  }),
};

export default config;
