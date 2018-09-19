import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './'

const storie = storiesOf('Header', module)

storie.add('default', () => (
  <div style={{ height: 200 }}>
    <Header />
  </div>
))
