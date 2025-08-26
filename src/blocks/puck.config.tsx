// import {
//   Divider as AntDivider,
//   Form as AntForm,
//   Image as AntImage,
//   Input as AntdInput,
//   Button as AntdButton,
// } from "antd";
import { Grid } from "./Grid";
import { Flex } from "./Flex";
import { Space } from "./Space";
import { Heading } from "./Heading";
import { Text } from "./Text";
import Root from "./root";
import { Input } from "./Input";
import { Button } from "./Button";
import { ProductCard } from "./ProductCard";
import { Products } from "./Products";
import { CategoryGrid } from "./CategoryGrid";

export const PuckConfig = {
  root: Root,
  categories: {
    layout: {
      components: ["Grid", "Flex", "Space"],
    },
    typography: {
      components: ["Heading", "Text"],
    },
    interactive: {
      title: "Actions",
      components: ["Button", "RichText", "Input"],
    },
    other: {
      title: "Other",
      components: ["Card", "Hero", "Logos", "Stats", "Template"],
    },
    storefront: {
      title: "Product",
      components: ["ProductCard", "Products", "CategoryGrid"],
    },
  },

  components: {
    Container: {
      fields: {
        background: { type: "text" },
        padding: { type: "number" },
      },
      render: ({ background, padding, children }: any) => (
        <div style={{ background, padding }}>{children}</div>
      ),
    },
    Grid,
    Flex,
    Space,

    Heading,
    Text,

    Input,
    Button,

    Products,
    ProductCard,
    CategoryGrid,

    // Divider: { fields: {}, render: () => <AntDivider /> },

    // Typography

    RichText: {
      fields: { html: { type: "textarea" } },
      render: ({ html }: any) => (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ),
    },

    // Media
    // Image: {
    //   fields: { src: { type: "text" }, alt: { type: "text" } },
    //   render: ({ src, alt }: any) => <AntImage src={src} alt={alt} />,
    // },
    // Video: {
    //   fields: { url: { type: "text" } },
    //   render: ({ url }: any) => (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src={url}
    //       frameBorder="0"
    //       allowFullScreen
    //     />
    //   ),
    // },

    // // CMS
    // BlogList: {
    //   fields: {},
    //   render: () => (
    //     <Row gutter={16}>
    //       {fetchBlogPosts().map((b) => (
    //         <Col span={8} key={b.id}>
    //           <Card title={b.title}>{b.excerpt}</Card>
    //         </Col>
    //       ))}
    //     </Row>
    //   ),
    // },
    // BlogDetail: {
    //   fields: { id: { type: "text" } },
    //   render: ({ id }) => {
    //     const blog = fetchBlogPosts().find((b) => b.id === id);
    //     if (!blog) return <Paragraph>Blog not found</Paragraph>;
    //     return (
    //       <Card title={blog.title}>
    //         <Paragraph>{blog.excerpt}</Paragraph>
    //       </Card>
    //     );
    //   },
    // },

    // Storefront

    // Navigation
    // Navbar: {
    //   fields: {
    //     links: {
    //       type: "list",
    //       of: {
    //         type: "object",
    //         fields: { href: { type: "text" }, label: { type: "text" } },
    //       },
    //     },
    //   },
    //   render: ({ links }) => (
    //     <Header>
    //       <Menu theme="dark" mode="horizontal">
    //         {links?.map((l: any) => (
    //           <Menu.Item key={l.href}>
    //             <a href={l.href}>{l.label}</a>
    //           </Menu.Item>
    //         ))}
    //       </Menu>
    //     </Header>
    //   ),
    // },
    // Breadcrumb: {
    //   fields: {
    //     items: {
    //       type: "list",
    //       of: {
    //         type: "object",
    //         fields: { href: { type: "text" }, label: { type: "text" } },
    //       },
    //     },
    //   },
    //   render: ({ items }) => (
    //     <AntBreadcrumb>
    //       {items?.map((i: any) => (
    //         <AntBreadcrumb.Item key={i.href}>
    //           <a href={i.href}>{i.label}</a>
    //         </AntBreadcrumb.Item>
    //       ))}
    //     </AntBreadcrumb>
    //   ),
    // },
    // Footer: {
    //   fields: { text: { type: "text" } },
    //   render: ({ text }) => (
    //     <Footer style={{ textAlign: "center" }}>{text}</Footer>
    //   ),
    // },

    // Interaction

    // Form: {
    //   fields: { placeholder: { type: "text" } },
    //   render: ({ placeholder }: any) => (
    //     <AntForm layout="inline" onFinish={(v) => console.log(v)}>
    //       <AntForm.Item name="input">
    //         <AntdInput placeholder={placeholder} />
    //       </AntForm.Item>
    //       <AntForm.Item>
    //         <AntdButton htmlType="submit">Gửi</AntdButton>
    //       </AntForm.Item>
    //     </AntForm>
    //   ),
    // },
    // SearchBar: {
    //   fields: {},
    //   render: () => <AntdInput.Search placeholder="Tìm kiếm..." />,
    // },

    // Utility
    SEO: {
      fields: { title: { type: "text" }, description: { type: "text" } },
      render: ({
        title,
        description,
      }: {
        title?: string;
        description?: string;
      }) => {
        document.title = title || "";
        return <meta name="description" content={description} />;
      },
    },
  },
};

// const config = {
//   components: {
//     Header: {
//       fields: {
//         title: { type: "text" },
//         navLinks: {
//           type: "array",
//           arrayFields: {
//             label: { type: "text" },
//             url: { type: "text" },
//           },
//           defaultItemProps: { label: "Link", url: "#" },
//         },
//       },
//       defaultProps: {
//         title: "My Store",
//         navLinks: [
//           { label: "Home", url: "/" },
//           { label: "Products", url: "/products" },
//         ],
//       },
//       render: ({ title, navLinks }) => (
//         <div style={{ padding: "16px", background: "#001529" }}>
//           <Title level={2} style={{ color: "white", margin: 0 }}>
//             {title}
//           </Title>
//           <Menu
//             mode="horizontal"
//             theme="dark"
//             items={navLinks.map((link) => ({
//               key: link.url,
//               label: <a href={link.url}>{link.label}</a>,
//             }))}
//           />
//         </div>
//       ),
//     },
//     ProductCard: {
//       fields: {
//         title: { type: "text" },
//         description: { type: "textarea" },
//         imageUrl: { type: "text" },
//         price: { type: "number" },
//         productId: {
//           type: "external",
//           adaptor: {
//             name: "Contentful Products",
//             fetchList: async () => {
//               // Giả lập lấy dữ liệu từ Contentful
//               return [
//                 {
//                   id: "1",
//                   title: "Sample Product 1",
//                   description: "Description 1",
//                   imageUrl: "https://via.placeholder.com/150",
//                   price: 29.99,
//                 },
//                 {
//                   id: "2",
//                   title: "Sample Product 2",
//                   description: "Description 2",
//                   imageUrl: "https://via.placeholder.com/150",
//                   price: 49.99,
//                 },
//               ];
//             },
//           },
//         },
//       },
//       defaultProps: {
//         title: "Product Name",
//         description: "Product description goes here.",
//         imageUrl: "https://via.placeholder.com/150",
//         price: 19.99,
//       },
//       render: ({ title, description, imageUrl, price }) => (
//         <Card
//           hoverable
//           style={{ width: 240, margin: "16px" }}
//           cover={<img alt={title} src={imageUrl} />}
//         >
//           <Card.Meta title={title} description={description} />
//           <Paragraph style={{ marginTop: "8px" }}>
//             <strong>${price}</strong>
//           </Paragraph>
//           <Button type="primary">Add to Cart</Button>
//         </Card>
//       ),
//     },
//     Grid: {
//       render: () => (
//         <Row gutter={[16, 16]}>
//           <Puck.DropZone zone="grid-content" />
//         </Row>
//       ),
//     },
//     Footer: {
//       fields: {
//         text: { type: "text" },
//       },
//       defaultProps: {
//         text: "© 2025 My Store. All rights reserved.",
//       },
//       render: ({ text }) => (
//         <div
//           style={{
//             padding: "16px",
//             background: "#f0f2f5",
//             textAlign: "center",
//           }}
//         >
//           <Divider />
//           <Paragraph>{text}</Paragraph>
//         </div>
//       ),
//     },
//     ContentBlock: {
//       fields: {
//         content: { type: "textarea" },
//         imageUrl: { type: "text" },
//         align: {
//           type: "radio",
//           options: [
//             { label: "Left", value: "left" },
//             { label: "Center", value: "center" },
//             { label: "Right", value: "right" },
//           ],
//         },
//       },
//       defaultProps: {
//         content: "Enter your content here.",
//         imageUrl: "",
//         align: "left",
//       },
//       render: ({ content, imageUrl, align }) => (
//         <div style={{ padding: "16px", textAlign: align }}>
//           {imageUrl && (
//             <Image
//               src={imageUrl}
//               width={300}
//               style={{ marginBottom: "16px" }}
//             />
//           )}
//           <Paragraph>{content}</Paragraph>
//         </div>
//       ),
//     },
//   },
//   root: {
//     render: ({ children }) => (
//       <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
//         {children}
//       </div>
//     ),
//   },
// };
