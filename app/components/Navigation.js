import React, { Component } from 'react'
import { StyleSheet, View, Text, NavigationExperimental } from 'react-native';

import { navPush, navPop, selectTab } from '../actions/NavActions'
import TabBar from './TabBar'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental;


class Navigation extends Component {
	render() {
		return (
			<View style={{backgroundColor: "red", flex: 1}} />
		)
	}
}


const styles = StyleSheet.create({

})


export default Navigation