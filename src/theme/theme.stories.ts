/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { ThemeModule, ThemeDirective } from "./";

export default {
	title: "Components/Theme",
	decorators: [
		moduleMetadata({
			imports: [ThemeModule]
		})
	],
	component: ThemeDirective
} as Meta;

const Template: Story<ThemeDirective> = (args) => ({
	props: args,
	template: `
		<div ibmTheme>
			<div class="theme-section">
				<p>White theme</p>
			</div>
		</div>
		<div ibmTheme="g10">
			<div class="theme-section">
				<p>G10 theme</p>
			</div>
		</div>
		<div ibmTheme="g90">
			<div class="theme-section">
				<p>G90 theme</p>
			</div>
		</div>
		<div ibmTheme="g100">
			<div class="theme-section">
				<p>G100 theme</p>
			</div>
		</div>
	`,
	styles: [`
		.theme-section {
			padding: 1rem;
			background: var(--cds-background);
			color: var(--cds-text-primary);
		}
	`]
});
export const Basic = Template.bind({});

const LayeredTemplate: Story<ThemeDirective> = (args) => ({
	props: args,
	template: `
		<div ibmTheme>
			<article class="theme-layer-example">
				<header class="theme-layer-header">White theme</header>
				<div class="theme-with-layer">Layer one</div>
				<div ibmLayer>
					<div class="theme-with-layer">Layer two</div>
					<div ibmLayer>
						<div class="theme-with-layer">Layer three</div>
					</div>
				</div>
			</article>
		</div>
		<div ibmTheme="g10">
			<article class="theme-layer-example">
				<header class="theme-layer-header">G10 theme</header>
				<div class="theme-with-layer">Layer one</div>
				<div ibmLayer>
					<div class="theme-with-layer">Layer two</div>
					<div ibmLayer>
						<div class="theme-with-layer">Layer three</div>
					</div>
				</div>
			</article>
		</div>
		<div ibmTheme="g90">
			<article class="theme-layer-example">
				<header class="theme-layer-header">G90 theme</header>
				<div class="theme-with-layer">Layer one</div>
				<div ibmLayer>
					<div class="theme-with-layer">Layer two</div>
					<div ibmLayer>
						<div class="theme-with-layer">Layer three</div>
					</div>
				</div>
			</article>
		</div>
		<div ibmTheme="g100">
			<article class="theme-layer-example">
				<header class="theme-layer-header">G100 theme</header>
				<div class="theme-with-layer">Layer one</div>
				<div ibmLayer>
					<div class="theme-with-layer">Layer two</div>
					<div ibmLayer>
						<div class="theme-with-layer">Layer three</div>
					</div>
				</div>
			</article>
		</div>
	`,
	styles: [`
		.theme-layer-example {
			padding: 1rem;
			background: var(--cds-background);
			color: var(--cds-text-primary);
		}
		.theme-layer-header {
			margin-bottom: 1rem;
		}
		.theme-with-layer {
			padding: 1rem;
			background: var(--cds-layer);
			color: var(--cds-text-primary);
		}
	`]
});
export const WithLayer = LayeredTemplate.bind({});