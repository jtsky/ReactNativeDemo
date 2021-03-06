/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
//var ToastAndroid = React.ToastAndroid;
var {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    } = React;

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 5;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;



var Loadding = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies.................
                </Text>
            </View>
        );
    }
});

var HelloWorld = React.createClass({
    getInitialState: function () {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },

    componentDidMount: function () {
        this.fetchData();
    },

    fetchData: function () {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    },

    render: function () {
        //ToastAndroid.show('aaaa',ToastAndroid.SHORT);
        if (!this.state.loaded) {
            return (<Loadding/>);
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.MovieItem }
                style={styles.listView}
            />
        );
    },

    MovieItem : function (movie){
        return (<View style={styles.container}>
            <Image
                source={{uri: movie.posters.thumbnail}}
                style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.year}>{movie.year}</Text>
            </View>
        </View>);

    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    listView: {
        paddingTop: 5,
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
