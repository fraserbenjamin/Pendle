import {createContext} from 'react';

export default createContext({
    cookiesAllowed: false,
    setCookiesAllowed: () => null
});