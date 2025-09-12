import { PuckConfig } from "@/blocks/puck.config";
import { Puck } from "@measured/puck";
import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ModalUploadData from "../components/ModalUploadData";

const EditorPage = () => {
  const [render, setRender] = useState<number>(0);
  const [dataRender, setDataRender] = useState<any>({
    root: { props: {} },
    content: [],
    zones: {},
  });
  const [currentDoc, setCurrentDoc] = useState<string>("default");
  const [docs, setDocs] = useState<string[]>([]);
  const currentDataRef = useRef<any>(null);
  const [viewport, setViewport] = useState<
    "full" | "desktop" | "tablet" | "mobile"
  >("full");

  const docsKey = "puck:docs:list";
  const docKey = (name: string) => `puck:doc:${name}`;

  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem(docsKey) || "[]");
      if (Array.isArray(list) && list.length) {
        setDocs(list);
        const last = localStorage.getItem("puck:lastDoc") || list[0];
        setCurrentDoc(last);
        const d = localStorage.getItem(docKey(last));
        if (d) setDataRender(JSON.parse(d));
      } else {
        const legacy = localStorage.getItem("dataEditor");
        const initial = legacy ? JSON.parse(legacy) : dataRender;
        localStorage.setItem(docKey("default"), JSON.stringify(initial));
        localStorage.setItem(docsKey, JSON.stringify(["default"]));
        localStorage.setItem("puck:lastDoc", "default");
        setDocs(["default"]);
        setCurrentDoc("default");
        setDataRender(initial);
      }
      setRender((r) => r + 1);
    } catch {}
  }, []);

  const saveDoc = (name: string, payload?: any) => {
    const val = payload ?? currentDataRef.current ?? dataRender;
    localStorage.setItem(docKey(name), JSON.stringify(val));
    if (!docs.includes(name)) {
      const list = [...docs, name];
      setDocs(list);
      localStorage.setItem(docsKey, JSON.stringify(list));
    }
    localStorage.setItem("puck:lastDoc", name);
    setCurrentDoc(name);
  };

  const deleteDoc = (name: string) => {
    if (!docs.includes(name)) return;
    localStorage.removeItem(docKey(name));
    const list = docs.filter((d) => d !== name);
    setDocs(list);
    localStorage.setItem(docsKey, JSON.stringify(list));
    const next = list[0] || "default";
    setCurrentDoc(next);
    const d = localStorage.getItem(docKey(next));
    setDataRender(d ? JSON.parse(d) : dataRender);
  };

  const loadDoc = (name: string) => {
    const d = localStorage.getItem(docKey(name));
    if (d) setDataRender(JSON.parse(d));
    setCurrentDoc(name);
    localStorage.setItem("puck:lastDoc", name);
    setRender((r) => r + 1);
  };
  const containerStyle = useMemo(() => {
    switch (viewport) {
      case "desktop":
        return { maxWidth: "1200px", margin: "0 auto" } as any;
      case "tablet":
        return { maxWidth: "768px", margin: "0 auto" } as any;
      case "mobile":
        return { maxWidth: "390px", margin: "0 auto" } as any;
      default:
        return {} as any;
    }
  }, [viewport]);

  function saveData(e: any) {
    const json = JSON.stringify(e);
    localStorage.setItem("puck:lastPublished", json);
  }
  function publishData(e: any) {
    try {
      saveData(e);
      const url = new URL(location.origin + "/render");
      url.searchParams.set("doc", "last");
      window.open(url.toString(), "_blank");
    } catch (err) {
      console.error("Failed to save publish payload", err);
    }
  }
  return (
    <Box>
      <Flex
        gap={2}
        align="center"
        p={3}
        borderBottom="1px solid"
        borderColor="gray.200"
        bg="white"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Box
          as="select"
          value={currentDoc}
          onChange={(e: any) => loadDoc(e.target.value)}
          width="200px"
          padding="6px"
          borderRadius="md"
          border="1px solid"
          borderColor="gray.200"
        >
          {docs.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </Box>
        <Button size="sm" onClick={() => setRender(render + 1)}>
          Reload
        </Button>
        <Button size="sm" onClick={() => saveDoc(currentDoc)}>
          Save
        </Button>

        <ModalUploadData
          dataDefault={dataRender}
          saveData={(e) => {
            saveData(e);
            setDataRender(JSON.parse(e));
            setRender((r) => r + 1);
          }}
        ></ModalUploadData>
        <Button
          size="sm"
          onClick={() => {
            const name =
              window.prompt("Save as name:", currentDoc || "doc-") || "";
            if (name) saveDoc(name);
          }}
        >
          Save As…
        </Button>
        <Button
          size="sm"
          colorPalette="red"
          variant="outline"
          onClick={() => {
            if (window.confirm(`Delete "${currentDoc}"?`))
              deleteDoc(currentDoc);
          }}
        >
          Delete
        </Button>
        <Box flex={1} />
        <Text fontSize="sm" color="gray.600">
          Viewport:
        </Text>
        <Button
          size="sm"
          variant={viewport === "full" ? "solid" : "outline"}
          onClick={() => setViewport("full")}
        >
          Full
        </Button>
        <Button
          size="sm"
          variant={viewport === "desktop" ? "solid" : "outline"}
          onClick={() => setViewport("desktop")}
        >
          Desktop
        </Button>
        <Button
          size="sm"
          variant={viewport === "tablet" ? "solid" : "outline"}
          onClick={() => setViewport("tablet")}
        >
          Tablet
        </Button>
        <Button
          size="sm"
          variant={viewport === "mobile" ? "solid" : "outline"}
          onClick={() => setViewport("mobile")}
        >
          Mobile
        </Button>
        <Button
          size="sm"
          colorPalette="orange"
          onClick={() => {
            const url = new URL(location.origin + "/render");
            url.searchParams.set("doc", currentDoc);
            window.open(url.toString(), "_blank");
          }}
        >
          Preview
        </Button>
      </Flex>

      <Box p={3} style={containerStyle}>
        <Puck
          key={render}
          data={dataRender}
          config={PuckConfig}
          metadata={{
            storeId: import.meta.env.VITE_ENTITY_ID,
          }}
          onChange={(e: any) => {
            currentDataRef.current = e;
          }}
          onPublish={(e: any) => {
            console.log(JSON.stringify(e));
            publishData(e);
          }}
        />
      </Box>
    </Box>
  );
};

export default EditorPage;
