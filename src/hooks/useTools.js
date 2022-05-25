import { useEffect, useState } from 'react';
const useTools = (url) => {
    const [tools, setTools] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data) => setTools(data))
    }, [isReload, url])
    return { tools, setTools, isReload, setIsReload }
}
export default useTools