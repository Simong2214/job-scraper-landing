// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Roozna.',
		aboutText:
			'The #1 No Code Job Data Backfiller. Add fresh jobs to your job board on autopilot without any coding, so your job board always look fresh and active. Totally customise the specific jobs you want to add and run on a schedule to automatically add them to your site. (Ex: Add all the latest restaurant jobs in New York once a day to your site)',
		logo: {
			src: '/logo.svg',
			alt: 'The #1 No Code Job Data Backfiller',
			text: 'Roozna.'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'Changelog',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms'
				}
			]
		},
	],
	subFooter: {
		copywriteText: '© Roozna 2024.'
	}
}
