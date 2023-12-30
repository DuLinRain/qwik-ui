import { Slot } from '@builder.io/qwik';
import type { PropFunction } from "@builder.io/qwik";
type onClickEvent = (
    event: MouseEvent,
    element: Element
) => void;
// 按钮类型
const ButtonTypes = ['default', 'primary', 'secondary', 'dashed', 'outline', 'text'] as const;
type ButtonType = typeof ButtonTypes[number];
// 按钮形状
const ButtonShapes = ['circle', 'round', 'square'] as const;
type ButtonShape = typeof ButtonShapes[number];

const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
type ButtonHTMLType = typeof ButtonHTMLTypes[number];

const ButtonSizes = ['mini', 'small', 'default', 'large'];
// 按钮大小
type ButtionSizeType = typeof ButtonSizes[number];

// 按钮状态
const ButtonStatuses = ['warning', 'danger', 'success', 'default'];
type ButtonStatus = typeof ButtonStatuses[number];

interface BaseButtonProps {
    type?: ButtonType;
    icon?: typeof Slot;
    shape?: ButtonShape;
    size?: ButtionSizeType;
    status?: ButtonStatus;
    disabled?: boolean;
    loading?: boolean | { delay?: number };
    className?: string;
    ghost?: boolean;
    danger?: boolean;
    block?: boolean;
    [key: `data-${string}`]: string;
    classNames?: { icon: string };
    onClick$?: PropFunction<onClickEvent> | undefined;
}

type ButtonProps = BaseButtonProps;

export type {
    ButtonProps,
    BaseButtonProps,
    ButtonType,
    ButtonHTMLType,
    ButtionSizeType,
    onClickEvent
};