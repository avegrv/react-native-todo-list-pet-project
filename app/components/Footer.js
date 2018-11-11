import React, {Component, PropTypes} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default class Footer extends Component {

    render() {
        const {onRemoveCompleted} = this.props

        return (
            <TouchableOpacity style={styles.container} onPress={onRemoveCompleted}>
                <Text style={styles.text}>Remove completed items</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: 'center',
    },
    text: {
        color: '#CD5C5C'
    }
})
