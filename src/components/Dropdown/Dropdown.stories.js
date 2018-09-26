import React from 'react'
import { storiesOf } from '@storybook/react'
import { Dropdown, DropdownOption } from './'

const storie = storiesOf('Dropdown', module)

storie.add('default', () => (
  <div style={{ width: 200 }}>
    <Dropdown color="secondary" text="Example">
      <DropdownOption
        selected
        onClick={() => console.log('click')}
      >
        Option 1
      </DropdownOption>
      <DropdownOption
        onClick={() => console.log('click')}
      >
        Option 2
      </DropdownOption>
      <DropdownOption
        onClick={() => console.log('click')}
      >
        Option 3
      </DropdownOption>
    </Dropdown>
  </div>
))
