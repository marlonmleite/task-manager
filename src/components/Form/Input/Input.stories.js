import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputComponent as Input } from './'

const stories = storiesOf('Input', module)

stories.add('default', () => (
  <Input defaultValue="teste" />
))

stories.add('disabled', () => (
  <Input defaultValue="teste" disabled />
))
