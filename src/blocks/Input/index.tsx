import { ALargeSmall } from "lucide-react";
import { Section } from "../../components/Section";
import { WithLayout, withLayout } from "../../components/Layout";
import { ComponentConfig } from "@measured/puck";
import { Input as AntInput, InputProps as AntInputProps } from "antd";

export type InputProps = WithLayout<{
  placeholder?: string;
  padding?: string;
  size?: AntInputProps["size"];
  maxWidth?: string;
  variant?: AntInputProps["variant"];
  disabled?: boolean;
}>;

const InnerInput: ComponentConfig<InputProps> = {
  fields: {
    placeholder: {
      type: "text",
    },
    size: {
      type: "select",
      labelIcon: <ALargeSmall size={16} />,
      options: [
        { label: "Large", value: "large" },
        { label: "Default", value: "default" },
        { label: "Small", value: "small" },
      ],
    },
    // disabled: { type: "" },
    variant: {
      type: "select",
      labelIcon: <ALargeSmall size={16} />,
      options: [
        { label: "Borderless", value: "borderless" },
        { label: "Filled", value: "filled" },

        {
          label: "Outlined",
          value: "outlined",
        },
        {
          label: "Underlined",
          value: "underlined",
        },
      ],
    },
  },
  defaultProps: {
    placeholder: "Placeholder",
    variant: "outlined",
    size: "large",
    disabled: false,
  },
  render: ({ placeholder, maxWidth, size, variant }) => {
    return (
      <Section maxWidth={maxWidth}>
        <AntInput
          placeholder={placeholder}
          variant={variant || "filled"}
          size={size}
        />
      </Section>
    );
  },
};

export const Input = withLayout(InnerInput);
