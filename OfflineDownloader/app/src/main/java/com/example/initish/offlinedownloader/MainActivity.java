package com.example.initish.offlinedownloader;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.ExecutionException;

public class MainActivity extends AppCompatActivity {

    private Button button;


    public class DownloadTask extends AsyncTask<String, Void, String> {

        @Override
        protected String doInBackground(String... urls) {

            String result="";
            URL url;
            HttpURLConnection httpURLConnection=null;

            try {
                url = new URL(urls[0]);

                httpURLConnection = (HttpURLConnection) url.openConnection();
                InputStream in = httpURLConnection.getInputStream();
                InputStreamReader reader = new InputStreamReader(in);

                int data=reader.read();

                while(data != -1){

                    char current = (char)data;
                    result+=current;
                    data = reader.read();
                }
               return result;
            }
            catch (Exception e){
                e.printStackTrace();
                return "Failed";
            }

        }
    }



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        button = findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                DownloadTask task = new DownloadTask();
                String result=null;
                try {
                    result = task.execute("https://gist.githubusercontent.com/agrlayush/f8df33035abf9c6d78b7311fc0403034/raw/145f12656e6b559748907bf3d2cfaf0dcf138351/task2_response_gdg.json").get();

                    JSONObject jsonObj = new JSONObject(result);

                } catch (ExecutionException e) {
                    e.printStackTrace();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                Log.i("JSON data is ",result);

            }
        });
    }
}
