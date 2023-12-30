import { useStyles$, component$, useSignal, Slot } from "@builder.io/qwik";
import cx from 'classnames';
import styles from './style/index.less?inline'
import type { ButtonProps } from './type';
import "../global.less";

export default component$<ButtonProps>((props) => {
    const {
        className,
        size = 'default',
        type = 'default',
        shape = 'square',
        disabled = false,
        status = 'default',
        onClick$
    } = props;
    useStyles$(styles);

    return (
        <button
            class={cx(className, {
                ['arco-btn']: true,
                [`arco-btn-size-${size}`]: true,
                [`arco-btn-status-${status}`]: true,
                [`arco-btn-shape-${shape}`]: true,
                [`arco-btn-${type === 'default' ? 'secondary' : type}`]: true,
                [`arco-btn-disabled`]: disabled,
            })}
            onClick$={onClick$}
        >
            <Slot />
        </button>
    );
});