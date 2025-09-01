import { FieldLabel } from "@measured/puck";
import SelectIcon from "./SelectIcon";

export const IconField = {
  type: "custom" as const,
  render: ({
    name,
    onChange,
    value,
    label,
  }: {
    name: string;
    onChange: (value: string) => void;
    value: string;
    label: string;
  }) => {
    console.log("name",name)
    return  <FieldLabel label={label} >
      <SelectIcon value={value} onChange={onChange}></SelectIcon>
    </FieldLabel>
  },
};
