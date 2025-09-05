import {withLayout} from "@/components/Layout";
import {VariableState} from "@/services/common/variable.state";
import {type ComponentConfig} from "@measured/puck";
import {useRecoilState} from "recoil";
import {Input as ChakraInput, InputGroup} from "@chakra-ui/react";
import {useEffect, useMemo} from "react";
import {get} from "lodash";
import {ALargeSmall} from "lucide-react";
import {colorField} from "../../components/ColorField";
import {IconField} from "../../components/Icon";
import {renderIcon} from "../../components/Icon/IconConstant";
import {matchDataCondition} from "../CommonFunction/function";

export type IconProps = {
  variableName?: string
  href?: string
  placeholder?: string
  initialValue?: string
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  variant?: "outline" | "subtle" | "flushed" | undefined
  fontSize?: string,
  color?: string,
  backgroundColor?: string,
  iconLeft?: string,
  textLeft?: string,
  iconRight?: string,
  textRight?: string,
};
const baseInput: ComponentConfig<IconProps> = {
  fields: {
    variableName: {type: "text", label: "Variable Name (e.g., searchQuery)"},
    placeholder: {type: "text", label: "Placeholder"},
    initialValue: {type: "text", label: "Value"},
    href: {type: "text", label: "Href"},
    size: {
      label: 'Size',
      type: "select",
      labelIcon: <ALargeSmall size={16}/>,
      options: [
        {label: "2Xs", value: "2xs"},
        {label: "Xs", value: "xs"},
        {label: "Sm", value: "sm"},
        {label: "Md", value: "md"},
        {label: "Lg", value: "lg"},
        {label: "Xl", value: "xl"},
        {label: "2Xl", value: "2xl"},
      ],
    },
    variant: {
      label: 'Variants',
      type: "select",
      options: [
        {label: "Flushed", value: "flushed"},
        {label: "Subtle", value: "subtle"},
        {label: "Outline", value: "outline"},
      ],
    },
    fontSize: {type: "text", label: "Font Size"},

    color: {
      label: "Color",
      ...colorField,
    },
    backgroundColor: {
      label: "Background Color",
      ...colorField,
    },
    iconLeft: {
      label: "Icon Left",
      ...IconField
    },
    textLeft: {
      label: "Text Left",
      type: "text"
    },
    iconRight: {
      label: "Icon Right",
      ...IconField
    },
    textRight: {
      label: "Text Right",
      type: "text"
    },
  },
  defaultProps: {
    variableName: "",
    placeholder: "",
    initialValue: "",
    href: "",
    size: 'md',
    variant: 'outline',
    color: '',
    backgroundColor: '',
    iconLeft : undefined,
    textLeft: undefined,
    iconRight: undefined,
    textRight: undefined
  },
  render: ({
             variableName,
             placeholder,
             initialValue,
             href,
             size,
             variant,
             fontSize,
             color,
             backgroundColor,
             iconLeft,
             textLeft,
             iconRight,
             textRight

           }) => {
    const [variables, setVariables] = useRecoilState(VariableState);

  const value = useMemo(() => {
      return get(variables as any, variableName as any, initialValue);
    }, [variableName, variables, initialValue]);

    useEffect(() => {
      if (variableName) {
        setVariables({...variables, [variableName]: value});
      }
    }, [value, variableName]);

    const renderElementInput = (icon?:string,text?:string) => {
      if (icon) {
        return renderIcon({
          iconName: icon,
          mf_font_size: fontSize,
          mf_color: color,
        })
      }
      if (text) {
        return text
      }
      return null
    }
    const renderStart = useMemo(() => {
      return renderElementInput(iconLeft,textLeft)
      },
      [iconLeft,textLeft,fontSize,color])

    const renderEnd = useMemo(() => {
        return renderElementInput(iconRight,textRight)
      },
      [iconRight,textRight,fontSize,color])
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
          _placeholder={{ color: "inherit" }}
          onKeyDown={(e: KeyboardEvent) => {
            if (e.key === "Enter" && href) {
              window.location.href = matchDataCondition(href,{
                value: value,
              });
            }
          }}
          onChange={(e) => {
            return setVariables((prev) => ({
              ...prev,
              [variableName]: e.target.value,
            }));
          }}
        />
      </InputGroup>

    );
  },
};

export const Input = withLayout(baseInput);
