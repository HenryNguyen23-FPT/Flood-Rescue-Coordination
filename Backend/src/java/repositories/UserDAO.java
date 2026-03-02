/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package repositories;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import utils.DBUtils;

/**
 *
 * @author User
 */
public class UserDAO {
    public boolean checkLogin(String name, String phone){
        boolean result = false;
        try(Connection conn = DBUtils.getConnection()){
            PreparedStatement psm;
            ResultSet rs;
            String fetch = "SELECT * FROM [User] "
                    + "WHERE name = ? and phone = ?;";
            
            psm = conn.prepareStatement(fetch);
            psm.setString(1, name);
            psm.setString(2, phone);
            System.out.println("Name: " + name + "\nPhone: " + phone);
            rs = psm.executeQuery();
            
            result = rs.next();
            System.out.println(result);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        finally{
            return result;
        }
    }
}
