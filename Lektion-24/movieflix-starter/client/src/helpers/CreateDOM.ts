export default class CreateDOM {
    create(type: string, textContent?: string | undefined, classes?: string) {
        const elem = document.createElement(type);

        if (textContent) {
            elem.textContent = textContent;
        }

        if (classes) {
            elem.className = classes;
        }

        return elem;
    }
}