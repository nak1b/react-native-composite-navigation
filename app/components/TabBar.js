import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import TabItem from './TabItem'


class TabBar extends Component {
	constructor(props) {
	  super(props)

	  this._renderTabs = this._renderTabs.bind(this)
	}

	_renderTabs() {
		return this.props.navigationState.routes.map((tab, index) =>  {
			return <TabItem 
						key={tab.key}
						tab={tab.key}
						selected={this.props.navigationState.index === index} 
						changeTab={this.props.changeTab}/>
		})
	}
	
	render() {
		return (
			<View style={styles.tabs}>
				{this._renderTabs()}
			</View>
		)
	}
}


const styles = StyleSheet.create({
	tabs: {
		height: 44,
		flexDirection: 'row'
	}
})


export default TabBar