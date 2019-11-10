package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.UserDto;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @RequestMapping(value = "/ky", method = RequestMethod.GET)
    @ResponseBody
    public String getMessage() {
        return "ky Kirill!";
    }
}
