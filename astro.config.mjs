import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://cawtoz.github.io',
  base: '/dine-docs',
  integrations: [
    starlight({
      title: 'Dine API',
      social: {
        github: 'https://github.com/cawtoz/dine-docs',
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [
            {
              label: "Introduction",
              link: '/start/introduction',
            },
            {
              label: "Setup",
              link: '/start/setup',
            },
            {
              label: "Contributing",
              link: '/start/contributing',
            },
          ],
        },
        {
          label: 'Endpoints',
          autogenerate: { directory: 'endpoints' },
        },
      ],
    }),
  ],
});
