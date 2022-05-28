import { useEffect, useState } from "react";

const useOrder = (id) => {
    const [tool, setTool] = useState({})
    const [isloded, setIsloded] = useState(false)
    useEffect(() => {
        const url = `https://murmuring-crag-01369.herokuapp.com/orderNow/${id}`;
        // https://murmuring-crag-01369.herokuapp.com//orderNow/628e43842786e802d7f3e8fb

        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [id, isloded])

    return [tool]
};

export default useOrder;