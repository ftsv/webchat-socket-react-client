import React from 'react';
import { Navigate, useRoutes } from "react-router-dom";
import { SimpleWrapper } from "../containers/SimpleWrapper";
import SIMPLE_ROUTES from '../constants/';

import Join from '../components/Join/Join';
import Chat from '../components/Chat/Chat';

export const Routing = (): JSX.Element => {
    const routes = {
        path: '/',
        element: <SimpleWrapper />,
        children: [
            {path: '/', element: <Navigate to={`/${SIMPLE_ROUTES.JOIN}`} />},
            {path: `/${SIMPLE_ROUTES.JOIN}`, element: <Join />},
            {path: `/${SIMPLE_ROUTES.CHAT}`, element: <Chat/>},
            {path: '*', element: <Navigate to={`/${SIMPLE_ROUTES.NOT_FOUND}`} />},
        ]
    }

// TODO: вынести список роутов в отдельный файл, а здесь только map или forEach перебор в children

    const router = useRoutes([routes]);
    return (
        <>
        {router}
        </>
    )
}