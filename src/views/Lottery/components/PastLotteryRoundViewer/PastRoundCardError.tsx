import React from 'react'
import { Text } from '@sunswap/sunswap-finance-uikit'

interface PastRoundCardErrorProps {
  error: {
    message: string
  }
}

const PastRoundCardError: React.FC<PastRoundCardErrorProps> = ({ error }) => <Text p="24px">{error.message}</Text>

export default PastRoundCardError
