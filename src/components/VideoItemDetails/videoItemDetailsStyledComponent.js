import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  @media (max-width: 767px) {
    display: ${props => (props.smDevice ? 'none' : 'flex')};
    flex-direction: column;
    width: 100vw;
  }
  padding: 10px;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ffffff')};
  width: 100%;
  height: 100vh;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 767px) {
    width: 90vw;
  }
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  @media (max-width: 767px) {
    width: 90vw;
  }
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  margin-right: 15px;
  color: ${props => (props.isDarkMode ? '#7e858e' : '#616e7c')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const PublishedDate = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#7e858e' : '#616e7c')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`
const getLikeDislikeColor = props => {
  if (props.isActive) {
    return '#3b82f6'
  }
  if (props.isDarkMode) {
    return '#616e7c'
  }
  return '#475569'
}

export const LikeButton = styled.button`
  font-family: 'Roboto';
  color: ${props => getLikeDislikeColor(props)};
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const DislikeButton = styled.button`
  font-family: 'Roboto';
  color: ${props => getLikeDislikeColor(props)};
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const SaveButton = styled.button`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#616e7c' : '#475569')};
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const SavedButton = styled.button`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#616e7c' : '#475569')};
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const Hr = styled.hr`
  color: ${props => (props.isDarkMode ? 'lightgrey' : '#616e7c')};

  @media (max-width: 767px) {
    width: 95vw;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin-bottom: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`

export const SubsribersCount = styled.p`
  font-family: 'Roboto';
  margin-bottom: 0px;
  color: ${props => (props.isDarkMode ? '#7e858e' : '#616e7c')};
`

export const LgVideoDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    display: none;
  }
`

export const SmVideoDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const VideoDetailsFailureHeading = styled.h1`
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

export const VideoDetailsFailureDescription = styled.p`
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
