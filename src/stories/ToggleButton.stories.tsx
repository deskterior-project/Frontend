import ToggleButton from "@/components/ui/Button/ToggleButton";
import { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { fn } from "storybook/test";

const meta: Meta<typeof ToggleButton> = {
  title: "UI/ToggleButton",
  component: ToggleButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["large", "medium"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: { onCheckedChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "large",
    checked: false,
    children: "토글 라벨",
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    return (
      <ToggleButton {...args} checked={checked} onCheckedChange={setChecked} />
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Large:</span>
          <ToggleButton
            size="large"
            checked={checked1}
            onCheckedChange={setChecked1}
          >
            라지 사이즈 토글
          </ToggleButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Medium:</span>
          <ToggleButton
            size="medium"
            checked={checked2}
            onCheckedChange={setChecked2}
          >
            미디엄 사이즈 토글
          </ToggleButton>
        </div>
      </div>
    );
  },
};

export const States: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Unchecked:</span>
          <ToggleButton checked={false} onCheckedChange={() => {}}>
            꺼짐
          </ToggleButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Checked:</span>
          <ToggleButton checked={checked} onCheckedChange={setChecked}>
            켜짐
          </ToggleButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Disabled:</span>
          <ToggleButton checked={false} disabled onCheckedChange={() => {}}>
            비활성화
          </ToggleButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Disabled Checked:</span>
          <ToggleButton checked={true} disabled onCheckedChange={() => {}}>
            비활성화 켜짐
          </ToggleButton>
        </div>
      </div>
    );
  },
};
