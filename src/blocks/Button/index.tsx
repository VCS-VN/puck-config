import { ComponentConfig } from "@measured/puck";

// import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";

export type ButtonProps = {
  label: string;
  href?: string;
  // variant: AntButtonProps["variant"];
  // size: AntButtonProps["size"];
};

export const Button: ComponentConfig<ButtonProps> = {
  label: "Button",
  fields: {
    label: {
      type: "text",
      placeholder: "Lorem ipsum...",
      contentEditable: true,
    },
    // size: {
    //   type: "select",
    //   labelIcon: <ALargeSmall size={16} />,
    //   options: [
    //     { label: "Large", value: "large" },
    //     { label: "Default", value: "default" },
    //     { label: "Small", value: "small" },
    //   ],
    // },
    href: { type: "text" },
    // variant: {
    //   type: "select",
    //   options: [
    //     { label: "Link", value: "link" },
    //     { label: "Text", value: "text" },
    //     { label: "Outlined", value: "outlined" },
    //     { label: "Dashed", value: "dashed" },
    //     { label: "Solid", value: "solid" },
    //     { label: "Filled", value: "filled" },
    //   ],
    // },
  },
  defaultProps: {
    label: "Button",
    // variant: "solid",
    // size: "large",
  },
  render: ({ href, label, puck }) => {
    return (
      <div>
        {/* <AntButton
          href={(href && href) || "#"}
          variant={variant}
          size={size}
          tabIndex={puck.isEditing ? -1 : undefined}
        >
          {label}
        </AntButton> */}
      </div>
    );
  },
};
