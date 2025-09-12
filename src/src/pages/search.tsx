import { Render } from "@measured/puck";
import { PuckConfig } from "@/blocks/puck.config";

const SearchPage = () => {
  return (
    <Render
      data={{
        root: { props: {} },
        content: [
          {
            type: "Products",
            props: {
              mobile: 2,
              tablet: 4,
              desktop: 4,
              limit: 12,
              variableName: "searchQuery",
              selectionMode: "limit",
              sortBy: "featured",
            },
          },
        ],
        zones: {},
      }}
      config={PuckConfig}
      metadata={{
        storeId: import.meta.env.VITE_ENTITY_ID,
      }}
    />
  );
};

export default SearchPage;

