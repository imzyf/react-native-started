import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class LifecycleComponent extends Component {

    static defaultProps() {
        console.log('----- defaultProps -----');
    };

    constructor(props) {
        console.log('----- constructor -----');
        super(props);

    }

    componentWillMount() {
        console.log('----- componentWillMount -----');
    }

    componentDidMount() {
        console.log('----- componentDidMount -----');
    }

    componentWillReceiveProps(nextProps) {
        console.log('----- componentWillReceiveProps -----');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('----- shouldComponentUpdate -----');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('----- componentWillUpdate -----');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('----- componentDidUpdate -----');
    }

    componentWillUnmount() {
        console.log('----- componentWillUnmount -----');
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    LifecycleComponent {'\n'}
                    Cmd+R 选择 `Remote JS Debbugging` 查看 console.log
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    welcome: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    },
});
