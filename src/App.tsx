import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
// import About from '../components/About';
// import Button from '../components/Button';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>시작합니다 무엇을?</Text>
      {/* {/* <About name='이혜미' lee1='leeho' /> */}
      <Text>{count}</Text>
      <Button
        title='+'
        onPress={() => setCount((prev) => prev + 1)}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.OPERATOR}
      />

      <Button
        title='-'
        onPress={() => setCount((prev) => prev - 1)}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.OPERATOR}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
