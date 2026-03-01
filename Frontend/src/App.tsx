import { RouterProvider } from "react-router-dom"
import { MapProvider } from "@/lib/MapProvider"
import { router } from "./router"

function App() {
    return (
        <MapProvider>
            <RouterProvider router={router} />
        </MapProvider>
    )
}

export default App