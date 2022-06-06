import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {useState} from 'react';
import InputButton from './components/InputButton';

const CalculatorHome = () => {
  const [input, setInput] = useState('0');
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [previousInputValue, setPreviousInputValue] = useState('0');

  const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+'],
  ];
  const onPress = input => {
    console.log('on press');
    alert(input);
  };

  const onInputButtonPressed = input => {
    switch (typeof input) {
      case 'number':
        return handleNumberInput(input);
      case 'string':
        return handleStringInput(input);
    }
  };
  const handleNumberInput = num => {
    let inputValue = input * 10 + num;
    setInput(inputValue);
  };

  const handleStringInput = str => {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        setSelectedSymbol(str);
        setPreviousInputValue(input);
        setInput('0');
        break;
      case '=':
        let symbol = selectedSymbol;
        if (!symbol) {
          return;
        }

        setPreviousInputValue('0');
        setInput(eval(previousInputValue + symbol + input)),
          setSelectedSymbol(null);
        break;
    }
  };
  const renderInputButtons = () => {
    let views = [];

    for (var r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];

      let inputRow = [];
      for (var i = 0; i < row.length; i++) {
        let input = row[i];

        inputRow.push(
          <InputButton
            highlight={selectedSymbol === input}
            value={input}
            key={r + '-' + i}
            onPress={() => {
              onInputButtonPressed(input);
            }}
          />,
        );
      }

      views.push(
        <View style={style.inputRow} key={'row-' + r}>
          {inputRow}
        </View>,
      );
    }

    return views;
  };
  return (
    <>
      <View style={style.rootContainer}>
        <View style={style.displayContainer}>
          <Text style={style.displayText}>{input}</Text>
        </View>
        <View style={style.inputContainer}>{renderInputButtons()}</View>
      </View>
    </>
  );
};

export default CalculatorHome;
