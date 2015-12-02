package com.demo.modules;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.Map;

import javax.annotation.Nullable;


public class LogModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "LogModule";
    private static final String TAG_KEY = "TAG";
    private static final String TAG_VALUE = MODULE_NAME;

    public LogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = MapBuilder.newHashMap();
        constants.put(TAG_KEY, TAG_VALUE);
        return constants;
    }

    @ReactMethod
    public void i(String tag, String message) {
        Log.i(tag, message);
        //发送事件给javascript层
        WritableMap params = Arguments.createMap();
        params.putString("TAG", tag);
        params.putString("MSG", message);
        getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("logInConsole", params);//对应的javascript层的事件名为logInConsole，注册该事件即可进行回调
    }
}
