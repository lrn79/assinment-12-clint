import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            const url = `https://murmuring-crag-01369.herokuapp.com/admin/${email}`;
            fetch(url, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                });
        }
    }, [user]);
    return [admin, adminLoading];
};

export default useAdmin;
