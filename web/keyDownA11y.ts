/* adapted from https://stackoverflow.com/a/68009016 */

type KeyboardEventListener = (event: KeyboardEvent) => void;

function keyDownA11y(handler: EventListener | React.EventHandler<React.SyntheticEvent>) {
    return function onKeyDown(event: KeyboardEvent | React.KeyboardEvent) {
        const { key, type } = event;
        const isReactEvent = (event as React.KeyboardEvent).nativeEvent;

        if (['keydown', 'keypress'].includes(type) && keys_confirm.includes(key)) {
            if (isReactEvent) {
                (handler as React.KeyboardEventHandler)(event as React.KeyboardEvent);
            } else {
                (handler as KeyboardEventListener)(event as KeyboardEvent);
            }
        }
    };
}

const keys_confirm = ['Enter', ' '];

export default keyDownA11y;
