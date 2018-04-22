package com.google.firebase.api.demo.controller;


import com.google.firebase.api.demo.client.FirebaseClient;
import com.google.firebase.api.demo.dto.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class GoogleController {

    @Value("${firebase.googleapi.key:null}")
    private String authorizationKey;

    @Autowired
    private FirebaseClient firebaseClient;

    @RequestMapping(
            value = "/fcm/send",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    public String sendPushNotification(@RequestBody final Message message) {
        log.info("Message: {} ", message);
        return firebaseClient.sendPushNotification(authorizationKey, message);
    }
}
