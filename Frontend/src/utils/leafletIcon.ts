import L from "leaflet";

export const UserIcon = L.divIcon({
    className: "",
    html: `
    <div style="position:relative;width:30px;height:42px;">
        <svg viewBox="0 0 24 36" width="30" height="42">
            <path
                d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z"
                fill="#ef4444"
            />
            <circle cx="12" cy="12" r="5" fill="white"/>
        </svg>
    </div>
  `,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
});

export const TeamIcon = L.divIcon({
    className: "",
    html: `
    <div style="
        width:36px;
        height:36px;
        background:#2563eb;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.25);
    ">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
            <path d="M3 13l1-3 3-3h7l3 3 1 3v5h-2a2 2 0 01-4 0H9a2 2 0 01-4 0H3v-5z"/>
        </svg>
    </div>
  `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
});

