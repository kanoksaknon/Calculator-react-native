import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

class Calc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        num1: '',
        num2: '',
        operation: null
      };
    }
  
    handleOperation = (selectedOperation) => {
      this.setState({ operation: selectedOperation });
    };
  
    resetResult = () => {
      this.setState({ num1: '', num2: '', operation: null });
    }
  
    handleCalculation = () => {
  
      const { num1, num2, operation } = this.state;
      let calculatedResult;
      switch (operation) {
        case '+':
          calculatedResult = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          calculatedResult = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          calculatedResult = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          calculatedResult = parseFloat(num1) / parseFloat(num2);
          break;
      }
  
      this.props.onResult(`${calculatedResult}`);
    };
  
    render() {
      const { num1, num2 } = this.state;
      return (
        <View style={styles.container}>
          <View style={styles.text101}>
          <TextInputs 
            num1={num1}
            num2={num2}
            setNum1={text => this.setState({ num1: text })}
            setNum2={text => this.setState({ num2: text })}
          />
          </View>
          
          <Buttons handleOperation={this.handleOperation} />

        <View style={styles.button1}>
          <View style={{borderColor: 'black', borderWidth: 2}}>
          <Button title="Calc" color={'#9acd32'} onPress={this.handleCalculation} />
          </View>
          <View style={{borderColor: 'black', borderWidth: 2}}>
          <Button title="Clear" color={'#fa8072'} onPress={this.resetResult} />
          </View>
        </View>
        </View>
      );
    }
  }
  

class Buttons extends Component {
  render() {
    const { handleOperation } = this.props;
    return (
      <View style={styles.button}>
        <View style={styles.buttonItem}>
        <Button title="+" color={'#87cefa'} onPress={() => handleOperation('+')} />
        </View>
        <View style={styles.buttonItem}>
        <Button title="-" color={'#87cefa'} onPress={() => handleOperation('-')} />
        </View>
        <View style={styles.buttonItem}>
        <Button title="*" color={'#87cefa'} onPress={() => handleOperation('*')} />
        </View>
        <View style={styles.buttonItem}>
        <Button title="/" color={'#87cefa'} onPress={() => handleOperation('/')} />
        </View>
      </View>
    );
  }
}

class TextInputs extends Component {
  render() {
    const { num1, num2, setNum1, setNum2 } = this.props;
    return (
      <View>
        <View style={{flexDirection: 'row', columnGap: 33 }}>
        <Text style={{color: 'black', fontSize: 20}}>ตัวตั้ง</Text>
        <TextInput
          style={styles.textInput}
          value={num1}
          onChangeText={text => setNum1(text)}
          keyboardType="numeric"
          placeholder='0'
          placeholderTextColor={'black'}
          color={'black'}
          textAlign='center'
        />
        </View>
        <View style={{flexDirection: 'row', columnGap: 20}}>
        <Text style={{color: 'black', fontSize: 20}}>ตัวบวก</Text>
        <TextInput
          style={styles.textInput}
          value={num2}  
          onChangeText={text => setNum2(text)}
          keyboardType="numeric"
          placeholder='0'
          placeholderTextColor={'black'}
          color={'black'}
          textAlign='center'
        />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  textInput: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    marginBottom: 10,
    backgroundColor: '#dcdcdc',
    fontSize: 20
  },

  text101:{
    flexDirection: 'column',
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'stretch',
    columnGap: 20,

  },
  button1: {
    flexDirection: 'column',
    rowGap: 20,
    width: 300,
    height: 'auto',
  },
  buttonItem: {
    width: 80,
    height: 'auto',
    borderColor: 'black',
    borderWidth: 2,
  },

  Txtrow:{
    flexDirection: 'flex-start',
  }
});

export default Calc;
