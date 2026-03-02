/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controllers;

import java.util.List;
import models.PageRequestDTO;
import models.RequestSummaryDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import repositories.RequestDAO;

/**
 *
 * @author User
 */

@RestController
@CrossOrigin
@RequestMapping("/api")
public class RequestController {
    @PostMapping("/listRequest")
    public List<RequestSummaryDTO> takeListRequest(@RequestBody PageRequestDTO pageRequest){
        RequestDAO requestDao = new RequestDAO();
        return requestDao.takeListRequest(pageRequest.getPageNumber(), pageRequest.getPageSize());
    }
}
