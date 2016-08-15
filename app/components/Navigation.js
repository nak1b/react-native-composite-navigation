import React, { Component } from 'react'
import { StyleSheet, View, Text, NavigationExperimental } from 'react-native';

import { navPush, navPop, selectTab } from '../actions/NavActions'
import TabBar from './TabBar'
import Button from './Button'

//Screens
import HomeScreen from '../screens/Home'
import CallScreen from '../screens/Call'


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
		}
		console.log(scene)
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 64, backgroundColor: '#f2ae72'}}>
				<Button  title="Screen 2" navigate={() => this.props.push({key: 'Second', title: 'Seconds'})} />
			</View>
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