import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"
import Apropos from "../pages/miniPages/Apropos"
import Contact from "../pages/miniPages/Contact"
import Recrutement from "../pages/miniPages/Recrutement"
import Services from "../pages/miniPages/Services"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/a_propos",
                element: <Apropos />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/recrutement",
                element: <Recrutement />
            }
        ]
    }

])

export default router