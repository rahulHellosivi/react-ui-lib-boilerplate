import React from 'react'
import { BackButton } from '../components'

export default {
    title: 'BackButton',
    components: BackButton
}

const Template = (args) => <BackButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'custom back'
} 

// export const 