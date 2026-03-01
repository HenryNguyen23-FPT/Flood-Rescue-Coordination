package models;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.UUID;

public class UserDTO {

    @JsonProperty("id")
    private UUID id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("phone")
    private String phone;

    public UserDTO() {
    }

    public UserDTO(String name, String phone) {
        this.name = name;
        this.phone = phone;
    }

    public UserDTO(UUID id, String name, String phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }
}