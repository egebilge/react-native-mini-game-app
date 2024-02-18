import React from "react";
import { styles } from "./styles";
import { KeyboardTypeOptions, TextInput } from "react-native";

interface IPrimaryTextInputProps {
  readonly value: string | number | undefined;
  readonly onChangeText: (text: string) => void;
  readonly placeholder?: string;
  readonly maxLength?: number;
  readonly keyboardType?: KeyboardTypeOptions | undefined;
}

const PrimaryTextInput: React.FC<IPrimaryTextInputProps> = (props) => {
  return (
    <TextInput
      style={styles.primaryTextInput}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value ? props.value.toString() : ""}
      autoComplete="off"
      autoCorrect={false}
      maxLength={props.maxLength}
      keyboardType={props.keyboardType}
      autoCapitalize="none"
    />
  );
};

export { PrimaryTextInput };
