import Cookies from "universal-cookie";

export const writeStateToCookie = (state: string, id: string) => {
    const cookies = new Cookies();
    cookies.set(id, state);
}

export const readStateFromCookie = (id: string) => {
    const cookies = new Cookies();
    return cookies.get(id);
}