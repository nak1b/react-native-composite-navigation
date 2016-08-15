import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Chat = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Chats Screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: '#d96459'
	},

	text: {
		fontFamily: 'Avenir Book',
		fontWeight: 'bold',
		fontSize: 17,
		letterSpacing: 1,
		color: '#FFF'
	}
})


export default Chat
