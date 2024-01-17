import { Head } from "@inertiajs/react";
import React from "react";

const AdminLayout = (props) => {
    const { pageTitle } = props;
    return (
        <>
            <Head title={pageTitle} />
        </>
    );
};

export default AdminLayout;
