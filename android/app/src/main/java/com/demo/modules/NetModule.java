package com.demo.modules;

import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class NetModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "Net";

    public NetModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void getResult(final String url, final Callback callback) {
        Log.e("TAG", "正在请求数据");
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    String result = url + "这是结果";
                    callback.invoke("200", result);
                } catch (Exception e) {
                    e.printStackTrace();
                }

            }
        }).start();
    }


}