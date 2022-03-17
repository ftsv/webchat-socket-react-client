const CHAT = 'chat';
const JOIN = 'join';
const NAME = 'name';
const NOT_FOUND = '404';
const ROOM = 'room';

const SIMPLE_ROUTES = {
    CHAT,
    JOIN,
    NOT_FOUND,
}

const CONST = {
    NAME,
    ROOM,
}

const EXPORT = {
    CONST,
    SIMPLE_ROUTES,
    ...CONST,
    ...SIMPLE_ROUTES,
}

export default EXPORT;
