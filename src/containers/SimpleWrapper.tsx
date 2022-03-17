import React from 'react';
import { Outlet } from 'react-router-dom';

export const SimpleWrapper = (): JSX.Element => {
    return (
        <>
            <Outlet />
        </>
    );
};
