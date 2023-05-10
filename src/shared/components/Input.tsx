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
		color: '#606060',
		borderRadius: 6,
		borderBottomWidth: 0.3,
		borderBottomColor: '#5bc0de',
	},
})
