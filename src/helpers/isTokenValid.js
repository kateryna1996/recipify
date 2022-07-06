import jwt_decode from "jwt-decode";

export function isTokenValid(token) {
    const decoded = jwt_decode(token);
    const now = new Date().getTime();
    return decoded.exp - Math.round(now / 1000) > 0;
    // console.log(decoded);
}