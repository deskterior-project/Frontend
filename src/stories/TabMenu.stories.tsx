import TabMenu from "@/components/ui/Button/TabMenu";
import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

const meta: Meta<typeof TabMenu> = {
  title: "UI/TabMenu",
  component: TabMenu,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "탭 메뉴",
  },
  render: (args) => <TabMenu {...args} />,
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <span className="w-20 text-sm">Normal:</span>
        <TabMenu>일반 탭 메뉴</TabMenu>
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-20 text-sm">Disabled:</span>
        <TabMenu disabled>비활성화 탭 메뉴</TabMenu>
      </div>
    </div>
  ),
};

export const TabGroup: Story = {
  render: () => (
    <div className="flex gap-2">
      <TabMenu>탭 1</TabMenu>
      <TabMenu>탭 2</TabMenu>
      <TabMenu>탭 3</TabMenu>
    </div>
  ),
};
