package com.rescue.backend.DTOS.citizen.request;

import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

public record RescueRequest (
        String type,
        String address,
        BigDecimal latitude,
        BigDecimal longitude,
        String description,
        String name,
        String phone,
        String additionalLink,
        String imgUrl
) {

}
