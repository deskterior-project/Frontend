import RadioButton from "@/components/ui/Button/RadioButton";
import { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { fn } from "storybook/test";

const meta: Meta<typeof RadioButton> = {
  title: "UI/RadioButton",
  component: RadioButton,
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
    value: { control: "text" },
    name: { control: "text" },
  },
  args: { onChange: fn(), value: "option1", name: "radio-group" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "large",
    checked: false,
    children: "라디오 버튼 옵션",
    value: "option1",
    name: "radio-group",
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    return (
      <RadioButton
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [selected1, setSelected1] = useState("option1");
    const [selected2, setSelected2] = useState("option1");
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Large:</span>
          <div className="flex flex-col gap-2">
            <RadioButton
              size="large"
              value="option1"
              name="large-group"
              checked={selected1 === "option1"}
              onChange={() => setSelected1("option1")}
            >
              옵션 1
            </RadioButton>
            <RadioButton
              size="large"
              value="option2"
              name="large-group"
              checked={selected1 === "option2"}
              onChange={() => setSelected1("option2")}
            >
              옵션 2
            </RadioButton>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Medium:</span>
          <div className="flex flex-col gap-2">
            <RadioButton
              size="medium"
              value="option1"
              name="medium-group"
              checked={selected2 === "option1"}
              onChange={() => setSelected2("option1")}
            >
              옵션 1
            </RadioButton>
            <RadioButton
              size="medium"
              value="option2"
              name="medium-group"
              checked={selected2 === "option2"}
              onChange={() => setSelected2("option2")}
            >
              옵션 2
            </RadioButton>
          </div>
        </div>
      </div>
    );
  },
};

export const States: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1");
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Unchecked:</span>
          <RadioButton
            value="unchecked"
            name="states-group"
            checked={false}
            onChange={() => {}}
          >
            선택 안됨
          </RadioButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Checked:</span>
          <RadioButton
            value="checked"
            name="states-group"
            checked={selected === "checked"}
            onChange={() => setSelected("checked")}
          >
            선택됨
          </RadioButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Disabled:</span>
          <RadioButton
            value="disabled"
            name="states-group"
            checked={false}
            disabled
            onChange={() => {}}
          >
            비활성화
          </RadioButton>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20 text-sm">Disabled Checked:</span>
          <RadioButton
            value="disabled-checked"
            name="states-group"
            checked={true}
            disabled
            onChange={() => {}}
          >
            비활성화 선택됨
          </RadioButton>
        </div>
      </div>
    );
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1");
    return (
      <div className="flex flex-col gap-2">
        <RadioButton
          value="option1"
          name="group"
          checked={selected === "option1"}
          onChange={() => setSelected("option1")}
        >
          옵션 1
        </RadioButton>
        <RadioButton
          value="option2"
          name="group"
          checked={selected === "option2"}
          onChange={() => setSelected("option2")}
        >
          옵션 2
        </RadioButton>
        <RadioButton
          value="option3"
          name="group"
          checked={selected === "option3"}
          onChange={() => setSelected("option3")}
        >
          옵션 3
        </RadioButton>
      </div>
    );
  },
};
