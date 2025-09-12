import { Section } from "../../components/Section";
import { WithLayout, withLayout } from "../../components/Layout";
import { ComponentConfig } from "@measured/puck";
import {InputRichText} from "@/components/InputRichText";
export type TextProps = WithLayout<{
  text?: any;
  maxWidth?: string;
  href?: string;
}>;

const TextInner: ComponentConfig<TextProps> = {
  fields: {
    text: {
      label: "Content",
      ...InputRichText
    },
    maxWidth: { type: "text" },
    href: {
      label: 'Link',
      type: "text"
    },
  },
  defaultProps: {
    text: "Text",
    href: '',
    maxWidth: '100%',
  },
  render: ({ text, maxWidth,href }) => {
    return (
        <div style={{
          maxWidth: maxWidth || '100%'
        }}>
          <a href={href}>
            <article className="prose max-w-none">
              <div dangerouslySetInnerHTML={{__html: text}}/>
            </article>
          </a>

        </div>
    );
  },
};

export const Text = withLayout(TextInner);
