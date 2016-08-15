import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const TabItem = (props) => {
	const selectedButton = props.selected ? {'backgroundColor': '#DDD'} : null
	
	return (
		<TouchableOpacity activeOpacity={0.7} style={[styles.tabButton, selectedButton]} onPress={() => props.changeTab(props.tab)}>
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