import CheckBoxButton from "@/components/ui/Button/CheckBoxButton";
import { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { fn } from "storybook/test";

const meta: Meta<typeof CheckBoxButton> = {
  title: "UI/CheckBoxButton",
  component: CheckBoxButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["large", "medium"],
    },
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "large",
    checked: false,
    children: "체크박스 라벨",
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    return (
      <CheckBoxButton
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
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
          <CheckBoxButton
            size="large"
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
          >
            라지 사이즈 체크박스
          </CheckBoxButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Medium:</span>
          <CheckBoxButton
            size="medium"
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
          >
            미디엄 사이즈 체크박스
          </CheckBoxButton>
        </div>
      </div>
    );
  },
};

export const States: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Unchecked:</span>
          <CheckBoxButton checked={false} onChange={() => {}}>
            체크 안됨
          </CheckBoxButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Checked:</span>
          <CheckBoxButton
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          >
            체크됨
          </CheckBoxButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Indeterminate:</span>
          <CheckBoxButton
            checked={indeterminate}
            indeterminate={true}
            onChange={() => {}}
          >
            중간 상태
          </CheckBoxButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Disabled:</span>
          <CheckBoxButton checked={false} disabled onChange={() => {}}>
            비활성화
          </CheckBoxButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Disabled Checked:</span>
          <CheckBoxButton checked={true} disabled onChange={() => {}}>
            비활성화 체크됨
          </CheckBoxButton>
        </div>
      </div>
    );
  },
};
