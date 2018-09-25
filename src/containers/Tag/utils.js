import * as Yup from 'yup'

export const crudSchema = Yup.object().shape({
  name: Yup.string()
    .required('Campo obrigatório'),
})

export const MODAL_DELETE = 'delete'
export const MODAL_FORM = 'crud'
