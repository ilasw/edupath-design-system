import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Form} from './form';
import {FormInput} from "../form-input/form-input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form',
  component: Form,
  argTypes: {submitted: {action: 'submit'}},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Form>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <>
    <FormInput name={'input-test'} placeholder={'Input di prova'}/>
    <FormInput name={'input-test2'} placeholder={'Input di prova 2'}/>
    <FormInput name={'input-test3'} placeholder={'Input di prova 3'}/>
    <FormInput name={'input-test4'} placeholder={'Input di prova 4'}/>
  </>
};