import React from 'react'
import { storiesOf } from '@storybook/react'
import FabButton from './'

const storie = storiesOf('FabButton', module)

storie.add('default', () => <FabButton color="default" />)
storie.add('primary', () => <FabButton color="primary" />)
storie.add('secondary', () => <FabButton color="secondary" />)
storie.add('info', () => <FabButton color="info" />)
storie.add('danger', () => <FabButton color="danger" />)
