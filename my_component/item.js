/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    Image,
    StyleSheet,
    Text,
    View,
    } = React;

var Item = React.createClass({
    render: function () {
        var outStyle = {
            width: parseInt(this.props.width),
            height: parseInt(this.props.height),
            backgroundColor: this.props.color,
        }
        var img = this.props.img;
        var text = this.props.text;
        return (
            <View style={[styles.item,outStyle]}>
                <Image style={styles.image} source={{uri:img}}></Image>
                <Text style={styles.text}>{text}</Text>
            </View>);
    }
});

var styles = StyleSheet.create({
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    image: {
        width: 48,
        height: 48,
    },
    text: {
        color: '#ffffff',
        alignItems: 'center'
    }
});

module.exports = Item;
