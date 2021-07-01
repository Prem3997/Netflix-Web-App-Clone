import { useEffect, useState } from "react";
import axios from '../service/axios'

export default function useFetchContent(fetchUrl) {
    const [content, setContent] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setContent(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    return content
}