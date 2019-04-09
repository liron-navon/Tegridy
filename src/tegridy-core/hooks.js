// the function for the current context
let stateFN = () => {};
// props we might want to pass to the function
let stateProps = {};
// old and new hooks
let oldHooks = [];
let newHooks = [];

// needs to be called before each function that uses hooks
export const beforeCall = (fn, props, hooks) => {
    oldHooks = hooks;
    stateFN = fn;
    stateProps = props;
};

// clear existing hooks
export const clearHooks = () => {
    newHooks = [];
    oldHooks = [];
    stateFN = () => {
    };
    stateProps = {};
};

// get the generated hooks and clear hooks data
export const getHooks = () => {
    const n = newHooks;
    clearHooks();
    return n;
};

// create a state
export const useState = (defaultValue) => {
    let hook = oldHooks.shift();
    if (!hook) {
        hook = {
            // reference the other hooks in this context
            cachedHooks: newHooks,
            // cache needed values for the hooks
            fn: stateFN,
            props: stateProps,
            value: defaultValue,
            // the function to set the state
            setState: (newValue) => {
                hook.value = newValue;
                oldHooks = hook.cachedHooks;
                newHooks = [];
                stateFN = hook.fn;
                stateProps = hook.props;
                stateFN(stateProps);
            }
        };
    }

    newHooks.push(hook);
    hook.cachedHooks = newHooks;
    return [hook.value, hook.setState];
};

