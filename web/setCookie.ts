type CookieAttributes = {
    domain: string;
    expires: Date | string;
    'max-age': number;
    partitioned: boolean;
    path: string;
    samesite: 'lax' | 'strict' | 'none';
    secure: boolean;
};

function setCookie(
    name: string,
    value: string | number | boolean,
    attributes: Partial<CookieAttributes> = {
        path: '/',
    }
) {
    if (attributes.expires instanceof Date) {
        attributes.expires = attributes.expires.toUTCString();
        if (attributes.expires === 'Invalid Date') throw new Error('Invalid Date in "expires" attribute');
    }

    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (let attributeKey in attributes) {
        updatedCookie += '; ' + attributeKey;

        let attributeValue = attributes[attributeKey as keyof CookieAttributes];

        if (attributeValue !== true) {
            updatedCookie += '=' + attributeValue;
        }
    }

    document.cookie = updatedCookie;
}

export default setCookie;
