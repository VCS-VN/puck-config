import { FieldLabel } from "@measured/puck";
import TinymceRender from "@/components/InputRichText/Tinymce.tsx";

export const InputRichText = {
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
    label?: string;
  }) => {

    return <FieldLabel label={label || "Content"}>
      <TinymceRender
          name={name}
          model={value || ""}
          onBlur={(_: any, editor: any) => {
            onChange(editor);
          }}
      ></TinymceRender>
    </FieldLabel>
  },
};
