import { withLayout } from "@/components/Layout";
import { VariableState } from "@/services/common/variable.state";
import { type ComponentConfig } from "@measured/puck";
import { useRecoilState } from "recoil";
import { Input as ChakraInput, InputGroup } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { get } from "lodash";
import { ALargeSmall } from "lucide-react";
import { colorField } from "../../components/ColorField";
import { IconField } from "../../components/Icon";
import { renderIcon } from "../../components/Icon/IconConstant";

export type IconProps = {
  variableName?: string;
  placeholder?: string;
  initialValue?: string;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  variant?: "outline" | "subtle" | "flushed" | undefined;
  color?: string;
  backgroundColor?: string;
  iconLeft?: string;
  textLeft?: string;
  iconRight?: string;
  textRight?: string;
};
const baseInput: ComponentConfig<IconProps> = {
  fields: {
    variableName: { type: "text", label: "Variable Name (e.g., searchQuery)" },
    placeholder: { type: "text", label: "Placeholder" },
    initialValue: { type: "text", label: "Value" },
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
    variant: {
      label: "Variants",
      type: "select",
      options: [
        { label: "Flushed", value: "flushed" },
        { label: "Subtle", value: "subtle" },
        { label: "Outline", value: "outline" },
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
    iconLeft: {
      label: "Icon Left",
      ...IconField,
    } as any,
    textLeft: {
      label: "Text Left",
      type: "text",
    },
    iconRight: {
      label: "Icon Right",
      ...IconField,
    } as any,
    textRight: {
      label: "Text Right",
      type: "text",
    },
  },
  defaultProps: {
    variableName: "",
    placeholder: "",
    initialValue: "",
    size: "md",
    variant: "outline",
    color: "",
    backgroundColor: "",
    iconLeft: undefined,
    textLeft: undefined,
    iconRight: undefined,
    textRight: undefined,
  },
  render: ({
    variableName,
    placeholder,
    initialValue,
    size,
    variant,
    color,
    backgroundColor,
    iconLeft,
    textLeft,
    iconRight,
    textRight,
  }) => {
    const [variables, setVariables] = useRecoilState(VariableState);

    const value = useMemo(() => {
      return get(variables as any, variableName as any, initialValue);
    }, [variableName, variables, initialValue]);

    useEffect(() => {
      if (variableName) {
        setVariables({ ...variables, [variableName]: value });
      }
    }, [value, variableName]);

    const renderElementInput = (icon?: string, text?: string) => {
      if (icon) {
        return renderIcon({
          iconName: icon,
        });
      }
      if (text) {
        return text;
      }
      return null;
    };
    const renderStart = useMemo(() => {
      return renderElementInput(iconLeft, textLeft);
    }, [iconLeft, textLeft]);

    const renderEnd = useMemo(() => {
      return renderElementInput(iconRight, textRight);
    }, [iconRight, textRight]);
    return (
      <InputGroup startElement={renderStart} endElement={renderEnd}>
        <ChakraInput
          size={size}
          variant={variant}
          placeholder={placeholder}
          value={value || ""}
          style={{
            color: color,
            backgroundColor: backgroundColor,
          }}
          onChange={(e) => {
            return setVariables((prev) => ({
              ...prev,
              [variableName as string]: e.target.value,
            }));
          }}
        />
      </InputGroup>
    );
  },
};

export const Input = withLayout(baseInput);
