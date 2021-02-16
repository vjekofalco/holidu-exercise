import styled from 'styled-components'

export const Text = styled.p`
    max-width: 100%;
  
    ${({ bold }) => bold && 'font-weight: 600;'}
    ${({ color }) => color && `color: ${color};`}
    ${({ size }) => `font-size : ${size || 1}rem;`}
    ${({ inline }) => inline && 'display: inline-block;'}
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`
