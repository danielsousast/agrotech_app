import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../consts";

type SelectorProps = {
  text: string;
	active?: boolean;
	onPress: () => void
};

const Selector: React.FC<SelectorProps> = ({ text, onPress, active = false }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, {
			backgroundColor: active ? '#62CE38' : colors.shape
		}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Selector;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
		paddingVertical: 8,
    borderRadius: 15,
		marginRight: 16
  },
	text: {
		color: colors.text
	}
});
