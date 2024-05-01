export default (Alpine) =>
    Alpine.magic("component", (el, { Alpine: { closestRoot } }) => {
        return (selector) => {
            const root = closestRoot(document.querySelector(selector));
            return root._x_dataStack[0];
        };
    });
