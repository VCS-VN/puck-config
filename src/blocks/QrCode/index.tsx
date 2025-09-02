import { ComponentConfig } from "@measured/puck";
import { colorField } from "../../components/ColorField";
import { QrCode } from "@chakra-ui/react";
import { ALargeSmall } from "lucide-react";

export type IconProps = {
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  color?: string;
  content?: string;
};

export const QrCodePlugins: ComponentConfig<IconProps> = {
  label: "Qr Code",
  fields: {
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
    color: {
      label: "Color",
      ...colorField,
    },
    content: {
      label: "Content",
      type: "text",
    },
  },
  defaultProps: {
    size: "md",
    color: "",
    content: "Default",
  },
  render: ({
    size,
    color,
    content,
    // puck
  }) => {
    return (
      <div>
        <QrCode.Root size={size} value={content}>
          <QrCode.Frame style={{ color }}>
            <QrCode.Pattern />
          </QrCode.Frame>
        </QrCode.Root>
      </div>
    );
  },
};
