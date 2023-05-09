import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Input from '../../../shared/components/Input'

const LoginScreen = () => {
	return (
		<View style={styles.container}>
			<Text>LoginScreen</Text>
			<Input placeholder='Enter text...' />
		</View>
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
})
