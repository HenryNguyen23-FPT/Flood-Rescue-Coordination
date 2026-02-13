import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { TeamIcon, UserIcon } from "@/utils/leafletIcon.ts";
import "leaflet/dist/leaflet.css";
import { ArrowBigLeft } from "lucide-react";

const DEFAULT_CENTER: [number, number] = [10.7769, 106.7009];

const USER_LOCATIONS: [number, number][] = [
    [10.8231, 106.6297],
    [10.8453, 106.6577],
    [10.7314, 106.6936],
    [10.8012, 106.7143],
    [10.7560, 106.6723],
    [10.8655, 106.7430],
];

const TEAM_LOCATIONS: [number, number][] = [
    [10.7769, 106.7009],
    [10.8380, 106.6670],
    [10.7904, 106.6350],
    [10.7432, 106.6298],
    [10.8700, 106.8030],
];

export default function FullMapPage() {
    return (
        <>
            <div className="w-screen h-screen">
                <MapContainer
                    center={DEFAULT_CENTER}
                    zoom={13}
                    className="h-full w-full"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="© OpenStreetMap"
                    />

                    {/* Team markers */}
                    {TEAM_LOCATIONS.map((position, index) => (
                        <Marker
                            key={`team-${index}`}
                            position={position}
                            icon={TeamIcon}
                        />
                    ))}

                    {/* User markers */}
                    {USER_LOCATIONS.map((position, index) => (
                        <Marker
                            key={`user-${index}`}
                            position={position}
                            icon={UserIcon}
                        />
                    ))}
                </MapContainer>
            </div>

            <ArrowBigLeft
                className="fixed top-[11vh] left-[0.5vw] z-[999] w-10 h-10 p-2 rounded-full
                bg-white border border-black/20 transition-all duration-200
                hover:bg-gray-100 hover:border-2 hover:border-gray-400 cursor-pointer"
                color="black"
                strokeWidth={1.5}
            />
        </>
    );
}
