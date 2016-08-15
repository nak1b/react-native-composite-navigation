import * as NavigationStateUtils from 'NavigationStateUtils'
import { NAV_PUSH, NAV_POP, SELECT_TAB } from '../actions/NavActions'

const initialState = {
	tabs: {
		index: 0,
		routes: [
			{key: 'Home'},
			{key: 'Calls'},
			{key: 'Chats'},
			{key: 'Profile'}
		]
	},

	Home: {
		index: 0,
		routes: [{key: 'home', title: 'Home'}]
	},

	Calls: {
		index: 0,
		routes: [{key: 'calls', title: 'Calls'}]
	},

	Chats: {
		index: 0,
		routes: [{key: 'chats', title: 'Chats'}]
	},

	Profile: {
		index: 0,
		routes: [{key: 'profile', title: 'Profile'}]
	}

}


function navigationState(state=initialState, action) {
	if(!action) return state

	switch (action.type){
		case NAV_PUSH: {
			const {tabs} = state;
			const tabKey = tabs.routes[tabs.index].key
			const scenes = state[tabKey]
			const nextScenes = NavigationStateUtils.push(scenes, action.route)

			if (scenes !== nextScenes) {
				return {
					...state,
					[tabKey]: nextScenes
				}
				break
			}
		}

		case NAV_POP: {
			const {tabs} = state;
			const tabKey = tabs.routes[tabs.index].key
			const scenes = state[tabKey]
			const nextScenes = NavigationStateUtils.pop(scenes)

			if(scenes !== nextScenes) {
				return {
					...state,
					[tabKey]: nextScenes
				}
				break
			}
		}

		case SELECT_TAB: {
			const tabKey = action.tabKey
			const tabs = NavigationStateUtils.jumpTo(state.tabs, tabKey)

			if(state.tabs !== tabs) {
				return {
					...state,
					tabs
				}
			}
			return state
		}

		default:
			return state

	}
}

export default navigationState