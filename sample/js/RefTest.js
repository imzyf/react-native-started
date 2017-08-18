import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';

import StateTest from './StateTest'

export default class RefTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balloonSize: 0,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tip}
                      onPress={() => {
                          this.setState({
                              balloonSize: this.refs.refStateTest.getSize(),
                          })
                      }}>
                    click me to knew the ballonSize: {this.state.balloonSize}
                </Text>

                <StateTest ref='refStateTest'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'blue',
    },

    tip: {
        fontSize: 14,
        textAlign: 'center',

    },
});
