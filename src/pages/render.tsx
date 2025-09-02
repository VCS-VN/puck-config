import { PuckConfig } from "@/blocks/puck.config";
import { Render } from "@measured/puck";
import { useEffect, useState } from "react";

const RenderPage = () => {
  const [render, setRender] = useState<number>(0);

  const [dataRender, setDataRender] = useState<any>({
    root: { props: {} },
    content: [],
    zones: {},
  });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const doc = params.get("doc");
      // Support editor docs: ?doc=name -> 'puck:doc:name', or 'last' -> 'puck:lastPublished'
      let data: string | null = null;
      if (doc === "last") {
        data = localStorage.getItem("puck:lastPublished");
      } else if (doc) {
        data = localStorage.getItem(`puck:doc:${doc}`);
      }
      // Fall back to legacy key
      if (!data) data = localStorage.getItem("dataEditor");
      if (data) {
        setDataRender(JSON.parse(data));
        setRender((r) => r + 1);
      }
    } catch (err) {
      console.error("Failed to load render data", err);
    }
  }, []);
  return (
    <Render
      key={render}
      data={dataRender}
      config={PuckConfig}
      metadata={{
        storeId: import.meta.env.VITE_ENTITY_ID,
      }}
    />
  );
};

export default RenderPage;
