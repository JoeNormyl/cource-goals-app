import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
	return (
		<View style={styles.listItemContainer}>
			<View style={styles.listItem}>
				<Text style={styles.textStyles}>📌 {props.title}</Text>
			</View>
			<View style={styles.deleteButton}>
				<TouchableOpacity onPress={() => props.onDelete(props.id)}>
					<Text style={styles.deleteText}>🗑️</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	listItemContainer: {
		width: "100%",
		padding: 5,
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "khaki",
		borderColor: "saddlebrown",
		borderWidth: 1,
		borderRadius: 15,
	},
	listItem: {
		flex: 1,
		paddingLeft: 10,
		paddingRight: 20,
		alignItems: "flex-start",
	},
	textStyles: {
		color: "saddlebrown",
		fontSize: 16,
	},
	deleteButton: {
		alignItems: "center",
		justifyContent: "center",
		margin: 5,
	},
	deleteText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "red",
	},
});

export default GoalItem;
