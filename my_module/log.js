'use strict';
var { NativeModules } = require('react-native');
var RCTLog = NativeModules.LogModule;

var Log = {
    TAG : RCTLog.TAG,
    i: function (tag:String, msg:String):void {
        console.log(tag, msg);
        RCTLog.i(tag, msg);
    }
};

module.exports = Log;