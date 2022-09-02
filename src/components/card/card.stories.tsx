import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Card} from './card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  heading: { as: 'h3', children: 'Card con h3' },
  children: 'lorem ipsum',
  cta: { children: 'Cta', className: 'card-cta' }
};