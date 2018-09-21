import styled from 'styled-components'
import Button from 'components/Button'

const FabButton = styled(Button)`
  padding: 1rem;
  border-radius: 100%;
  width: 56px;
  height: 56px;
  position: fixed;
  right: 20px;
  bottom: 25px;
  box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
`

export default FabButton
