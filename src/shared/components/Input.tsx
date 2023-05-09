import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'

type InputProps = TextInputProps

const Input = ({ ...props }: InputProps) => {
	return (
		<TextInput
			{...props}
			style={styles.containerInput}
		/>
	)
}

export default Input

const styles = StyleSheet.create({
	containerInput: {
		width: '100%',
		height: 50,
		padding: 16,
		backgroundColor: '#ffffff',
		color: '#687387',
		borderRadius: 6,
	},
})
