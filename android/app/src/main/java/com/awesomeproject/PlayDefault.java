package com.awesomeproject;

import static io.invertase.firebase.app.ReactNativeFirebaseApp.getApplicationContext;

import android.annotation.SuppressLint;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.provider.Settings;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PlayDefault extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    public PlayDefault(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "PlayDefault";
    }

    @ReactMethod
    public void notificationTone() {
        Log.d("notificationTone", "Yes");
        try {
            Uri notification = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
            Ringtone r = RingtoneManager.getRingtone(getApplicationContext(), notification);
            r.play();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void getPhoneID(Promise response) {
        try {
            @SuppressLint("HardwareIds")
            String id = Settings.Secure.getString(reactContext.getContentResolver(), Settings.Secure.ANDROID_ID);
            response.resolve(id);
        } catch (Exception e) {
            response.reject("Error", e);
        }
    }

}