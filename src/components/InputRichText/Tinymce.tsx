import React, { useEffect, useRef, useState } from "react";
// Import TinyMCE
// @ts-ignore
import tinymce from "tinymce/tinymce";

// A theme is also required
import "tinymce/icons/default/index";
import "tinymce/themes/silver";

import "tinymce/models/dom/model";
import "tinymce/skins/ui/oxide/skin.css";

// Any plugins you want to use has to be imported
import "tinymce/plugins/advlist";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/lists";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/charmap";
import "tinymce/plugins/preview";
import "tinymce/plugins/anchor";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/code";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/help";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/template";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/emoticons/js/emojis";
import "tinymce/plugins/quickbars/plugin";

import "tinymce/plugins/help/js/i18n/keynav/zh_CN";
import "tinymce/plugins/help/js/i18n/keynav/en";
import "tinymce/plugins/help/js/i18n/keynav/de";
import './tinyMceStyle.css'

const TinymceRender: React.FC<any> = ({
  model,
  onModelChange,
  onFocus,
  onBlur,
  disabled,
  config = {},
  outputFormat = "html",
  // locale,
}) => {
  const elementRef = useRef<HTMLTextAreaElement>(null);
  const [editor, setEditor] = useState<any>(null);
  const [currentContent, setCurrentContent] = useState<string | undefined>(
    model
  );
  const [editorInitialized, setEditorInitialized] = useState(false);

  const initTiny = async () => {
    const {
      onLoaded,
      ...rest
    } = config;
    const tinymceConfig = {
      inline: false,
      skin: false,
      min_height: 500,
      language: "en",
      branding: false,
      plugins: [
        "advlist",
        "autolink",
        "autoresize",
        "link",
        "image",
        "lists",
        "charmap",
        "preview",
        "anchor",
        "pagebreak",
        "searchreplace",
        "wordcount",
        "visualblocks",
        "visualchars",
        "code",
        "fullscreen",
        "insertdatetime",
        "media",
        "nonbreaking",
        "table",
        "emoticons",
        "template",
        "help",
        "quickbars",
      ],
      toolbar:
        "undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | " +
        "bullist numlist outdent indent | link image | preview media | " +
        "fontfamily fontsize forecolor backcolor emoticons | print",
      quickbars_selection_toolbar: "bold italic | link h2 h3 blockquote",
      quickbars_insert_toolbar: "quickimage quicktable",
      menu: {
        file: {
          title: "File",
          items: "newdocument restoredraft | preview | print ",
        },
        edit: {
          title: "Edit",
          items: "undo redo | cut copy paste | selectall | searchreplace",
        },
        view: {
          title: "View",
          items:
            "code | visualaid visualchars visualblocks | preview fullscreen",
        },
        insert: {
          title: "Insert",
          items:
            "image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime",
        },
        format: {
          title: "Format",
          items:
            "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontsize align | forecolor backcolor | removeformat",
        },
        tools: {
          title: "Tools",
          items: "code wordcount",
        },
        table: {
          title: "Table",
          items: "inserttable | cell row column | tableprops deletetable",
        },
        // help: { title: "Help", items: "help" },
      },
      paste_data_images: true,
      content_style: [
        ".mce-content-body div.mce-resizehandle { background-color: #4099ff; border-color: #4099ff; border-style: solid; border-width: 1px; box-sizing: border-box; height: 10px; position: absolute; width: 10px; z-index: 1298 } .mce-content-body .mce-clonedresizable { cursor: default; opacity: .5; outline: 1px dashed #000; position: absolute; z-index: 10001 }",
        "[data-mce-bogus] video {display:none;}",
      ].join("\n"),
      // ...rest,
      target: elementRef.current as any,
      readOnly: disabled,
      promotion: false,
      setup: (editorInstance: any) => {
        setEditor(editorInstance);

        editorInstance.on("init", (e: Event) => {
          setEditorInitialized(true);
          initEditor(editorInstance);
        });
      },
    };

    tinymce.init(tinymceConfig);
  };

  const initEditor = (editorInstance: any) => {
    editorInstance.setContent(currentContent || "");

    if (onModelChange) {
      editorInstance.on("change keyup setcontent", () => {
        const newContent = editorInstance.getContent({ format: outputFormat });
        if (newContent !== currentContent) {
          setCurrentContent(newContent);
          onModelChange(newContent);
        }
      });
    }

    if (onFocus) {
      editorInstance.on("focus", onFocus);
    }

    if (onBlur) {
      editorInstance.on("blur", (e:any) => {
        onBlur(e, editorInstance.getContent({ format: outputFormat }));
      });
    }
  };

  useEffect(() => {
    initTiny();
    return () => {
      if (editor) {
        tinymce.remove(editor);
      }
    };
  }, []);

  useEffect(() => {
    if (editorInitialized && model !== currentContent) {
      editor?.setContent(model || "");
      setCurrentContent(model);
    }
  }, [model, editorInitialized]);

  return <textarea ref={elementRef} />;
};

export default TinymceRender;
