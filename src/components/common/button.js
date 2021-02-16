import styled from 'styled-components'

import { primary, white } from '../../constants/colors'

const BaseButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  
  &:hover {
    opacity: 0.8;
  }
`

export const ButtonPrimary = styled(BaseButton)`
  color: ${white};
  border: 1px solid ${primary};
  background-color: ${primary};
`

