import styles from "./styles.module.css";
import { Section } from "../../components/Section";
import { withLayout } from "../../components/Layout";
import getClassNameFactory from "../../utils/get-class-name-factory";
import { ComponentConfig, Slot } from "@measured/puck";

const getClassName = getClassNameFactory("Grid", styles);

export type GridProps = {
  numColumns: number;
  gap: number;
  items: Slot;
};

export const GridInternal: ComponentConfig<GridProps> = {
  fields: {
    numColumns: {
      type: "number",
      label: "Number of columns",
      min: 1,
      max: 12,
    },
    gap: {
      label: "Gap",
      type: "number",
      min: 0,
    },
    items: {
      type: "slot",
    },
  },
  defaultProps: {
    numColumns: 1,
    gap: 24,
    items: [],
  },
  render: ({ gap, numColumns, items: Items }: any) => {
    return (
      <Section>
        <Items
          disallow={["Hero", "Stats"]}
          className={getClassName()}
          style={{
            gap,
            gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
          }}
        />
      </Section>
    );
  },
};

export const Grid = withLayout(GridInternal);
