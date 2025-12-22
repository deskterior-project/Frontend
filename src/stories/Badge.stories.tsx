import Badge from "@/components/ui/Badge/Badge";
import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["solid", "outline", "outline_pastel"],
    },
    color: {
      control: "radio",
      options: ["black", "success", "error", "bg-pink", "bg-blue", "bg-green"],
    },
    label: { control: "text" },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "solid",
    color: "black",
    label: "Hello Badge",
  },
  render: (args) => <Badge {...args} />,
};

export const AllBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 max-w-xl">
      {["solid", "outline", "outline_pastel"].map((variant) =>
        ["black", "success", "error", "bg-pink", "bg-blue", "bg-green"].map(
          (color) => (
            <Badge
              key={`${variant}-${color}`}
              variant={variant as any}
              color={color as any}
              label={`${variant}/${color}`}
            />
          )
        )
      )}
    </div>
  ),
};
