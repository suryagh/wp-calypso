/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import FAQ from 'components/faq';
import i18n from 'lib/mixins/i18n';

const faqItems = [
	{
		question: 'Do you sell domains?',
		answer: i18n.translate(
			'Yes! The premium and business plans include a free custom domain. That includes new domains purchased through WordPress.com or your own existing domain that you can map to your WordPress.com site. {{a}}Find out more about domains.{{/a}}',
			{
				components: { a: <a href="https://en.support.wordpress.com/all-about-domains/" target="_blank" /> }
			}
		)
	},
	{
		question: 'Can I upload my own plugins?',
		answer: i18n.translate(
			'While uploading your own plugins is not available on WordPress.com, we include the most popular plugin functionality within our sites automatically. The premium and business plans even include their own set of plugins suites tailored just for them. {{a}}Check out all included plugins{{/a}}.',
			{
				components: { a: <a href={ `/plugins/` } /> }
			}
		)
	},
	{
		question: 'Can I install my own theme?',
		answer: i18n.translate(
			'We don’t currently allow custom themes to be uploaded to WordPress.com. We do this to keep your site secure but all themes in our {{a}}theme directory{{/a}} have been reviewed by our team and represent the highest quality. The business plan even supports unlimited premium theme access.',
			{
				components: { a: <a href={ `/design/` } /> }
			}
		)
	},
	{
		question: 'Do I need another web host?',
		answer: i18n.translate(
			'No. All WordPress.com sites include our specially tailored WordPress hosting to ensure your site stays available and secure at all times. You can even use your own domain when you upgrade to the premium or business plan.'
		)
	},
	{
		question: 'Do you offer email accounts?',
		answer: i18n.translate(
			'Yes. If you register a new domain with our premium or business plans, you can optionally add Google apps for work. You can also set up email forwarding for any custom domain registered through WordPress.com. {{a}}Find out more about email{{/a}}.',
			{
				components: { a: <a href="https://en.support.wordpress.com/add-email/" target="_blank" /> }
			}
		)
	},
	{
		question: 'What’s included with advanced custom design?',
		answer: i18n.translate(
			'Custom design is a toolset you can use to personalize your blog’s look and feel with custom colors & backgrounds, custom fonts, and even a CSS editor that you can use for more precise control of your site’s design. {{a}}Find out more about custom design{{/a}}.',
			{
				components: { a: <a href="https://en.support.wordpress.com/custom-design/" target="_blank" /> }
			}
		)
	},
	{
		question: 'Can I cancel my subscription?',
		answer: i18n.translate(
			'Yes. We want you to love everything you do at WordPress.com, so we provide a 30-day refund on all of our plans. {{a}}Manage purchases{{/a}}.',
			{
				components: { a: <a href={ `#` } /> }
			}
		)
	},
	{
		question: 'Have more questions?',
		answer: i18n.translate(
			'Need help deciding which plan works for you? Our hapiness engineers are available for any questions you may have. {{a}}Get help{{/a}}.',
			{
				components: { a: <a href="https://wordpress.com/help" target="_blank" /> }
			}
		)
	}
];

export default React.createClass( {
	displayName: 'FAQ',

	render() {
		return (
			<div className="design-assets__group">
				<h2>
					<a href="/devdocs/design/faq">FAQ</a>
				</h2>
				<FAQ items={ faqItems } />
			</div>
		);
	}
} );
