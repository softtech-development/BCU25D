export type DomAttribute = {
    name: string;
    value: string;
};

export type DomType = {
    type: string;
    content?: string;
    classes?: string;
    attribute?: DomAttribute;
};
export default class CreateDOM {
    create(attribute: DomType) {
        const elem = document.createElement(attribute.type);

        if (attribute.content) {
            elem.textContent = attribute.content;
        }

        if (attribute.classes) {
            elem.className = attribute.classes;
        }

        if (attribute.attribute) {
            elem.setAttribute(attribute.attribute.name, attribute.attribute.value);
        }

        return elem;
    }
}