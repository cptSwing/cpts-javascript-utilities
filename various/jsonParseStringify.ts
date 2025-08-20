function jsonParseStringify<T>(object: T): object {
    return JSON.parse(JSON.stringify(object));
}

export default jsonParseStringify;
