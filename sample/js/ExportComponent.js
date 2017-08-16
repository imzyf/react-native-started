import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// 导出变量、常量
export var myName = 'yifan';
export const myWebsite = 'zyf.im';

const age = 24;
const sex = 'male';
export {age, sex}

// 导出方法
export function sum(a, b) {
    return a + b;
}

export default class ExportComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Export Component
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'green',
    },

    welcome: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    },
});
