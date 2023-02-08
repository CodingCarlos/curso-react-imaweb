function useLocalStorage<T>(key: string): [ T | null, (value: T | null) => void ] {
    const resultStr = localStorage.getItem(key);
    let result: T | null = null;
    if (resultStr) {
        result = JSON.parse(resultStr);
    }
    
    const setter = (value: T | null) => {
        const valueStr = JSON.stringify(value)
        localStorage.setItem(key, valueStr);
    };

    return [result, setter]
}

export default useLocalStorage;