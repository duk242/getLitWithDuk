// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Getting Lit with Duk',
			// # TODO - Update Social Icons
			// # TODO - Set Site URL (When published)
			
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Lighting Design',
					items: [{ autogenerate: { directory: 'lighting-design' } }],
				},
				{
					label: 'Lighting Programming',
					items: [{ autogenerate: { directory: 'lighting-programming' } }],
				},
				{
					label: 'Light Profiles',
					items: [{ autogenerate: { directory: 'light-profiles' } }],
				},
				{
					label: 'Light Recipes',
					items: [{ autogenerate: { directory: 'light-recipes' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
