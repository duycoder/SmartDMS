import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
class Word extends Component {
    memoryWord() {
        this.props.dispatch({
            type: 'TOGGLE_MEMORIZED',
            id: this.props.myWord.id
        })
    }

    showWord() {
        this.props.dispatch({
            type: 'SHOW',
            id: this.props.myWord.id
        });
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { en, vn, memorized, isShow } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const opacity = isShow ? 1 : 0;
        const memorizedButtonText = memorized ? 'forget' : 'memorized';
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text, { textDecorationLine, opacity }]}>
                        {en}
                    </Text>
                    <Text style={styles.text}>
                        {vn}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={
                        this.memoryWord.bind(this)
                    }>
                        <Text style={styles.buttonText}>
                            {memorizedButtonText}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={
                        this.showWord.bind(this)
                    }>
                        <Text style={styles.buttonText}>Show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#27ae60',
        padding: 10,
        margin: 10
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }, buttonContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }, button: {
        padding: 10,
        backgroundColor: '#95a5a6',
        borderRadius: 5
    }, buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default connect()(Word);