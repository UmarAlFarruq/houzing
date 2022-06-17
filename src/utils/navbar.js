import AddHouse from "../components/Profile/AddHouse"
import { DetailsPage } from "../pages/Details"
import { Generic } from "../pages/Generic"
import { HomePage } from "../pages/Home"
import { ProfilePage } from "../pages/Profile"
import { PropertiesPage } from "../pages/Properties"
import SigininPage from "../pages/Siginin"
export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/home',
        Element: <HomePage />,
        search: '?',
        hidden: false,
        private: false,
        param: true
    },
    {
        id: 2,
        title: 'Properties',
        path: '/properties',
        Element: <PropertiesPage />,
        search: '?',
        hidden: false,
        private: false,
        param: true
    },
    {
        id: 3,
        title: 'Contacts',
        path: '/contacts',
        Element: <Generic />,
        search: '?',
        hidden: false,
        private: false,
        param: true
    },
    {
        id: 4,
        title: 'sign In',
        path: '/signin',
        Element: <SigininPage />,
        search: '?',
        hidden: true,
        private: false,
        param: true
    },
    {
        id: 5,
        title: 'Sign Up',
        path: '/signup',
        Element: <Generic />,
        search: '?',
        hidden: true,
        private: false,
        param: true
    },
    {
        id: 6,
        title: 'Details',
        path: '/properties/:id',
        Element: <DetailsPage />,
        search: '?',
        hidden: true,
        private: false,
        param: false
    },
    {
        id: 7,
        title: 'Profile',
        path: '/profile/properties',
        Element: <ProfilePage />,
        search: '?',
        hidden: true,
        private: false,
        param: false
    },
    {
        id: 7,
        title: 'Profile',
        path: '/profile/add',
        Element: <AddHouse />,
        search: '?',
        hidden: true,
        private: false,
        param: false
    },
]