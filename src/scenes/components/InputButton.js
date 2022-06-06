
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import style from './style';

const InputButton = (props) => {
    
        return (
            <TouchableHighlight style={[style.inputButton, props.highlight ? style.inputButtonHighlighted : null]} onPress={()=>{props.onPress()}}>
                <Text style={style.inputButtonText}>{props.value}</Text>
            </TouchableHighlight>
        )
    
    
};
export default InputButton;