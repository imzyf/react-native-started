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
// 第一个为 default export，{} 中为其他 export 的
import ExportComponent, {myName, myAge, sum} from './ExportComponent'
import PropsTest from './PropsTest'

export default class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            remove: false,
            doubleAge: 0,
        })
    }

    render() {
        const lifecycleComponent = this.state.remove ? null : <LifecycleComponent/>;
        const lifecycleTipText = this.state.remove ? 'mount' : 'unmount';

        // 延展操作
        var boyProps = {name: 'Liming', age: 6, sex: 'boy'};
        // 结构赋值
        var {name, age} = boyProps;

        return (
            <View style={styles.container}>
                <Hello name="ES6"/>
                <HelloES5 name="ES5"/>
                <HelloFunc name="函数式"/>

                {lifecycleComponent}
                <Text
                    onPress={() => {
                        this.setState({
                            remove: !this.state.remove
                        })
                    }}
                >click me: {lifecycleTipText} LifecycleComponent.</Text>

                <ExportComponent/>
                <Text onPress={() => {
                    this.setState({
                        doubleAge: sum(myAge, myAge),
                    })
                }}>age:{myAge}, double age click me:{this.state.doubleAge}</Text>

                <PropsTest name='zyf' age={24} sex="男"/>
                <PropsTest age={25}/>
                <PropsTest {...boyProps}/>
                {/* Warning name of type number*/}
                <PropsTest name={10} age={age}/>

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