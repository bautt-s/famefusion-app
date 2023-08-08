import './index.css';
import Browse from './pages/Browse';
import Landing from './pages/Landing';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Profile from './pages/Profile';
import Error404 from './pages/404';
import Roles from './pages/Roles';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
    uri: process.env.SERVER_URI ?? 'http://localhost:3001',
    cache: new InMemoryCache(),
});

const kindeDomain = process.env.NODE_ENV === "development" ? 'https://famefusion-pig.eu.kinde.com' : 'https://famefusion.kinde.com'
const redirectUri = process.env.NODE_ENV === "development" ? 'http://localhost:3000/' : 'https://famefusion-app.vercel.app/'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/browse",
        element: <Browse />,
    },
    {
        path: "/browse/:id",
        element: <Profile />
    },
    {
        path: "/roles",
        element: <Roles />
    },
    {
        path: '*',
        element: <Error404 />
    }
]);

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <KindeProvider
                clientId={process.env.REACT_APP_KINDE_CLIENT_ID}
                domain={process.env.REACT_APP_KINDE_DOMAIN || kindeDomain}
                logoutUri={process.env.REACT_APP_KINDE_LOGOUT_URL}
                redirectUri={process.env.REACT_APP_KINDE_REDIRECT_URL || redirectUri}
                isDangerouslyUseLocalStorage={process.env.NODE_ENV === "development"}
            >
                <RouterProvider router={router} />
            </KindeProvider>
        </ApolloProvider>
    </React.StrictMode>
);