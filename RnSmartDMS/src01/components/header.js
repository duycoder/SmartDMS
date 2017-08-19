import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity
} from 'react-native';

export default class Header extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        ENGLISH ONLINE
                    </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    titleContainer: {
        justifyContent: 'center',

    },
    titleText: {
        color: '#fff',
        fontSize: 20
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#fff'
    }
});