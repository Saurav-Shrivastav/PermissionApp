import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Button(props) {
	return (
		<TouchableOpacity style={styles.container}>
			<Text style={styles.text2}>{props.buttonText}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 11,
		borderColor: "rgba(208,2,27,1)",
		borderWidth: 2,
		elevation: 0,
		shadowOffset: {
			height: 0,
			width: 0
		}
	},
	text2: {
		color: "rgba(253,253,253,1)",
		textAlign: "center",
		justifyContent: "center",
		margin: "auto",
		padding: 10,
		fontSize: 18
	}
});

export default Button;
