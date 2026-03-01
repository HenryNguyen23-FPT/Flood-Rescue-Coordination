CREATE DATABASE RescueSystem;
GO

USE RescueSystem;
GO

CREATE TABLE [User] (
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    name NVARCHAR(50) NOT NULL,
    phone VARCHAR(20)
);

CREATE TABLE Request (
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    user_id UNIQUEIDENTIFIER NOT NULL,
    type VARCHAR(20) NOT NULL,
    description TEXT,
    address NVARCHAR(200),
    latitude DECIMAL(10,8),
    longitude DECIMAL(10,8),
    geo_location GEOGRAPHY,
    additional_link NVARCHAR(200),
    img_url VARCHAR(200),
    status VARCHAR(20) NOT NULL,
    urgency VARCHAR(10) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),

    CONSTRAINT FK_Request_User
        FOREIGN KEY (user_id) REFERENCES [User](id),

    CONSTRAINT CK_Request_Type
        CHECK (type IN ('goods','rescue','others')),

    CONSTRAINT CK_Request_Status
        CHECK (status IN ('processing','reject','delayed','accept')),

    CONSTRAINT CK_Request_Urgency
        CHECK (urgency IN ('high','medium','low'))
);

CREATE TABLE message (
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    request_id UNIQUEIDENTIFIER NOT NULL,
    sender_id UNIQUEIDENTIFIER NOT NULL,
    sender_role VARCHAR(20) NOT NULL,
    content NVARCHAR(MAX),
    send_at DATETIME DEFAULT GETDATE(),

    CONSTRAINT FK_Message_Request
        FOREIGN KEY (request_id) REFERENCES Request(id),

    CONSTRAINT CK_Message_SenderRole
        CHECK (sender_role IN ('user','coordinator','rescue team'))
);

CREATE TABLE account (
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    name NVARCHAR(255),
    phone VARCHAR(30),
    password VARCHAR(100),
    role VARCHAR(30) NOT NULL,
    team_name VARCHAR(50),
    team_size INT,
    latitude DECIMAL(10,8),
    longitude DECIMAL(10,8),
    geo_location GEOGRAPHY,
    account_state VARCHAR(20),

    CONSTRAINT CK_Account_Role
        CHECK (role IN ('manager','rescue coordinator','rescue team')),

    CONSTRAINT CK_Account_State
        CHECK (account_state IN ('active','offline'))
);

CREATE TABLE Vehicle (
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    type VARCHAR(30) NOT NULL,
    rescue_team_id UNIQUEIDENTIFIER,
    state VARCHAR(20),

    CONSTRAINT FK_Vehicle_Account
        FOREIGN KEY (rescue_team_id) REFERENCES account(id),

    CONSTRAINT CK_Vehicle_Type
        CHECK (type IN ('Boat','Rescue Vehicle','helicopter')),

    CONSTRAINT CK_Vehicle_State
        CHECK (state IN ('using','free','maintenance'))
);

CREATE TABLE RescueTeamAssignment (
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    request_id UNIQUEIDENTIFIER NOT NULL,
    account_id UNIQUEIDENTIFIER NOT NULL,
    vehicle_id UNIQUEIDENTIFIER,
    status VARCHAR(20),
    report TEXT,

    CONSTRAINT FK_Assignment_Request
        FOREIGN KEY (request_id) REFERENCES Request(id),

    CONSTRAINT FK_Assignment_Account
        FOREIGN KEY (account_id) REFERENCES account(id),

    CONSTRAINT FK_Assignment_Vehicle
        FOREIGN KEY (vehicle_id) REFERENCES Vehicle(id),

    CONSTRAINT CK_Assignment_Status
        CHECK (status IN ('on the way','completed','delayed'))
);

INSERT INTO [User] (name, phone)
VALUES 
(N'Nguyễn Văn A', '0901234567'),
(N'Trần Thị B', '0912345678'),
(N'Lê Văn C', '0923456789'),
(N'Phạm Thị D', '0934567890'),
(N'Hoàng Văn E', '0945678901');