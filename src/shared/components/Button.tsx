import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'

import { theme } from './themes/theme'

interface ButtonProps extends TouchableOpacityProps {
	title: string
}

const Button = ({ title, ...props }: ButtonProps) => {
	return (
		<TouchableOpacity
			{...props}
			style={styles.buttonContainer}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	buttonContainer: {
		width: '100%',
		height: 50,
		borderRadius: 6,
		backgroundColor: '#687387',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 8,
	},
	text: {
		color: theme.colors.neutralTheme.white,
		fontFamily: 'Poppins-Bold',
	},
})
