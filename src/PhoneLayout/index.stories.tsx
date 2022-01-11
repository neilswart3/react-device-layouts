import { ComponentStory, ComponentMeta } from '@storybook/react'

import PhoneLayout from '.'

export default {
  title: 'PhoneLayout',
  component: PhoneLayout,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof PhoneLayout>

const Template: ComponentStory<typeof PhoneLayout> = (args) => (
  <PhoneLayout {...args} />
)

export const Default = Template.bind({})
