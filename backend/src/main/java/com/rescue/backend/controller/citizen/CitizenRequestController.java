package com.rescue.backend.controller.citizen;


import com.rescue.backend.DTOS.citizen.request.RescueRequest;
import com.rescue.backend.DTOS.common.ResponseObject;
import com.rescue.backend.service.CitizenService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/citizen")
@CrossOrigin(origins = "*")
public class CitizenRequestController {

    private final CitizenService citizenService;

    public CitizenRequestController(CitizenService citizenService) {
        this.citizenService = citizenService;
    }

    @PostMapping("/sendRequest")
    public ResponseEntity<ResponseObject> sendRequest(@RequestBody RescueRequest rescueRequest) {
        var savedRequest = citizenService.createRescueRequest(rescueRequest);

        return ResponseEntity.status(HttpStatus.CREATED).body(
            new ResponseObject("success", "Yêu cầu cứu hộ đã được gửi thành công", savedRequest)
        );
    }
}
