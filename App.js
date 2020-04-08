import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Button,
	Text,
	// Allows for screen to scroll, but renders all items
	// Better if you want to scroll and have all rendered
	//	ScrollView,
	// Allows for scrolling, but only render's what's needed
	// Better for long lists or lengths of unknown length.
	FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = (goalTitle) => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ id: Math.random().toString(), value: goalTitle },
		]);
		setIsAddMode(false);
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	};

	const cancelGoalHandler = () => {
		setIsAddMode(false);
	};

	const randomColorStyles = () => {
		const myColor = randomRgb();
		return {
			width: "100%",
			padding: 5,
			marginVertical: 10,
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			backgroundColor: myColor,
			borderColor: "black",
			borderWidth: 1,
			borderRadius: 15,
		};
	};

	return (
		<View style={styles.screen}>
			<View>
				<Text style={styles.titleText}>Course Goals</Text>
			</View>
			<View style={styles.buttonStyles}>
				<Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
			</View>
			<GoalInput
				visible={isAddMode}
				onAddGoal={addGoalHandler}
				onCancel={cancelGoalHandler}
			/>
			<FlatList
				style={styles.listStyles}
				data={courseGoals}
				renderItem={(itemData) => (
					<View style={randomColorStyles()}>
						<GoalItem
							id={itemData.item.id}
							onDelete={removeGoalHandler}
							title={itemData.item.value}
						/>
					</View>
				)}
			/>
		</View>
	);
}

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
	screen: {
		padding: 40,
		height: "100%",
		width: "100%",
		// backgroundColor: "darkolivegreen",
		alignItems: "center",
	},
	titleText: {
		fontSize: 42,
		color: "darkslategrey",
	},
	buttonStyles: {
		margin: 10,
		marginVertical: 30,
	},
	listStyles: {
		width: "95%",
	},
});

// <View
// 	style={{
// 		padding: 50,
// 		flexDirection: "row",
// 		width: "80%",
// 		height: 300,
// 		alignSelf: "center",
// 		justifyContent: "space-around",
// 		alignItems: "stretch",
// 	}}
// >
// 	<View
// 		style={{
// 			backgroundColor: "red",
// 			flex: 1,
// 			// width: 100,
// 			// height: 100,
// 			justifyContent: "center",
// 			alignItems: "center",
// 		}}
// 	>
// 		<Text>1</Text>
// 	</View>
// 	<View
// 		style={{
// 			backgroundColor: "blue",
// 			flex: 2,
// 			// width: 100,
// 			// height: 100,
// 			justifyContent: "center",
// 			alignItems: "center",
// 		}}
// 	>
// 		<Text>2</Text>
// 	</View>
// 	<View
// 		style={{
// 			backgroundColor: "green",
// 			flex: 1,
// 			// width: 100,
// 			// height: 100,
// 			justifyContent: "center",
// 			alignItems: "center",
// 		}}
// 	>
// 		<Text>3</Text>
// 	</View>
// </View>
