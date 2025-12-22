import TextButton from "@/components/ui/Button/TextButton";
import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

const meta: Meta<typeof TextButton> = {
  title: "UI/TextButton",
  component: TextButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["large", "medium", "small"],
    },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "large",
    children: "텍스트 버튼",
  },
  render: (args) => <TextButton {...args} />,
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {["large", "medium", "small"].map((size) => (
        <div key={size} className="flex gap-4 items-center">
          <span className="w-20 text-sm">{size}:</span>
          <TextButton size={size as any}>텍스트 버튼</TextButton>
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <span className="w-20 text-sm">Normal:</span>
        <TextButton>일반 텍스트 버튼</TextButton>
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-20 text-sm">Disabled:</span>
        <TextButton disabled>비활성화 텍스트 버튼</TextButton>
      </div>
    </div>
  ),
};
