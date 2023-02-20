import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string): [ T | null, (value: T | null) => void ] {
    const [state, setState] = useState<T | null>(null);

    useEffect(() => {
        // Recoger el primer valor del Local Storage
        const resultStr = localStorage.getItem(key);
        if (resultStr) {
            setState(JSON.parse(resultStr));
        }
    }, [key])
    
    const setter = (value: T | null) => {
        const valueStr = JSON.stringify(value)
        localStorage.setItem(key, valueStr);
        setState(value);
    };

    return [state, setter]
}

export default useLocalStorage;