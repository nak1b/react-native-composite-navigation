// Action Types

export const NAV_PUSH = 'NAV_PUSH'
export const NAV_POP = 'NAV_POP'
export const SELECT_TAB = 'SELECT_TAB'


// Action Creators
export function selectTab(tabKey) {
	return {
		type: SELECT_TAB,
		tabKey
	}
}


export function navPush(route) {
	return {
		type: NAV_PUSH,
		route
	}
}

export function navPop(tabKey) {
	return {
		type: NAV_POP,
		tabKey
	}
}