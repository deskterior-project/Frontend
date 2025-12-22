import BasicButton from "@/components/ui/Button/BasicButton";
import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

const meta: Meta<typeof BasicButton> = {
  title: "UI/BasicButton",
  component: BasicButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
    },
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
    variant: "primary",
    size: "large",
    children: "버튼",
  },
  render: (args) => <BasicButton {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {["primary", "secondary", "tertiary"].map((variant) => (
        <div key={variant} className="flex gap-4 items-center">
          <span className="w-20 text-sm">{variant}:</span>
          {["large", "medium", "small"].map((size) => (
            <BasicButton
              key={`${variant}-${size}`}
              variant={variant as any}
              size={size as any}
            >
              {size}
            </BasicButton>
          ))}
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
        <BasicButton variant="primary">일반 버튼</BasicButton>
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-20 text-sm">Disabled:</span>
        <BasicButton variant="primary" disabled>
          비활성화 버튼
        </BasicButton>
      </div>
    </div>
  ),
};
