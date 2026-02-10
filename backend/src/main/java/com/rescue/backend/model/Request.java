package com.rescue.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.PrecisionModel;

import org.locationtech.jts.geom.Point;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;


@Entity
@Table(name = "Request")
@Getter @Setter @NoArgsConstructor
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false, length = 20)
    private String type;

    @Column(columnDefinition = "NVARCHAR(MAX)")
    private String description;

    @Column(length = 200)
    private String address;

    @Column(precision = 10, scale = 8, nullable = false)
    private BigDecimal latitude;

    @Column(precision = 10, scale = 8, nullable = false)
    private BigDecimal longitude;

    @Column(name = "geo_location", columnDefinition = "GEOGRAPHY", nullable = false)
    private Point geoLocation;

    @Column(name = "additional_url", length = 200)
    private String additionalLink;

    @Column(name = "img_url", length = 500)
    private String imgUrl;

    @Column(length = 20)
    private String status = "processing";

    @Column(length = 20)
    private String urgency;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public void setGeoLocation() {
        GeometryFactory geometryFactory = new GeometryFactory(new PrecisionModel(), 4326);

        this.geoLocation = geometryFactory.createPoint(
                new org.locationtech.jts.geom.Coordinate(
                        this.longitude.doubleValue(),
                        this.latitude.doubleValue()
                )
        );
    }
}
