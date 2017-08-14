import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// 函数式 方式
// 无状态，不能使用 this，没有完整生命周期，可以使用 props
function HelloFunc(props) {
    return (
        <View>
            <Text style={styles.welcome}>
                Welcome to React Native! - {props.name}
            </Text>
        </View>
    );
}

module.exports = HelloFunc;

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'green',
    },
});
