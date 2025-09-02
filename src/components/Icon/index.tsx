import { FieldLabel } from "@measured/puck";
import SelectIcon from "./SelectIcon";

export const IconField = {
  type: "custom" as const,
  render: (props: any) => {
    const { value, onChange } = props || {};
    const label = props?.field?.label || "Icon";
    return (
      <FieldLabel label={label}>
        <SelectIcon value={value} onChange={onChange} />
      </FieldLabel>
    );
  },
};
