/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { LayerModule, LayerDirective } from "./";

export default {
	title: "Components/Layer",
	decorators: [
		moduleMetadata({
			imports: [LayerModule]
		})
	],
	parameters: {
		controls: {
			disable: true
		}
	},
	component: LayerDirective
} as Meta;

const Template: Story<LayerDirective> = (args) => ({
	props: args,
	template: `
		<div class="example-layer">Layer 0</div>
		<div ibmLayer>
			<div class="example-layer">Layer 1</div>
			<div ibmLayer>
				<div class="example-layer">Layer 2</div>
			</div>
		</div>
	`,
	styles: [
		`.example-layer {
			padding: 1rem;
			background: var(--cds-layer);
			color: theme.$text-primary;
		}`
	]
});
export const Basic = Template.bind({});

const TemplateWithInput: Story<LayerDirective> = (args) => ({
	props: args,
	template: `
		<div class="example-layer">Layer 0</div>
		<div ibmLayer>
			<div class="example-layer">Layer 1</div>
			<div ibmLayer>
				<div class="example-layer">Layer 2</div>
				<!-- Reset layer, child layer will auto increment or you can pass in layer of your choice -->
				<div [ibmLayer]="0">
					<div class="example-layer">Layer 0</div>
					<div [ibmLayer]="1">
						<div class="example-layer">Layer 1</div>
						<div ibmLayer>
							<div class="example-layer">Layer 2</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [
		`.example-layer {
			padding: 1rem;
			background: var(--cds-layer);
			color: theme.$text-primary;
		}`
	]
});
export const CustomOrder = TemplateWithInput.bind({});