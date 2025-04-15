import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/Radio";
import { Switch } from "@/components/ui/Switch";

const meta: Meta = {
  title: "Inputs",
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="example@email.com" />
    </div>
  ),
};

export const TextArea: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Write your message here..." />
    </div>
  ),
};

export const SelectInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const CheckboxInput: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const RadioInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label>Theme</Label>
      <RadioGroup defaultValue="light">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="light" id="r1" />
          <Label htmlFor="r1">Light</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dark" id="r2" />
          <Label htmlFor="r2">Dark</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const SwitchInput: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
