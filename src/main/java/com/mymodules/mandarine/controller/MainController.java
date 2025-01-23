package com.mymodules.mandarine.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {


    @GetMapping("/")
    public String mainPage() {
        System.out.println("바보멍청이");
        return "index"; // src/main/resources/templates/index.html
    }

}
