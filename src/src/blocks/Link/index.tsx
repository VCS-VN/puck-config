import { ComponentConfig } from "@measured/puck";
import { Button, HStack } from "@chakra-ui/react"
import {ALargeSmall} from "lucide-react";
// import { colorPalettes } from "compositions/lib/color-palettes"
// import {ButtonVariant} from "@chakra-ui/react/dist/types/styled-system/generated/recipes.gen";
export type ButtonProps = {
  label: string;
  href?: string;
  variant?: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain" | undefined;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
};

export const ButtonPlugins: ComponentConfig<ButtonProps> = {
  label: "Button",
  fields: {
    label: {
      label: 'Label',
      type: "text",
      placeholder: "Lorem ipsum...",
      contentEditable: true,
    },
    size: {
      label: 'Size',
      type: "select",
      labelIcon: <ALargeSmall size={16} />,
      options: [
        { label: "2Xs", value: "2xs" },
        { label: "Xs", value: "xs" },
        { label: "Sm", value: "sm" },
        { label: "Md", value: "md" },
        { label: "Lg", value: "lg" },
        { label: "Xl", value: "xl" },
        { label: "2Xl", value: "2xl" },
      ],
    },
    href: {
      label: 'Link',
      type: "text"
    },
    variant: {
      label: 'Variants',
      type: "select",
      options: [
        { label: "Solid", value: "solid" },
        { label: "Subtle", value: "subtle" },
        { label: "Surface", value: "surface" },
        { label: "Outline", value: "outline" },
        { label: "Ghost", value: "ghost" },
        { label: "Plain", value: "plain" },
      ],
    },
  },
  defaultProps: {
    label: "Button",
    variant: "solid",
    size: "md",
    href: ''
  },
  render: ({
             href,
             variant,
             label,
             size,
             // puck
  }) => {
    return (
      <div>
        <Button variant={variant} size={size}>
          <a href={href}>{label}</a>
        </Button>
      </div>
    );
  },
};
