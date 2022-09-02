import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './heading';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Component heading',
  as: 'h1'
};

export const h2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
h2.args = {
  children: 'Component heading',
  as: 'h2'
};