import React, { Component } from 'react'
import { StyleSheet, View, Text, NavigationExperimental } from 'react-native';

import { navPush, navPop, selectTab } from '../actions/NavActions'
import TabBar from './TabBar'
import Button from './Button'

//Screens
import HomeScreen from '../screens/Home'
import HomeScreenTwo from '../screens/HomeTwo'
import HomeScreenThree from '../screens/HomeThree'
import CallScreen from '../screens/Call'
import ChatScreen from '../screens/Chat'
import ProfileScreen from '../screens/Profile'


const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental;


class Navigation extends Component {
	constructor(props) {
		super(props)

		this._renderHeader = this._renderHeader.bind(this)
		this._renderScene = this._renderScene.bind(this)
	}

	_renderHeader(props, backAction, tabKey) {
		return (
			<NavigationHeader
				{...props}

				onNavigateBack={() => backAction(tabKey)}
	  			renderTitleComponent={props => {
	  				const title = props.scene.route.title
	  				return <NavigationHeader.Title textStyle={styles.navTitle}>{title}</NavigationHeader.Title>
	  			}} />
	  	)
	}

	_renderScene(navigationState) {
		const scene = navigationState.scene.route.key;
		switch (scene) {
			case 'home': {
				return <HomeScreen />
			}

			case 'calls': {
				return <CallScreen />
			}

			case 'chats': {
				return <ChatScreen />
			}

			case 'profile': {
				return <ProfileScreen />
			}

			case 'homeTwo': {
				return <HomeScreenTwo />
			}

			case 'homeThree': {
				return <HomeScreenThree />
			}

			default: {
				return <View style={styles.screen} />
			}
		}
		
	}

	render() {
		const {navigationState, backAction, changeTab} = this.props;
    	const {tabs} = navigationState;
    	const tabKey = tabs.routes[tabs.index].key;
    	const scenes = navigationState[tabKey];

		return (
			<View style={styles.container}>
				<NavigationCardStack 
					key={'stact_' + tabKey }
					onNavigateBack={() => backAction(tabKey)}
					navigationState={scenes}
					renderOverlay={ (props) => this._renderHeader(props, backAction, tabKey)}
					renderScene={this._renderScene}
				/>
				<TabBar
					navigationState={tabs} 
					changeTab={changeTab} />
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	navTitle: {
		color: '#494949'
	},

	screen: {
		flex: 1,
		backgroundColor: '#f2e394'
	}
})


export default Navigation