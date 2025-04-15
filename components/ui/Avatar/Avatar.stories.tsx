import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>AF</AvatarFallback>
      </>
    ),
  },
};
