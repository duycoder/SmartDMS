import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

class Footer extends Component {
    activeButton(status = 'SHOW_ALL') {
        if (status === this.props.filterStatus) {
            return {
                color: '#f1c40f',
                fontWeight: 'bold'
            }
        }
        return styles.buttonText;
    }

    setFilterStatus(actionType) {
        this.props.dispatch({
            type: actionType
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() =>
                    this.setFilterStatus('FILTER_SHOW_ALL')
                }>
                    <Text style={this.activeButton('SHOW_ALL')}>
                        SHOW ALL
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    this.setFilterStatus('FILTER_MEMORIZED')
                }>
                    <Text style={this.activeButton('MEMORIZED')}>
                        MEMORIZED
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    this.setFilterStatus('FILTER_NEED_PRACTICE')
                }>
                    <Text style={this.activeButton('NEED_PRACTICE')}>
                        NEED PRACTICE
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})
mapStateToProps = (state) => {
    return {
        filterStatus: state.filterStatus
    }
}

export default connect(mapStateToProps)(Footer);