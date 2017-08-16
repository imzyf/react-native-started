import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class PropsTest extends Component {

    // 定义默认 props
    static defaultProps = {
        name: 'default-yifan',
        sex: 'male',
    };

    // 检测 props 类型
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.props.name},{this.props.age},{this.props.sex}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'red',
    },

    welcome: {
        fontSize: 14,
        textAlign: 'center',
        margin: 5,
    },
});
