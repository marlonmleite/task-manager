import { toast } from 'react-toastify'

const config = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
}

export const showSuccess = msg => toast.success(msg, config)

export const showError = msg => toast.error(msg, config)

