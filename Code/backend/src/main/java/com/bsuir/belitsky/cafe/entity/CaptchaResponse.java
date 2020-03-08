package com.bsuir.belitsky.cafe.entity;

import com.fasterxml.jackson.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonPropertyOrder({
        "success",
        "challenge_ts",
        "hostname",
        "error-codes"
})
public class CaptchaResponse {

    @JsonProperty("success")
    private boolean success;

    @JsonProperty("challenge_ts")
    private String challenge_ts;

    @JsonProperty("hostname")
    private String hostname;

    @JsonProperty("error-codes")
    private ErrorCode[] errors;

    @JsonIgnore
    public boolean hasClientError() {
        if(errors == null)
            return false;

        for (ErrorCode error: errors) {
            switch (error) {
                case InvalidResponse:
                case MissingResponse:
                    return true;
            }
        }

        return false;
    }

    enum ErrorCode {
        MissingSecret, MissingResponse, InvalidSecret, InvalidResponse;

        private static Map<String, ErrorCode> errorMap = new HashMap<>();

        static {
            errorMap.put("missing-input-secret",   MissingSecret);
            errorMap.put("invalid-input-secret",   InvalidSecret);
            errorMap.put("missing-input-response", MissingResponse);
            errorMap.put("invalid-input-response", InvalidResponse);
        }

        @JsonCreator
        public static ErrorCode getErrorCode(String value) {
            return errorMap.get(value);
        }
    }

    @Override
    public String toString() {
        return "CaptchaResponse{" +
                "success=" + success +
                ", challenge_ts='" + challenge_ts + '\'' +
                ", hostname='" + hostname + '\'' +
                ", errors=" + Arrays.toString(errors) +
                '}';
    }
}
