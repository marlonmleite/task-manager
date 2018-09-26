import { showSuccess, showError } from '../toast'

describe('toast', () => {
  it('show a success msg', () => {
    const toastId = showSuccess('success')

    expect(toastId).toBe(1)
  })

  it('show a danger msg', () => {
    const toastId = showError('error')

    expect(toastId).toBe(2)
  })
})
