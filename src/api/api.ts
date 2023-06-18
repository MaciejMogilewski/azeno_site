
interface HeadersType {
    [key: string]: string;
}

interface ApiCallParams<T> {
    endpoint: string;
    method?: 'GET' | 'HEAD' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' | 'OPTIONS';
    body?: T;
    headers?: HeadersType;
    signal?: AbortSignal;
}

async function apiCall<T>({endpoint, method = 'GET', body, headers, signal}: ApiCallParams<T>): Promise<T> {

    const methodName = method || 'GET';

    const init: RequestInit = {
        method: methodName
    };

    if (body !== undefined) {
        init.body = JSON.stringify(body);
        init.headers = {
            'Content-Type': 'application/json'
        };
    }

    if (headers !== undefined) {
        init.headers = {...init.headers, ...headers};
    }

    if (signal !== undefined) {
        init.signal = signal;
    }

    try {
        const response = await fetch(`http://localhost:3001/${endpoint}`, init);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default apiCall;
