import { useEffect, useRef } from "react";
import vietmapgl from "@vietmap/vietmap-gl-js";

export default function TestVietmapPage() {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (vietmapgl as any).accessToken = "826f1c4b4e96d02b5133f398a8536def34979f66ebf75d40";

        new vietmapgl.Map({
            container: mapContainer.current!,
            style:
                "https://maps.vietmap.vn/api/maps/light/styles.json?apikey=826f1c4b4e96d02b5133f398a8536def34979f66ebf75d40",
            center: [106.7009, 10.7769],
            zoom: 13,
        });
    }, []);

    return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
}
