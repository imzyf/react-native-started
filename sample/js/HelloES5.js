import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// ES5 方式
const HelloES5 = React.createClass({
    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    Welcome to React Native! - {this.props.name}
                </Text>
            </View>
        );
    }
});
module.exports = HelloES5;

const styles = StyleSheet.create({
    welcome: {
        fontSize: 15,
        textAlign: 'center',
        margin: 5,
        color: 'red',
    },
});
