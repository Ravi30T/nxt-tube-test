import React from 'react'

/* const sideBarTabsList = [
  {
    id: 'HOME',
    displayText: 'Home',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
  },
  {
    id: 'SAVED_VIDEOS',
    displayText: 'Saved Videos',
  },
] */

const NxtWatchContext = React.createContext({
  darkMode: false,
  smSideBar: false,
  showAd: true,
  toggleAd: () => {},
  toggleDarkMode: () => {},
  toggleSideBar: () => {},
  onClickHome: () => {},
  onClickTrending: () => {},
  onClickGaming: () => {},
  onClickSavedVideos: () => {},
  savedVideos: [],
  onAddSavedVideos: () => {},
  toggleSaveButton: () => {},
  likeButton: false,
  toggleLikeButton: () => {},
  dislikeButton: false,
  toggleDislikeButton: () => {},
  activeTab: 'Home',
})

export default NxtWatchContext
