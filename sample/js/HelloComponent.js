import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// ES6 方式 - 推荐使用
export default class HelloComponent extends Component {
    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    Welcome to React Native! - {this.props.name}
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
