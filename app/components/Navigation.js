import React, { Component } from 'react'
import { StyleSheet, View, Text, NavigationExperimental } from 'react-native';

import { navPush, navPop, selectTab } from '../actions/NavActions'
import TabBar from './TabBar'

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

	_renderHeader(props) {
		return (
			<NavigationHeader
				{...props}
	  			renderTitleComponent={props => {
	  				const title = props.scene.route.title
	  				return <NavigationHeader.Title>{title}</NavigationHeader.Title>
	  			}} />
	  	)
	}

	_renderScene() {
		return (
			<View style={{flex: 1, marginTop: 64, backgroundColor: 'blue'}}>
			</View>
		)
	}

	render() {
		const {navigationState} = this.props;
    	const {tabs} = navigationState;
    	const tabKey = tabs.routes[tabs.index].key;
    	const scenes = navigationState[tabKey];

		return (
			<View style={styles.container}>
				<NavigationCardStack 
					key={'stact_' + tabKey }
					navigationState={scenes}
					renderOverlay={this._renderHeader}
					renderScene={this._renderScene}
				/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})


export default Navigation