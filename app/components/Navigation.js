import React, { Component } from 'react'
import { StyleSheet, View, Text, NavigationExperimental } from 'react-native';

import { navPush, navPop, selectTab } from '../actions/NavActions'
import HomeScreen from '../screens/Home'
import TabBar from './TabBar'
import Button from './Button'

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
		console.log(scene)
		return (
			<HomeScreen />
		)
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
	}
})


export default Navigation