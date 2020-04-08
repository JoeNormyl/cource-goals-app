import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal("");
	};

	const cancelGoalHandler = () => {
		props.onCancel();
		setEnteredGoal("");
	};

	return (
		<Modal visible={props.visible} animationType={"slide"}>
			<View style={styles.screen}>
				<View style={styles.modalHeaderContainer}>
					<Text style={styles.modalHeaderText}>Enter your goal: </Text>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder="Course Goal"
						style={styles.inputStyles}
						onChangeText={goalInputHandler}
						value={enteredGoal}
					/>
					<View style={styles.modalButtonContainer}>
						<View style={styles.button}>
							<Button title="Cancel" color="red" onPress={cancelGoalHandler} />
						</View>
						<View style={styles.button}>
							<Button title="Add" onPress={addGoalHandler} />
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingVertical: "25%",
		// justifyContent: "space-around",
	},
	modalHeaderContainer: {
		width: "100%",

		alignItems: "center",
		justifyContent: "flex-end",
	},
	modalHeaderText: {
		fontSize: 36,
		padding: "5%",
		color: "darkslategrey",
		textAlignVertical: "center",
	},
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	inputStyles: {
		width: "80%",
		borderColor: "darkslategrey",
		borderWidth: 2,
		padding: 10,
		margin: 20,
	},
	modalButtonContainer: {
		width: "80%",
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	button: {
		width: "30%",
	},
});

export default GoalInput;
