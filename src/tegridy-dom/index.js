export const render = ({tag, props, children}, rootHTMLElement) => {
    const el = document.createElement(tag);
    el.innerHTML = JSON.stringify({...props, children});
    rootHTMLElement.appendChild(el);
};
