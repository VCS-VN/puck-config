import { Grid } from "./Grid";
import { Flex } from "./Flex";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Text } from "./Text";
import Root from "./root";
import { Input } from "./Input";
import { ButtonPlugins } from "./Button";
import { Products } from "./Products";
import { Cart } from "./Cart";
import { CategoryGrid } from "./CategoryGrid";
import { IconPlugins } from "./Icon";
import { Banner } from "./Banner";
import { HeroTwoColumn } from "./HeroTwoColumn";
import { CategoryList } from "./CategoryList";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProductDetail } from "./ProductDetail";
import { FacetControls } from "./FacetControls";
import { QrCodePlugins } from "./QrCode";
import { MiniCartBlock } from "./MiniCart";

export const PuckConfig = {
  root: Root,
  categories: {
    layout: {
      components: ["Container", "Grid", "Flex", "HeroTwoColumn"],
      defaultExpanded: true,
    },
    navigation: {
      title: "Navigation",
      components: ["Header"],
      defaultExpanded: true,
    },
    marketing: {
      title: "Marketing",
      components: ["Banner"],
      defaultExpanded: true,
    },
    footer: {
      title: "Footer",
      components: ["Footer"],
      defaultExpanded: true,
    },
    typography: {
      components: ["Heading", "Text", "QrCodePlugins"],
      defaultExpanded: true,
    },
    interactive: {
      title: "Actions",
      components: ["ButtonPlugins", "Input", "IconPlugins"],
      defaultExpanded: false,
    },
    storefront: {
      title: "Product",
      components: [
        "Products",
        "Cart",
        "CategoryGrid",
        "CategoryList",
        "ProductDetail",
        "FacetControls",
        "MiniCartBlock",
      ],
      defaultExpanded: false,
    },
  },

  components: {
    Container,
    Grid,
    Flex,
    // Space,

    Heading,
    Text,

    Input,
    ButtonPlugins,
    IconPlugins,
    QrCodePlugins,

    Products,
    // Product,
    CategoryGrid,
    CategoryList,
    Cart,
    Banner,
    HeroTwoColumn,
    Header,
    Footer,
    ProductDetail,
    FacetControls,
    MiniCartBlock,
  },
};
