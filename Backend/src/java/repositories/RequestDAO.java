/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package repositories;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import models.RequestSummaryDTO;
import utils.DBUtils;
import utils.DBUtils;

/**
 *
 * @author User
 */
public class RequestDAO {
    public List<RequestSummaryDTO> takeListRequest(int pageNumber, int pageSize){
        List<RequestSummaryDTO> result = new ArrayList<>();
        try(Connection conn = DBUtils.getConnection()){
            PreparedStatement psm;
            ResultSet rs;
            int order = 1;
            String fetch = "SELECT r.id, u.phone, u.name, r.status, r.created_at \n" +
                            "FROM Request as r\n" +
                            "Join [User] as u ON u.id = r.user_id\n" +
                            "ORDER BY r.created_at \n" +
                            "OFFSET ? ROWS\n" +
                            "FETCH NEXT ? ROWS ONLY;";
            psm = conn.prepareStatement(fetch);
            psm.setInt(1, pageNumber*pageSize);
            psm.setInt(2, pageSize);
            rs = psm.executeQuery();
            
            while(rs.next()){
                result.add(new RequestSummaryDTO(UUID.fromString(rs.getString("id")), 
                        rs.getString(2), 
                        rs.getString(3), 
                        rs.getString(4), 
                        rs.getTimestamp(5).toString()));
                order++;
            }
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            return result;
        }
    }
}
