package com.rescue.backend.service;

import com.rescue.backend.DTOS.citizen.request.RescueRequest;
import com.rescue.backend.model.Request;

import com.rescue.backend.model.User;
import com.rescue.backend.repository.RequestRepository;
import com.rescue.backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CitizenService {

    private final UserRepository userRepository;
    private final RequestRepository requestRepository;

    @Transactional
    public Request createRescueRequest(RescueRequest rescueRequest) {
        User user = userRepository.findByPhone(rescueRequest.phone())
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setPhone(rescueRequest.phone());
                    newUser.setName(rescueRequest.name());
                    return userRepository.save(newUser);
                });

        Request request = new Request();
        request.setUser(user); // Gắn ID của User vào cột user_id
        request.setType(rescueRequest.type());
        request.setDescription(rescueRequest.description());
        request.setAddress(rescueRequest.address());
        request.setLatitude(rescueRequest.latitude());
        request.setLongitude(rescueRequest.longitude());
        request.setGeoLocation();
        request.setAdditionalLink(rescueRequest.additionalLink());
        request.setImgUrl(rescueRequest.imgUrl());

        return requestRepository.save(request);

    }
}
