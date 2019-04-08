import Tegridy from '../../../src';

export const render = (componentToRender) => {
    const el = document.createElement('template');
    const t = Tegridy.render(componentToRender, el);
    return {
        vDom: t.virtualDom,
        component: t.component,
        getDom() {
            return t.component.__instance.dom;
        }
    }
};
