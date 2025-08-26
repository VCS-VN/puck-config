import { withLayout } from "@/components/Layout";
import { VariableState } from "@/services/common/variable.state";
import { type ComponentConfig } from "@measured/puck";
import { useRecoilState } from "recoil";
import { Input as ChakraInput } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { get } from "lodash";

const baseInput: ComponentConfig = {
  fields: {
    variableName: { type: "text", label: "Variable Name (e.g., searchQuery)" },
    placeholder: { type: "text", label: "Placeholder" },
    initialValue: { type: "text", label: "Value" },
  },
  defaultProps: {
    variableName: "",
    placeholder: "",
    initialValue: "",
  },
  render: ({ variableName, placeholder, initialValue }) => {
    const [variables, setVariables] = useRecoilState(VariableState);

    const value = useMemo(() => {
      return get("variables", variableName, initialValue);
    }, [variableName, variables, initialValue]);

    useEffect(() => {
      if (variableName) {
        setVariables({ ...variables, [variableName]: value });
      }
    }, [value, variableName]);

    return (
      <ChakraInput
        placeholder={placeholder || "Placeholder"}
        onChange={(e) => {
          return setVariables((prev) => ({
            ...prev,
            [variableName]: e.target.value,
          }));
        }}
      />
    );
  },
};

export const Input = withLayout(baseInput);
