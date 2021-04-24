import React from 'react'
import styled from 'styled-components'
import { Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ImgSrc from '../assets/images/underconstruction.svg';

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        {/* <LogoIcon width="64px" mb="8px" /> */}
        <img src={ImgSrc} alt="Under Construction" width="300px"/> 
        <Heading size="xxl">Coming Soon</Heading>
        <Text mb="16px">This Page is Under Construction.</Text>
        <Link to="/">
        <Button variant="contained" color="primary">
          {TranslateString(999, 'Back Home')}
        </Button>
        </Link>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
