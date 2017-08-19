import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Word from './word';
import Footer from './footer';
import Header from './header';
class Main extends Component {
    getListWord(filterStatus = this.props.filterStatus) {
        let result = this.props.arrWords;
        if (filterStatus === 'MEMORIZED') {
            result = result.filter(e => e.memorized);
        }
        else if (filterStatus === 'NEED_PRACTICE') {
            result = result.filter(e => !e.memorized);
        }
        return result;
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Số lượng: {this.getListWord().length} từ
                    </Text>
                </View>
                <View style={styles.wordContainer}>
                    <FlatList
                        data={this.getListWord()}
                        renderItem={({ item }) =>
                            <Word myWord={item} />
                        }
                        keyExtractor={(item, index) => (index)}
                    />
                </View>
                <View style={styles.footerContainer}>
                    <Footer />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
        textDecorationLine: 'underline'
    },
    container: {
        flex: 1,
        backgroundColor: '#2ecc71'
    }, wordContainer: {
        flex: 9
    }, footerContainer: {
        flex: 1
    }
})

mapStateTopProps = (state) => {
    return {
        filterStatus: state.filterStatus,
        arrWords: state.arrWords
    }
}
export default connect(mapStateTopProps)(Main);