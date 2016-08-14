import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import TabItem from './TabItem'


class TabBar extends Component {
	constructor(props) {
	  super(props)

	  this._renderTabs = this._renderTabs.bind(this)
	}

	_renderTabs() {
		this.props.tabs.map((tab) =>  {
			return <TabItem tab={tab.key} />
		})
	}
	
	render() {
		return (
			<View style={style.tabs}>
				{this._renderTabs()}
			</View>
		)
	}
}


const styles = StyleSheet.create({
	tabs: {
		flex: 1,
		flexDirection: 'row'
	}
})


export default TabBar