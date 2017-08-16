import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Platform,
} from 'react-native'
import Hello from './HelloComponent'
import HelloES5 from './HelloES5'
import HelloFunc from './HelloFunc'
import LifecycleComponent from './LifecycleComponent'

export default class Setup extends Component {
    constructor(props){
        super(props);
        this.state=({
            remove:false
        })
    }

    render() {
        const lifecycleComponent = this.state.remove?null:<LifecycleComponent/>;
        const lifecycleTipText = this.state.remove?'mount':'unmount';

        return (
            <View style={styles.container}>
                <Hello name="ES6"/>
                <HelloES5 name="ES5"/>
                <HelloFunc name="函数式"/>
                {lifecycleComponent}
                <Text
                    onPress={()=>{
                        this.setState({
                            remove:!this.state.remove
                        })
                    }}
                >click me: {lifecycleTipText} LifecycleComponent.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
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