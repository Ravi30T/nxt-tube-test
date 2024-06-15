import './App.css'

// Replace your code here

import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

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
]

*/

class App extends Component {
  state = {
    darkMode: false,
    showAd: true,
    smSideBar: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  onToggleDarkMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  onToggleAd = () => {
    this.setState(prevState => ({showAd: !prevState.showAd}))
  }

  onClickHome = () => {
    this.setState(prevState => ({
      activeTab: 'Home',
      smSideBar: !prevState.smSideBar,
    }))
  }

  onClickWebsiteLogo = () => {
    this.setState({
      activeTab: 'Home',
      smSideBar: false,
    })
  }

  onClickTrending = () => {
    this.setState(prevState => ({
      activeTab: 'Trending',
      smSideBar: !prevState.smSideBar,
    }))
  }

  onClickGaming = () => {
    this.setState(prevState => ({
      activeTab: 'Gaming',
      smSideBar: !prevState.smSideBar,
    }))
  }

  onClickSavedVideos = () => {
    this.setState(prevState => ({
      activeTab: 'Saved_Videos',
      smSideBar: !prevState.smSideBar,
    }))
  }

  onToggleSideBar = () => {
    this.setState(prevState => ({smSideBar: !prevState.smSideBar}))
  }

  onAddSavedVideos = details => {
    const {saveButton} = this.state

    if (saveButton === true) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, details],
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.filter(each => each.id !== details.id)],
      }))
    }
  }

  render() {
    const {
      darkMode,
      showAd,
      smSideBar,
      activeTab,
      saveButton,
      likeButton,
      dislikeButton,
      savedVideos,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          darkMode,
          showAd,
          smSideBar,
          activeTab,
          saveButton,
          likeButton,
          dislikeButton,
          savedVideos,
          toggleDarkMode: this.onToggleDarkMode,
          onClickWebsiteLogo: this.onClickWebsiteLogo,
          toggleAd: this.onToggleAd,
          selectTab: this.onSelectTab,
          onClickHome: this.onClickHome,
          onClickTrending: this.onClickTrending,
          onClickGaming: this.onClickGaming,
          onClickSavedVideos: this.onClickSavedVideos,
          toggleSideBar: this.onToggleSideBar,
          toggleSaveButton: this.onClickSave,
          toggleLikeButton: this.onClickLikeButton,
          toggleDislikeButton: this.onClickDislikeButton,
          onAddSavedVideos: this.ononAddSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
