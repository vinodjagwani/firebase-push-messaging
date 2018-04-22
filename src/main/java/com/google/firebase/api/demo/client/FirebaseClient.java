package com.google.firebase.api.demo.client;


import com.google.firebase.api.demo.dto.Message;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(url = "${firebase.googleapi.url}", value = "firebase-googleapi")
public interface FirebaseClient {

    @RequestMapping(
            value = "/fcm/send",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    String sendPushNotification(@RequestHeader("Authorization") final String authorization,
                                @RequestBody final Message message);
}
