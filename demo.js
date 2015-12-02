/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
'use strict';

var React = require('react-native');
var Log = require('./my_module/log');
var Net = require('./my_module/net');
var {
    AppRegistry,
    StyleSheet,
    Text,
    Platform,
    ToastAndroid,
    DeviceEventEmitter
    } = React;

var Name = React.createClass({
    getDefaultProps: function () {
        console.log("Name getDefaultProps");
        return null;
    },
    getInitialState: function () {
        console.log("Name getInitialState");
        return {result: ""};
    },
    componentWillMount: function () {
        console.log("Name componentWillmount");
    },

    getRsultFromAndroid: function () {
        Net.getResult('http://www.baidu.com', (code, result)=> {
            var a = code + "  " + result;
            this.setState({result: a});
        })
    },

    testLogFromAndroid: function () {
        Log.i(Log.TAG, 'hs');
        //直接使用DeviceEventEmitter进行事件注册
        DeviceEventEmitter.addListener('logInConsole', (e)=> {
            console.log(e)
        })
    },

    render: function () {
        console.log("Name render");
        return (
            <Text>
                {/*Hello,{Platform.OS}*/}
                {this.state.result}
                {/*ToastAndroid.show('提示的信息', ToastAndroid.SHORT)*/}
                {/*Hello,{this.props.name? this.props.name:"None!"}*/}
            </Text>
        );
    },
    componentDidMount: function () {
        console.log("Name componentDidMount");
        this.getRsultFromAndroid();
        this.testLogFromAndroid();
    },
    componentWillReceiveProps: function (nextProps) {
        console.log("Name componentWillReceiveProps");
        console.log(nextProps);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log("Name shouldComponentUpdate");
        return true;
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log("Name componentWillUpdate");
    },
    componentDidUpdate: function (prevProps, prevState) {
        console.log("Name conponentDidUpdate");
    },
    componentWillUnmount: function () {
        console.log("Name componentWillUnmount");
    },
});

var AwesomeProject = React.createClass({
    //在组件类创建的时候调用一次，然后返回值被缓存下来。
    getDefaultProps: function () {
        console.log("getDefaultProps");
        return null;
    },
    //初始化状态,在组件挂载之前调用一次。返回值将会作为 this.state 的初始值。
    getInitialState: function () {
        console.log("getInitialState");
        return {name: "a"};
        //必须有返回值，可以是NULL或者一个对象。
    },
    //组件将要被渲染
    componentWillMount: function () {
        console.log("componentWillmount");

    },
    //渲染视图
    render: function () {
        console.log("render");

        return (
            <Name name={this.state.name}></Name>
        );
        //你也可以返回 null 或者 false 来表明不需要渲染任何东西
    },
    //渲染视图完成后
    componentDidMount: function () {
        console.log("componentDidMount");

        this.loadDataToSetState();
    },
    //组件接收到新属性,在初始化渲染的时候，该方法不会调用。
    componentWillReceiveProps: function (nextProps) {
        console.log("componentWillReceiveProps");
        //console.log(nextProps);
    },
    //组件是否需要更新
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log("shouldComponentUpdate");
        //console.log(nextProps+"|"+nextState);
        return true;
    },
    //组件将要被更新
    componentWillUpdate: function (nextProps, nextState) {
        console.log("componentWillUpdate");
        //console.log(nextProps+"|"+nextState);
    },
    //组件更新完毕
    componentDidUpdate: function (prevProps, prevState) {
        console.log("conponentDidUpdate");
        //console.log(prevProps+"|"+prevState);
    },

    //组件被销毁之前，做清理操作
    componentWillUnmount: function () {
        console.log("componentWillUnmount");
    },

    loadDataToSetState: function () {
        console.log("loadDataToSetState");
        this.setState({
            name: "lizhangqu"
        })
    },


});

var styles = StyleSheet.create({});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);