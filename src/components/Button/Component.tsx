import React, { ReactChild, memo } from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";

import styles from "./styles";

interface Props {
  style?: ViewStyle[];
  children: ReactChild;
  to?: any;
  reverse?: boolean;
  custom?: boolean;
}

const Component = ({ style, children, to, reverse, custom }: Props) => {
  return (
    <TouchableOpacity
      onPress={to}
      style={[
        style,
        !custom && (reverse ? styles.buttonReverse : styles.button),
      ]}
    >
      {custom ? (
        children
      ) : (
        <Text style={reverse ? styles.textReverse : styles.text}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Component);
