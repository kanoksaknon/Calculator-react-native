// App.js
import React, { useState } from 'react';
import { View , StyleSheet} from 'react-native';
import Calc from './Comp/Calc';
import Result from './Comp/Result';

const App = () => {
  const [calcResult, setCalcResult] = useState('');

  return (
    <View style={styles.container}>
      <Calc onResult={setCalcResult} />
      <Result result={calcResult} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  }

});
export default App;
