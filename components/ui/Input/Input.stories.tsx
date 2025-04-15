import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { SearchIcon } from "lucide-react";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div>
      <Label className="mb-2" htmlFor="name">
        Name
      </Label>
      <Input id="name" placeholder="Jane Doe" />
    </div>
  ),
};

// TODO: Replace with Heading typography
export const WithHelperText: Story = {
  render: () => (
    <div>
      <Input className="mb-2" id="email" placeholder="you@example.com" />
      <p className="text-sm text-muted-foreground">
        We&apos;ll never share your email.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Can't type here...",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    placeholder: "Read-only content",
    readOnly: true,
  },
};

export const WithError: Story = {
  render: () => (
    <div>
      <Label className="mb-2" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        aria-invalid
        placeholder="you@example.com"
        className="border-red-500"
      />
      <p className="text-sm text-red-500">Invalid email address</p>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
        <SearchIcon className="w-4 h-4" />
      </span>
      <Input className="pl-8" placeholder="Search..." />
    </div>
  ),
};
