import React, { Component } from 'react'
import { StyleSheet, View, Text, NavigationExperimental } from 'react-native';

import { navPush, navPop, selectTab } from '../actions/NavActions'
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
	  				return <NavigationHeader.Title>{title}</NavigationHeader.Title>
	  			}} />
	  	)
	}

	_renderScene() {
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
})


export default Navigation