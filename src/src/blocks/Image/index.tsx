import { ComponentConfig } from "@measured/puck";
import {colorField} from "../../components/ColorField";
import {IconField} from "../../components/Icon";
import {renderIcon} from "../../components/Icon/IconConstant";
import {
  Image as ImageChakra,
} from "@chakra-ui/react";
import {ALargeSmall} from "lucide-react";
export type IconProps = {
  href?: string;
  url?: string;
  alt?: string;
  width?: string;
  height?: string;
  borderRadius?: "none" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | "l1" | "l2" | "l3";
  fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
};

export const Image: ComponentConfig<IconProps> = {
  label: "Image",
  fields: {
    url: {
      label: 'Url',
      type: "text"
    },
    alt: {
      label: 'Alt',
      type: "text"
    },
    width: {
      label: 'Width',
      type: "text",
      placeholder: "...px",
    },
    height: {
      label: 'Height',
      type: "text",
      placeholder: "...px",
    },
    href: {
      label: 'Link',
      type: "text"
    },

    borderRadius: {
      label: 'Border Radius',
      type: "select",
      labelIcon: <ALargeSmall size={16}/>,
      options: [
        { label: "None", value: "none" },
        { label: "2XS", value: "2xs" },
        { label: "XS", value: "xs" },
        { label: "Small (sm)", value: "sm" },
        { label: "Medium (md)", value: "md" },
        { label: "Large (lg)", value: "lg" },
        { label: "Extra Large (xl)", value: "xl" },
        { label: "2XL", value: "2xl" },
        { label: "3XL", value: "3xl" },
        { label: "4XL", value: "4xl" },
        { label: "Full (pill)", value: "full" },
        // { label: "Custom L1", value: "l1" },
        // { label: "Custom L2", value: "l2" },
        // { label: "Custom L3", value: "l3" },
      ]
    },
    fit: {
      label: 'Fit',
      type: "select",
      labelIcon: <ALargeSmall size={16}/>,
      options: [
        { label: "contain", value: "contain" },
        { label: "cover", value: "cover" },
        { label: "fill", value: "fill" },
        { label: "none", value: "none" },
        { label: "scale-down", value: "scale-down" },
      ],
    },


  },
  defaultProps: {
    href: "",
    width: "100px",
    height: "100px",
    borderRadius: "none",
    fit: "fill",
  },
  render: ({
             href,
  url,
  alt,
  width,
  height,
  borderRadius,
  fit,
             // puck
  }) => {
    return (
      <a href={href}>
        <ImageChakra
          src={
            url ||
            "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"
          }
          width={width || "50px"}
          height={height ||"50px"}
          alt={alt}
          borderRadius={borderRadius}
          fit={fit}
        />
      </a>
    );
  },
};
