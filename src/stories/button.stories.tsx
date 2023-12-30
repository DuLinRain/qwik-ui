import { action } from "@storybook/addon-actions";
import { $ } from "@builder.io/qwik";
import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { ButtonProps, onClickEvent } from "../components/button/type";
import Button from "../components/button";


const meta = {
  title: "Components/Button",
  args: {
    // automatic actions are not yet supported.
    // See https://github.com/literalpie/storybook-framework-qwik/issues/16
    // For now, use the legacy addon-actions API wrapped in a $ to make your own QRL action.
    onClick$: $<onClickEvent>((event, element) => {
      action("click action")({ event, element });
    }),
  },
  component: Button,
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

// // // More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Color: Story = {
  render: () => (
    <>
      <div>类型</div>
      <section style={{ display: 'flex', gap: 20 }}>
        <Button type="primary">primary</Button>
        <Button type="default">default</Button>
        <Button type="dashed">dashed</Button>
        <Button type="text">text</Button>
        <Button type="outline">outline</Button>
      </section>
    </>
  )
};

export const Size: Story = {
  render: () => (
    <>
      <div>大小</div>
      <section style={{ display: 'flex', gap: 20 }}>
        <Button size="mini" type="primary">mini</Button>
        <Button size="small" type="primary">small</Button>
        <Button size="default" type="primary">default</Button>
        <Button size="large" type="primary">large</Button>
      </section>
    </>
  )
};

export const Shape: Story = {
  render: () => (
    <>
      <div> 形状</div>
      <section style={{ display: 'flex', gap: 20 }}>
        <Button shape="circle" type="primary">circle</Button>
        <Button shape="round" type="primary">round</Button>
        <Button shape="square" type="primary">square</Button>
      </section>
    </>
  )
};

export const Disabled: Story = {
  render: () => (
    <>
      <div>禁用</div>
      <section style={{ display: 'flex', gap: 20 }}>
        <Button type="primary" disabled>primary</Button>
        <Button type="default" disabled>default</Button>
        <Button type="dashed" disabled>dashed</Button>
        <Button type="text" disabled>text</Button>
        <Button type="outline" disabled>outline</Button>
      </section>
    </>
  )
};

export const Status: Story = {
  render: () => (
    <>
      <div>状态</div>
      <section style={{ display: 'flex', gap: 20 }}>
        <Button type="primary" status="primary">primary</Button>
        <Button type="primary" status="warning">warning</Button>
        <Button type="primary" status="danger">danger</Button>
        <Button type="primary" status="success">success</Button>
      </section>
    </>
  )
};

export const Event: Story = {
  render: () => (
    <>
      <div> 事件</div>
      <section style={{ display: 'flex', gap: 20 }}>
        <Button type="primary" status="primary" onClick$={(...rest) => console.log(...rest)}>primary</Button>
      </section>
    </>
  )
};
