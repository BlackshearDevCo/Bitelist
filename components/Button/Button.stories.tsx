import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import {
  Button,
  buttonSizeOptions,
  buttonVariantOptions,
} from "@/components/Button";
import { Plus } from "lucide-react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: buttonVariantOptions,
    },
    size: {
      control: "select",
      options: buttonSizeOptions,
    },
    disabled: {
      control: "boolean",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "default",
    size: "icon",
    children: <Plus />,
  },
};
