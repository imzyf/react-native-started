import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class LifecycleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            life: 0,
        };
        console.log('----- constructor -----');
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
        return true;
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
        console.log('----- render -----');
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    LifecycleComponent {'\n'}
                    Cmd+R 选择 `Remote JS Debbugging` 查看 console.log
                </Text>
                <Text
                    onPress={() => {
                        this.setState({
                            life: this.state.life + 1,
                        })
                    }}
                >click me! +1s</Text>
                <Text>my life: {this.state.life} s</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
    },

    welcome: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    },
});
