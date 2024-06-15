import styled from 'styled-components'

export const GamingVideoTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 0px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const GamingVideoViewsCount = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#64748b' : '#475569')};
  font-size: 16px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`
