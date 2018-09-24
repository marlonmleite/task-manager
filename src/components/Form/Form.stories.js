// import React from 'react'
// import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { Formik } from 'formik'
// import { isRequired } from 'utils/validation'
// import Input from './Input'

// const stories = storiesOf('Form', module)

// const styles = {
//   display: 'flex',
//   flexDirection: 'column',
//   width: 300,
// }

// stories.add('Formik', () => (
//   <Formik
//     initialValues={{ firstName: '', fullName: 'A b c' }}
//     onSubmit={(values, actions) => {
//       action()(values)

//       actions.setSubmitting(false)
//     }}
//     render={props => (
//       <form onSubmit={props.handleSubmit}>
//         <div style={styles}>
//           <Input label="First Name" name="firstName" validate={isRequired} />
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     )}
//   />
// ))
