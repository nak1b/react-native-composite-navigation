import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

export default connect(
  state => ({
    appNavigationState: state.navigationState,
  }),

  dispatch => ({
    backAction: (tabkey) => {
      dispatch(navigationPop(tabkey))
    },
    push: (route) => {
      dispatch(navigationPush(route))
    },
    changeTab: (route) => {
      dispatch(changeTab(route))
    }
  })
)(Navigation)