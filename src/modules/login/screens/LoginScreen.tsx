import { StyleSheet, View } from 'react-native'
import React from 'react'
import Input from '../../../shared/components/Input'
import Button from '../../../shared/components/Button'

const LoginScreen = () => {
	const handleOnPress = () => {
		console.log('Clicou')
	}
	return (
		<View style={styles.container}>
			<Input placeholder='Enter text...' />
			<Button
				title='ENTRAR'
				onPress={handleOnPress}
			/>
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
