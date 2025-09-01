import { ComponentConfig } from "@measured/puck";
import { Button, HStack } from "@chakra-ui/react";
import { ALargeSmall } from "lucide-react";
import { colorField } from "../../components/ColorField";
import { IconField } from "../../components/Icon";
import { renderIcon } from "../../components/Icon/IconConstant";
// import { colorPalettes } from "compositions/lib/color-palettes"
// import {ButtonVariant} from "@chakra-ui/react/dist/types/styled-system/generated/recipes.gen";
export type ButtonProps = {
  label: string;
  typeView?: string;
  href?: string;
  variant?:
    | "solid"
    | "subtle"
    | "surface"
    | "outline"
    | "ghost"
    | "plain"
    | undefined;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  color?: string;
  backgroundColor?: string;
  icon?: string;
  iconSize?: string;
  iconColor?: string;
  positionIcon?: "left" | "right";
};

export const ButtonPlugins: ComponentConfig<ButtonProps> = {
  label: "Button",
  fields: {
    label: {
      label: "Label",
      type: "text",
      placeholder: "Lorem ipsum...",
      contentEditable: true,
    },
    typeView: {
      label: "Type view",
      type: "select",
      labelIcon: <ALargeSmall size={16} />,
      options: [
        { label: "Normal", value: "normal" },
        { label: "Button Google play", value: "buttonGgPlay" },
        { label: "Button App Store", value: "buttonAppStore" },
      ],
    },

    size: {
      label: "Size",
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
      label: "Link",
      type: "text",
    },
    variant: {
      label: "Variants",
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
    color: {
      label: "Color",
      ...colorField,
    } as any,
    backgroundColor: {
      label: "Background Color",
      ...colorField,
    } as any,
    icon: {
      label: "Icon",
      ...IconField,
    } as any,
    positionIcon: {
      label: "Position Icon",
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
    },
    iconSize: {
      label: "Size",
      type: "text",
      placeholder: "...px",
    },
    iconColor: {
      label: "Icon Color",
      ...colorField,
    } as any,
  },
  defaultProps: {
    label: "Button",
    variant: "solid",
    size: "md",
    href: "",
    color: "",
    typeView: "normal",
    icon: "",
    positionIcon: "left",
    iconSize: "14px",
    iconColor: "",
  },
  render: ({
    href,
    variant,
    label,
    size,
    color,
    backgroundColor,
    typeView,
    icon,
    positionIcon,
    iconSize,
    iconColor,
    // puck
  }) => {
    console.log("icon", icon);

    return (
      <div>
        {(!typeView || typeView === "normal") && (
          <Button
            style={{
              color: color,
              backgroundColor: backgroundColor,
            }}
            variant={variant}
            size={size}
          >
            {positionIcon == "left" &&
              renderIcon({
                iconName: icon,
                mf_color: iconColor,
                mf_font_size: iconSize,
              })}
            <a href={href}>{label}</a>
            {positionIcon == "right" &&
              renderIcon({
                iconName: icon,
                mf_color: iconColor,
                mf_font_size: iconSize,
              })}
          </Button>
        )}
        {typeView === "buttonGgPlay" && <div>buttonGgPlay</div>}
        {typeView === "buttonAppStore" && <div>buttonAppStore</div>}
      </div>
    );
  },
};
