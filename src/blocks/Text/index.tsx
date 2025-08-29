import { Section } from "../../components/Section";
import { WithLayout, withLayout } from "../../components/Layout";
import { ComponentConfig } from "@measured/puck";
// import {InputRichText} from "@/components/InputRichText";
export type TextProps = WithLayout<{
  // text?: any;
  // padding?: string;
  // maxWidth?: string;
}>;

const TextInner: ComponentConfig<TextProps> = {
  fields: {
    // text: {
    //   label: "Content",
    //   ...InputRichText
    // },
    // maxWidth: { type: "text" },
  },
  defaultProps: {
    // text: "Text",
  },
  render: ({}) => {
    return (
      <Section>
        <article className="prose max-w-none lg:prose-xl">
          {/* <div dangerouslySetInnerHTML={{ __html: text }} /> */}
        </article>
      </Section>
    );
  },
};

export const Text = withLayout(TextInner);
