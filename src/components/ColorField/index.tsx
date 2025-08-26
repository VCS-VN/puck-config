import { FieldLabel } from "@measured/puck";

export const colorField = {
  type: "custom" as const,
  render: ({
    name,
    onChange,
    value,
  }: {
    name: string;
    onChange: (value: string) => void;
    value: string;
  }) => (
    <FieldLabel label="Background Color">
      <input
        type="color"
        name={name}
        value={value.startsWith("#") ? value : "#ffffff"} // Fallback to white if not hex
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldLabel>
  ),
};
