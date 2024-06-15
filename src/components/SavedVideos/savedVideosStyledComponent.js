import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  @media (max-width: 767px) {
    display: ${props => (props.smDevice ? 'none' : 'flex')};
    flex-direction: column;
    width: 100vw;
  }
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#ffffff')};
  width: 100%;
`

export const SavedVideosBannerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#F1F1F1')};
  padding: 10px;

  @media (max-width: 767px) {
    height: 80px;
  }
`

export const SavedVideosImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkMode ? '#0F0F0F' : '#E1E9F0')};
  color: ${props => (props.isDarkMode ? '#ff0000' : '#ff0b37')};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 10px;
  font-size: 24px;
  margin-left: 15px;
  margin-right: 15px;
`

export const SavedVideosImg = styled.img`
  width: 60px;
  color: ${props => (props.isDarkMode ? '#ff0000' : '#ff0b37')};
`

export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  font-size: 24px;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`

export const SavedVideosFailureHeading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const SavedVideosFailureDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  text-align: center;
  color: ${props => (props.isDarkMode ? '#616e7c' : '#475569')};

  @media (max-width: 767px) {
    font-size: 19px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`
