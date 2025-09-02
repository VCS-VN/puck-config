import { ComponentConfig } from "@measured/puck";
import {colorField} from "../../components/ColorField";
import {IconField} from "../../components/Icon";
import {renderIcon} from "../../components/Icon/IconConstant";
export type IconProps = {
  href?: string;
  size?: string;
  color?: string,
  icon?: string,
};

export const IconPlugins: ComponentConfig<IconProps> = {
  label: "Icon",
  fields: {
    icon: {
      label: "Icon",
      ...IconField
    },
    size: {
      label: 'Size',
      type: "text",
      placeholder: "...px",
    },
    color: {
      label: "Color",
      ...colorField,
    },
    href: {
      label: 'Link',
      type: "text"
    },

  },
  defaultProps: {
    icon: 'bi bi-0-circle',
    size: "14px",
    color: '',
    href: '',
  },
  render: ({
             href,
             size,
             color,
             icon,
             // puck
  }) => {
    console.log("icon",icon)
    return (
      <a href={href}>
        {renderIcon({
          iconName: icon,
          mf_color: color,
          mf_font_size: size
        })}

      </a>
    );
  },
};
