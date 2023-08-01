import { useState, useCallback } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET",
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body
                    ? JSON.stringify(requestConfig.body)
                    : null,
            });
            //이게 왜 404 에러일까? get은 제대로 인식이 되던데. <- POST 주소 수정도 하라고 해줬어야지... 강사 아조씨... (어쩐지 뭐가 빠졌다 했음)
            if (!response.ok) {
                throw new Error("Request failed!");
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || "Something went wrong!");
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
