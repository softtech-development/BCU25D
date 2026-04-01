export const createElement = (elem: string) => {
    return document.createElement(elem);
};

export const createTextElement = (elem: string, text: string) => {
    const element = document.createElement(elem);
    element.appendChild(document.createTextNode(text));
    return element;
};