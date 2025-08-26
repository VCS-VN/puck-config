import { withLayout } from "@/components/Layout";
import type { ComponentConfig } from "@measured/puck";

const baseContainer: ComponentConfig = {
  fields: {
    content: {
      type: "slot",
    },
  },
  defaultProps: {
    content: [], // Empty array for slot
  },
  render: ({ content: Content }) => <Content minEmptyHeight={100} />,
};

export const Container = withLayout(baseContainer);
