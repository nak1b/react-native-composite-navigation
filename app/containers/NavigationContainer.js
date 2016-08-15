import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { navPush, navPop, selectTab } from '../actions/NavActions'

export default connect(
  state => ({
    navigationState: state.navigationState,
  }),

  dispatch => ({
    backAction: (tabkey) => {
      dispatch(navPop(tabkey))
    },

    push: (route) => {
      dispatch(navPush(route))
    },

    changeTab: (tabKey) => {
      dispatch(selectTab(tabKey))
    }
  })
)(Navigation)