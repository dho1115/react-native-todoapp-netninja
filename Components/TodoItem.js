import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function TodoItem({item, pressHandler}) {
    
    return (
        <TouchableOpacity style={Styles.item} onPress={() => pressHandler(item.key)}>
            <Text>{item.text}</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    item: {
        marginTop: 15,
        padding: 15,
        borderColor: '#bbb',
        borderWidth: 1.5,
        borderStyle: 'dashed',
        borderRadius: 11
    }
})

export default TodoItem
