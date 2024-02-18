import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

interface IPrimaryButtonProps {
  readonly title: string;
  readonly onPress: () => void;
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.primaryButtonContainer}>
        <Text style={styles.primaryButtonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { PrimaryButton };
