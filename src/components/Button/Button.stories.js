import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './'

const storie = storiesOf('Button', module)

storie.add('default', () => <Button color="default">Click</Button>)
storie.add('primary', () => <Button color="primary">Click</Button>)
storie.add('secondary', () => <Button color="secondary">Click</Button>)
storie.add('info', () => <Button color="info">Click</Button>)
storie.add('danger', () => <Button color="danger">Click</Button>)
