package com.bsuir.belitsky.cafe.config;

public class SecurityConstants {
    public static final long ACCESS_TOKEN_VALIDITY_SECONDS = 36000 * 60 * 60;
    public static final String SIGNING_KEY = "devglan123r";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";

    public static final int VERIFICATION_TOKEN_EXPIRATION = 60 * 25;
    public static final String EMAIL_USERNAME = "forfeedbackmail@gmail.com";
}
