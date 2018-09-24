import React from 'react'
import { storiesOf } from '@storybook/react'
import FormGroup from './'
import { Input } from '../Input'

const stories = storiesOf('FormGroup', module)

stories.add('default', () => (
  <div>
    <div>
      <FormGroup name="firstName" label="First name">
        <Input id="firstName" defaultValue="" />
      </FormGroup>
    </div>
    <div>
      <FormGroup name="lastName" label="Last name">
        <Input id="lastName" defaultValue="Ferreira" />
      </FormGroup>
    </div>
  </div>
))

stories.add('invalid input', () => (
  <div>
    <div>
      <FormGroup name="email" label="Email" error="Enter a email" invalid>
        <Input id="email" defaultValue="" />
      </FormGroup>
    </div>
    <div>
      <FormGroup name="email" label="Email" error="Invalid email" invalid>
        <Input id="email" defaultValue="marlon@" />
      </FormGroup>
    </div>
  </div>
))
