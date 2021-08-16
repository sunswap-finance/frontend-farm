import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@sunswap/sunswap-finance-uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const Blurb = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`

const StyledHero = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;
`
const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <Container>
        <Title>{TranslateString(500, 'IDO: Initial Dex Offering')}</Title>
        <Blurb>6% of the raised amount is used to buyback and burn SALT</Blurb>
        <Blurb>or contribute to a new Ocean</Blurb>
      </Container>
    </StyledHero>
  )
}

export default Hero
