// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

// const AdminProtectedRouter = ({ Component }) => {
//     const navigate = useNavigate();
//     const [cookies] = useCookies(['user']);

//     useEffect(() => {
//         const adminProtectedData = cookies.user || {};
//         if (Object.keys(adminProtectedData).length === 0 || adminProtectedData.userType !== "admin") {
//             navigate("/");
//         }
//     }, [navigate, cookies]);

//     return (
//         <>
//             {Component}
//         </>
//     );
// };

// export default AdminProtectedRouter;

// AdminProtectedRouter.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function AdminProtectedRouter({ Component }) {
    const navigate = useNavigate();
    const [cookies] = useCookies(['user']);

    useEffect(() => {
        const adminProtectedData = cookies.user || {};
        if (Object.keys(adminProtectedData).length === 0 || adminProtectedData.userType !== "admin") {
            navigate("/");
        }
    }, [navigate, cookies]);

    return <>{Component && <Component />}</>;
};

export const ProtectedRouter = ({ Component }) => {
    const navigate = useNavigate();
    const [cookies] = useCookies(['user']);

    useEffect(() => {
        const userData = cookies.user || {};
         if (userData.userType !== "admin" && userData.userType !== "user") {
            navigate("/");
        }
    }, [navigate, cookies]);

    return <>{Component && <Component />}</>;
};




