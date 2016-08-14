import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={this.props.navigate}>
			<Text style={styles.buttonText}>{this.props.title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		width: 70,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#494949'
	},

	buttonText: {
		color: '#FFF'
	}
})

export default Button