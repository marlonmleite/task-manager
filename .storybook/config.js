import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo, setDefaults } from '@storybook/addon-info'
import { ThemeProvider } from 'styled-components'
import theme from '../src/core/constants/theme'
import '../src/core/style/global.css.js'

addDecorator((story, context) => (
  <ThemeProvider theme={theme}>
    {withInfo()(story)(context)}
  </ThemeProvider>
))

setDefaults({
  header: false,
  inline: true,
})

const req = require.context('../src/components', true, /\.stories\.js$/)

const loadStories = () => req.keys().forEach(filename => req(filename))

configure(loadStories, module)
