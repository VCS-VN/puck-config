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
    <div className="container mx-auto">
      <Render
        key={render}
        data={{
          root: {
            props: {},
          },
          content: [
            {
              type: "Header",
              props: {
                actionsSlot: [],
                logoType: "text",
                logoText: "Exclusive",
                navLinks: [
                  {
                    label: "Home",
                    href: "/",
                  },
                  {
                    label: "Contact",
                    href: "/contact",
                  },
                  {
                    label: "About",
                    href: "/about",
                  },
                  {
                    label: "Sign Up",
                    href: "/signup",
                  },
                ],
                showSearch: true,
                searchVariableName: "searchQuery",
                searchPlaceholder: "What are you looking for?",
                showWishlist: true,
                showCart: true,
                sticky: true,
                stickyOffset: 0,
                layout: {
                  spanCol: 1,
                  spanRow: 1,
                  grow: false,
                  shrink: true,
                  basis: "auto",
                  paddingTop: "0px",
                  paddingRight: "0px",
                  paddingBottom: "0px",
                  paddingLeft: "0px",
                  marginTop: "0px",
                  marginRight: "0px",
                  marginBottom: "0px",
                  marginLeft: "0px",
                  bgColor: "#ffffff",
                  bgImage: "",
                  border: "none",
                  borderRadius: "0",
                },
                id: "Header-52523446-3fb5-4fb7-98b7-ad3abd7ea1a5",
              },
            },
            {
              type: "Input",
              props: {
                variableName: "searchProducts",
                placeholder: "Search Products...",
                initialValue: "",
                layout: {
                  spanCol: 1,
                  spanRow: 1,
                  grow: false,
                  shrink: true,
                  basis: "auto",
                  paddingTop: "0px",
                  paddingRight: "0px",
                  paddingBottom: "0px",
                  paddingLeft: "0px",
                  marginTop: "0px",
                  marginRight: "0px",
                  marginBottom: "0px",
                  marginLeft: "0px",
                  bgColor: "#ffffff",
                  bgImage: "",
                  border: "none",
                  borderRadius: "0",
                },
                id: "Input-d303cc30-e154-4162-ac6b-b3c569534044",
              },
            },
            {
              type: "Products",
              props: {
                footer: [
                  {
                    type: "MiniCartBlock",
                    props: {
                      keyAddToCart: "productCart",
                      showBadge: true,
                      placement: "fixed-bottom-right",
                      layout: {
                        spanCol: 1,
                        spanRow: 1,
                        grow: false,
                        shrink: true,
                        basis: "auto",
                        paddingTop: "0px",
                        paddingRight: "0px",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                        marginTop: "0px",
                        marginRight: "0px",
                        marginBottom: "0px",
                        marginLeft: "0px",
                        bgColor: "#ffffff",
                        bgImage: "",
                        border: "none",
                        borderRadius: "0",
                      },
                      id: "MiniCartBlock-32edb51c-d4f2-4001-a8c5-9c9e79943c89",
                    },
                  },
                ],
                header: [],
                mobile: 2,
                tablet: 4,
                desktop: 4,
                limit: 10,
                noResultsText: "No Results",
                variableName: "searchProducts",
                layout: {
                  spanCol: 1,
                  spanRow: 1,
                  grow: false,
                  shrink: true,
                  basis: "auto",
                  paddingTop: "0px",
                  paddingRight: "0px",
                  paddingBottom: "0px",
                  paddingLeft: "0px",
                  marginTop: "0px",
                  marginRight: "0px",
                  marginBottom: "0px",
                  marginLeft: "0px",
                  bgColor: "#ffffff",
                  bgImage: "",
                  border: "none",
                  borderRadius: "0",
                },
                id: "Products-4c59c5c0-a4f4-4964-8d42-44ddf38b6453",
              },
            },
          ],
          zones: {},
        }}
        config={PuckConfig}
        metadata={{
          storeId: import.meta.env.VITE_ENTITY_ID,
          entityId: import.meta.env.VITE_ENTITY_ID,
        }}
      />
    </div>
  );
};

export default RenderPage;
