import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './'

const storie = storiesOf('Button', module)

storie.add('primary', () => <Button color="primary">My Button</Button>)
