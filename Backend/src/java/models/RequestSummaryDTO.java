/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.UUID;

public class RequestSummaryDTO {

    @JsonProperty("request_id")
    private UUID requestId;
    
    @JsonProperty("user_phone")
    private String userPhone;

    @JsonProperty("user_name")
    private String userName;

    @JsonProperty("status")
    private String status;

    @JsonProperty("created_at")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private String createdAt;

    public RequestSummaryDTO() {
    }

    public RequestSummaryDTO(UUID requestId, String userPhone, String userName, String status, String createdAt) {
        this.requestId = requestId;
        this.userPhone = userPhone;
        this.userName = userName;
        this.status = status;
        this.createdAt = createdAt;
    }

    public RequestSummaryDTO(String userPhone, String userName, String status, String createdAt) {
        this.userPhone = userPhone;
        this.userName = userName;
        this.status = status;
        this.createdAt = createdAt;
    }

    public UUID getRequestId() {
        return requestId;
    }

    public void setRequestId(UUID requestId) {
        this.requestId = requestId;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    

}
