package com.mymodules.mandarine.controller;

import com.mymodules.mandarine.dto.PurchaseResponseDto;
import com.mymodules.mandarine.service.PurchaseService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
@AllArgsConstructor
public class ShopController {

    PurchaseService purchaseService;

    @PostMapping("/purchase")
    public ResponseEntity<PurchaseResponseDto> purchase (@RequestParam Long userId, @RequestParam Long productId, @RequestParam Long quantity){


        purchaseService.purchase(userId, productId, quantity);

        return ResponseEntity.ok(new PurchaseResponseDto());
    }
}
