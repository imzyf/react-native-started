import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class StateTest extends Component {

    // 初始化 方法一
    state = {
        balloonSize: 10,
    };

    // 初始化 方法二（推荐）
    constructor(props) {
        super(props);
        this.state = {
            balloonSize: 30,
        }
    }

    getSize(){
        return this.state.balloonSize;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tip}
                      onPress={() => {
                          this.setState({
                              balloonSize: this.state.balloonSize + 5,
                          })
                      }}>
                    bigger +
                </Text>
                <Text style={styles.tip}
                      onPress={() => {
                          this.setState({
                              balloonSize: this.state.balloonSize - 5,
                          })
                      }}>
                    littler -
                </Text>

                <Image
                    source={require('./image/balloon.png')}
                    style={{
                        height: this.state.balloonSize,
                        width: this.state.balloonSize,
                    }}
                />

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
