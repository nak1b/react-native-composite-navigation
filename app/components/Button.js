import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.navigate}>
			<Text style={styles.buttonText}>{props.title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		width: 160,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#494949'
	},

	buttonText: {
		fontFamily: 'Avenir Book',
		letterSpacing: 1,
		fontWeight: 'bold',
		color: '#FFF',
		fontSize: 16
	}
})

export default Button