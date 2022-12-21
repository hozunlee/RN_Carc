import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IProps {
  title: string;
  onPress: () => void;
  buttonStyle: object;
  buttonType: number;
}

export const ButtonTypes = {
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR',
};

const Colors = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#f59e0b', 'tomato'],
};

const Button = ({
  title,
  onPress,
  buttonStyle,
  buttonType = 'NUMBER',
}: IProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        return [
          styles.button,
          {
            backgroundColor: Colors[buttonType][0],
          },
          pressed && { backgroundColor: Colors[buttonType][1], opacity: 0.3 },
          buttonStyle,
        ];
      }}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSIze: 50,
    color: '#ffffff',
  },
});
