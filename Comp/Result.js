import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Result extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <View style={styles.containner}>
        <View style={{flexDirection: 'row', columnGap: 20}}>
        <Text style={{color: 'black', fontSize: 20}}>ผลลัพธ์</Text>
        <Text style={styles.result}>{result}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containner: {
    flex: 0.4,
  },

  result: {
    fontSize: 30,
    color: 'black',
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    marginBottom: 10,
    backgroundColor: '#dcdcdc',
    textAlign: 'center'
  }
});

export default Result;
