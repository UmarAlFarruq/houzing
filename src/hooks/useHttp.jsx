
const { REACT_APP_BASE_URL: Baseurl } = process.env

export const useHttp = () => {
    const request = async ({
        url = '',
        method = 'GET',
        body = null,
        headers = {},
        token = false,

    }) => {
        if (token) {
            headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        }
        let res = await fetch(`${Baseurl}${url}`, {
            method,
            body,
            headers,
        }).then(res => res.json());

        if (res?.succsess) {
            return res;
        } else {
            throw new Error(res?.message || 'Something Worng')
        }
    };
    return { request };
}