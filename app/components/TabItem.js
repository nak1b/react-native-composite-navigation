import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const TabItem = (props) => {
	console.log(props)
	return (
		<TouchableOpacity style={styles.tabButton} >
			<Text style={styles.tabText}>{props.tab}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	tabButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF',
	},

	tabText: {
		color: '#494949'
	}
})

export default TabItem