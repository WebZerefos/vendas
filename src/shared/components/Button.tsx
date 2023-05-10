import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { theme } from './themes/theme'

interface ButtonProps extends TouchableOpacityProps {
	title: string
	loading: boolean
	disabled: boolean
}

const Button = ({ loading, disabled, title, ...props }: ButtonProps) => {
	return (
		<TouchableOpacity
			{...props}
			disabled={loading}
			style={styles.buttonContainer}
		>
			<LinearGradient
				colors={['#d9534f', '#428bca']}
				start={{ x: 0.0, y: 0.0 }}
				end={{ x: 1.0, y: 1.0 }}
				style={styles.linearGradient}
			>
				{loading ? (
					<>
						<Text style={styles.text}>{loading ? 'AGUARDE...' : title}</Text>
						<ActivityIndicator color={theme.colors.neutralTheme.white} />
					</>
				) : (
					<Text style={styles.text}>{title}</Text>
				)}
			</LinearGradient>
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	buttonContainer: {
		width: '100%',
		margin: 8,
	},
	text: {
		color: theme.colors.neutralTheme.white,
		fontFamily: 'Poppins-Bold',
		marginRight: 8,
	},
	linearGradient: {
		borderRadius: 5,
		borderColor: theme.colors.neutralTheme.white,
		borderWidth: 0.3,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
})
