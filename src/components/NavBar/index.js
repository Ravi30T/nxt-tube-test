import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline, IoReorderThreeOutline} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SmNav,
  WebsiteLogoContainer,
  WebsiteLogo,
  NavButtonsContainer,
  ThemeContainer,
  ThemeButton,
  SmSidebarButtonContainer,
  SmSideBarButton,
  LogoutButtonContainer,
  LogoutButton,
  LgNav,
  LgNavButtonsContainer,
  LgThemeButton,
  ProfileButtonContainer,
  ProfileButton,
  ProfileImg,
  LgLogoutButton,
  PopupContainer,
  LogoutHeading,
  PopupButtonsContainer,
  CancelButton,
  LogoutConfirmButton,
} from './navbarStyledComponent'

const NavBar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {
        darkMode,
        toggleDarkMode,
        toggleSideBar,
        onClickWebsiteLogo,
      } = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <>
          <SmNav isDarkMode={darkMode}>
            <WebsiteLogoContainer>
              <Link to="/">
                <WebsiteLogo
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  onClick={onClickWebsiteLogo}
                />
              </Link>
            </WebsiteLogoContainer>

            <NavButtonsContainer>
              <ThemeContainer>
                <ThemeButton isDarkMode={darkMode} onClick={toggleDarkMode}>
                  {darkMode ? <IoSunnyOutline /> : <FaMoon />}
                </ThemeButton>
              </ThemeContainer>

              <SmSidebarButtonContainer>
                <SmSideBarButton
                  type="button"
                  isDarkMode={darkMode}
                  onClick={toggleSideBar}
                >
                  <IoReorderThreeOutline />
                </SmSideBarButton>
              </SmSidebarButtonContainer>

              <LogoutButtonContainer>
                <Popup
                  modal
                  trigger={
                    <LogoutButton isDarkMode={darkMode}>
                      <FiLogOut />
                    </LogoutButton>
                  }
                >
                  {close => (
                    <>
                      <PopupContainer isDarkMode={darkMode}>
                        <LogoutHeading isDarkMode={darkMode}>
                          {' '}
                          Are you sure you want to logout?{' '}
                        </LogoutHeading>
                        <PopupButtonsContainer>
                          <CancelButton
                            onClick={() => close()}
                            isDarkMode={darkMode}
                          >
                            {' '}
                            Cancel{' '}
                          </CancelButton>
                          <LogoutConfirmButton
                            onClick={onClickLogout}
                            isDarkMode={darkMode}
                          >
                            Confirm
                          </LogoutConfirmButton>
                        </PopupButtonsContainer>
                      </PopupContainer>
                    </>
                  )}
                </Popup>
              </LogoutButtonContainer>
            </NavButtonsContainer>
          </SmNav>

          <LgNav isDarkMode={darkMode}>
            <WebsiteLogoContainer>
              <Link to="/">
                <WebsiteLogo
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  onClick={onClickWebsiteLogo}
                />
              </Link>
            </WebsiteLogoContainer>

            <LgNavButtonsContainer>
              <ThemeContainer>
                <LgThemeButton isDarkMode={darkMode} onClick={toggleDarkMode}>
                  {darkMode ? <IoSunnyOutline /> : <FaMoon />}
                </LgThemeButton>
              </ThemeContainer>

              <ProfileButtonContainer>
                <ProfileButton>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ProfileButton>
              </ProfileButtonContainer>

              <LogoutButtonContainer>
                <Popup
                  modal
                  trigger={
                    <LgLogoutButton isDarkMode={darkMode}>
                      Logout
                    </LgLogoutButton>
                  }
                >
                  {close => (
                    <>
                      <PopupContainer isDarkMode={darkMode}>
                        <LogoutHeading isDarkMode={darkMode}>
                          Are you sure you want to logout?
                        </LogoutHeading>
                        <PopupButtonsContainer>
                          <CancelButton
                            onClick={() => close()}
                            isDarkMode={darkMode}
                          >
                            Cancel
                          </CancelButton>
                          <LogoutConfirmButton
                            onClick={onClickLogout}
                            isDarkMode={darkMode}
                          >
                            Confirm
                          </LogoutConfirmButton>
                        </PopupButtonsContainer>
                      </PopupContainer>
                    </>
                  )}
                </Popup>
              </LogoutButtonContainer>
            </LgNavButtonsContainer>
          </LgNav>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(NavBar)
