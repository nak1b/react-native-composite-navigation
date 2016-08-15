import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { navPush } from '../actions/NavActions'
import Button from '../components/Button'


const Home = (props) => {
	return (
		<View style={styles.container}>
			<Button title="Home Screen 3" navigate={() => props.onClick({key: 'homeThree', title: 'Home Three'})} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: '#36c4f2'
	}
})


export default connect(
	state => ({

	}),

	dispatch => ({
		onClick: (route) => {
			dispatch(navPush(route))
		}
	})
)(Home)
