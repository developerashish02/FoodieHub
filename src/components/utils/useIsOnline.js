import { useEffect, useState } from "react";

const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener('online', handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);

            window.removeEventListener("offline", handleOffline);
        }
    }, [])

    const handleOnline = () => {
        setIsOnline(true);
    }

    const handleOffline = () => {
        setIsOnline(false);
    }

    return isOnline;
}

export default useIsOnline; 