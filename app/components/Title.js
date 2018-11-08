import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: 'whitesmoke'
    }
})

export default class Title extends Component {

    render() {
        return (
            <Text style={styles.text}>Todo list</Text>
        )
    }
}
