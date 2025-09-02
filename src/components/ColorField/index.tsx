import {FieldLabel} from "@measured/puck";

export const colorField = {
  type: "custom" as const,
  render: (props: any) => {
    const { name, onChange, value } = props || {};
    const label = props?.field?.label || "Background Color";
    return (
      <FieldLabel label={label}>
        <input
          type="color"
          name={name}
          value={value?.startsWith?.("#") ? value : "#ffffff"}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </FieldLabel>
    );
  },
};
