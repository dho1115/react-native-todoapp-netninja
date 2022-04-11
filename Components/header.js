import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>WELCOME TO MY TODO LIST!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 85,
        paddingTop: 35,
        backgroundColor: 'maroon'
    },
    title: {
        color: 'white',
        fontWeight: 'bolder',
        textAlign: 'center'
    }
})

export default Header
