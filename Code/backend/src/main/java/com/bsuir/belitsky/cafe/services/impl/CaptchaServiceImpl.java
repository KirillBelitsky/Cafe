package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.config.CaptchaSettings;
import com.bsuir.belitsky.cafe.entity.CaptchaResponse;
import com.bsuir.belitsky.cafe.services.CaptchaService;
import com.bsuir.belitsky.cafe.util.exceptions.InvalidCaptchaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

import java.net.URI;
import java.util.regex.Pattern;

import static com.bsuir.belitsky.cafe.config.SecurityConstants.VERIFY_CAPTCHA_URL;

@Service
public class CaptchaServiceImpl implements CaptchaService {

    private final Pattern RESPONSE_PATTERN = Pattern.compile("[A-Za-z0-9_-]+");

    private CaptchaSettings captchaSettings;
    private RestTemplate restTemplate;
    private WebClient webClient;

    @Autowired
    public CaptchaServiceImpl(CaptchaSettings captchaSettings, RestTemplate restTemplate,
                              WebClient webClient) {
        this.captchaSettings = captchaSettings;
        this.restTemplate = restTemplate;
        this.webClient = webClient;
    }

    @Override
    public void processResponse(String response) {
        System.out.println(captchaSettings.getSecret());
        if (!isResponseValdid(response)) {
            throw new InvalidCaptchaException("Invalid captcha!");
        }

        URI verifyUri = URI.create(String.format(VERIFY_CAPTCHA_URL,
                captchaSettings.getSecret(), response));

        CaptchaResponse captchaResponse = restTemplate.getForObject(verifyUri, CaptchaResponse.class);

        // this code should be instead above, but i don't know why don't work(all correct)
//        CaptchaResponse captchaResponse = this.webClient.get()
//                .uri(uriBuilder -> uriBuilder
//                        .path("https://www.google.com/recaptcha/api/siteverify/")
//                        .queryParam("response", response)
//                        .queryParam("secret", captchaSecret)
//                        .build())
//                .retrieve()
//                .bodyToMono(CaptchaResponse.class)
//                .block();

        if (captchaResponse == null || captchaResponse.hasClientError()) {
            throw new InvalidCaptchaException("Captcha was not successfully validated!");
        }
    }

    private boolean isResponseValdid(String response) {
        return StringUtils.hasLength(response) && RESPONSE_PATTERN.matcher(response).matches();
    }
}

