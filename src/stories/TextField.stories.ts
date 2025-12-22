import type { Meta, StoryObj } from "@storybook/nextjs";
import TextField from "@/components/ui/TextField/TextField";

const meta = {
  title: "ui/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: [
        "default",
        "focused",
        "success",
        "error",
        "disabled",
        "complete",
      ],
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "textfield-default",
    label: "label",
    helperText: "helper text",
    value: "",
    placeholder: "input text",
    state: "default",
  },
};

export const Success: Story = {
  args: {
    id: "textfield-success",
    label: "label",
    helperText: "helper text",
    value: "",
    placeholder: "input text",
    state: "success",
  },
};

export const Error: Story = {
  args: {
    id: "textfield-error",
    label: "label",
    helperText: "helper text",
    value: "",
    placeholder: "input text",
    state: "error",
  },
};

export const Disabled: Story = {
  args: {
    id: "textfield-disabled",
    label: "label",
    helperText: "helper text",
    value: "",
    placeholder: "input text",
    state: "disabled",
  },
};

export const Complete: Story = {
  args: {
    id: "textfield-complete",
    label: "label",
    helperText: "helper text",
    value: "",
    placeholder: "input text",
    state: "complete",
  },
};
