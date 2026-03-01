/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controllers;

import models.UserDAO;
import models.UserDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author User
 */

@RestController
@CrossOrigin
@RequestMapping("/api")
public class LoginController {
    
    @PostMapping("/checkpass")
    public boolean checkPassword(@RequestBody UserDTO user ) {
        UserDAO userDao = new UserDAO();
        return userDao.checkLogin(user.getName(), user.getPhone());
    }
}
