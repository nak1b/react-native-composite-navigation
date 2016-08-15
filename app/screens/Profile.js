import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Profile = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Profile Screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: '#588c73'
	},

	text: {
		fontFamily: 'Avenir Book',
		fontWeight: 'bold',
		fontSize: 17,
		letterSpacing: 1,
		color: '#FFF'
	}
})


export default Profile
