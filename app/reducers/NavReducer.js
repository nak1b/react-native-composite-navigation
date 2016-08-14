import * as NavigationStateUtils from 'NavigationStateUtils'
import { NAV_PUSH, NAV_POP, SELECT_TAB } from '../actions/NavActions'

const initialState = {
	tabs: {
		index: 0,
		routes: [
			{key: 'home'},
			{key: 'about'},
			{key: 'contact'},
			{key: 'settings'}
		]
	},

	home: {
		index: 0,
		routes: [{key: 'home', title: 'Home Page'}]
	}

	about: {
		index: 0,
		routes: [{key: 'about', title: 'About Page'}]
	}

	contact: {
		index: 0,
		routes: [{key: 'contact', title: 'Contact Page'}]
	}

	settings: {
		index: 0,
		routes: [{key: 'settings', title: 'Settings Page'}]
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

	}
}