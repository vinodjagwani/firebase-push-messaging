
package com.google.firebase.api.demo.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Message {

    @JsonProperty("notification")
    private Notification notification;

    @JsonProperty("to")
    private String to;

    @JsonProperty("priority")
    private String priority;

}
