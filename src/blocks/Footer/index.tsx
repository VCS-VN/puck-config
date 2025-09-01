import { ComponentConfig } from "@measured/puck";
import { withLayout } from "@/components/Layout";
import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  Input,
  IconButton,
} from "@chakra-ui/react";
import {
  LuFacebook,
  LuInstagram,
  LuTwitter,
  LuYoutube,
  LuLinkedin,
  LuGithub,
} from "react-icons/lu";

export type FooterProps = {
  columns: { title?: string; links: { label: string; href: string }[] }[];
  showNewsletter?: boolean;
  newsletterPlaceholder?: string;
  showSocial?: boolean;
  socialLinks?: { platform: string; href: string }[];
};

const FooterInternal: ComponentConfig<FooterProps> = {
  label: "Footer",
  fields: {
    columns: {
      type: "array",
      label: "Columns",
      min: 1,
      arrayFields: {
        title: { type: "text", label: "Title" },
        links: {
          type: "array",
          label: "Links",
          arrayFields: {
            label: { type: "text", label: "Label", contentEditable: true },
            href: { type: "text", label: "Href" },
          },
          defaultItemProps: { label: "Link", href: "#" },
        },
      },
      defaultItemProps: { title: "Column", links: [] },
    },
    showNewsletter: {
      type: "radio",
      label: "Newsletter",
      options: [
        { label: "On", value: true },
        { label: "Off", value: false },
      ],
    },
    newsletterPlaceholder: { type: "text", label: "Newsletter Placeholder" },
    showSocial: {
      type: "radio",
      label: "Social Icons",
      options: [
        { label: "On", value: true },
        { label: "Off", value: false },
      ],
    },
    socialLinks: {
      type: "array",
      label: "Social Links",
      arrayFields: {
        platform: {
          type: "select",
          label: "Platform",
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "Twitter/X", value: "twitter" },
            { label: "YouTube", value: "youtube" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "GitHub", value: "github" },
          ],
        },
        href: { type: "text", label: "URL" },
      },
      defaultItemProps: { platform: "facebook", href: "https://facebook.com" },
    },
  },
  defaultProps: {
    columns: [
      {
        title: "Shop",
        links: [
          { label: "New Arrivals", href: "/" },
          { label: "Best Sellers", href: "/" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Contact", href: "/contact" },
          { label: "FAQ", href: "/faq" },
        ],
      },
    ],
    showNewsletter: true,
    newsletterPlaceholder: "Enter your email",
    showSocial: true,
    socialLinks: [
      { platform: "facebook", href: "https://facebook.com" },
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "twitter", href: "https://twitter.com" },
    ],
  },
  render: ({
    columns,
    showNewsletter,
    newsletterPlaceholder,
    showSocial,
    socialLinks = [],
    puck,
  }) => {
    const isEditing = !!puck?.isEditing;
    const iconMap: Record<string, any> = {
      facebook: LuFacebook,
      instagram: LuInstagram,
      twitter: LuTwitter,
      youtube: LuYoutube,
      linkedin: LuLinkedin,
      github: LuGithub,
    };
    return (
      <Box
        bg="gray.50"
        borderTop="1px solid"
        borderColor="gray.200"
        py={8}
        px={{ base: 4, md: 8 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={8}
          justify="space-between"
        >
          <Flex gap={8} wrap="wrap" flex={1}>
            {columns?.map((col, idx) => (
              <Stack key={idx} minW={{ base: "40%", md: "200px" }}>
                {col.title ? (
                  <Text fontWeight="semibold">{col.title}</Text>
                ) : null}
                {(col.links || []).map((l, i) => (
                  <Link
                    key={i}
                    href={!isEditing ? l.href : undefined}
                    onClick={(e) => isEditing && e.preventDefault()}
                    color="gray.700"
                  >
                    {l.label}
                  </Link>
                ))}
              </Stack>
            ))}
          </Flex>
          <Stack minW={{ base: "100%", md: "320px" }}>
            {showNewsletter ? (
              <Flex align="center" gap={2}>
                <Input placeholder={newsletterPlaceholder || "Email"} />
                <IconButton aria-label="Subscribe">Go</IconButton>
              </Flex>
            ) : null}
            {showSocial ? (
              <Flex gap={2}>
                {socialLinks
                  .filter((s) => !!s?.href && !!s?.platform)
                  .map((s, idx) => {
                    const Icon = iconMap[s.platform] || LuTwitter;
                    return (
                      <Link
                        key={`${s.platform}-${idx}`}
                        href={s.href}
                        target={isEditing ? undefined : "_blank"}
                      >
                        <IconButton
                          key={`${s.platform}-${idx}`}
                          aria-label={s.platform}
                          as={isEditing ? undefined : "a"}
                          // href={isEditing ? undefined : s.href}
                          // target={isEditing ? undefined : "_blank"}
                          rel={isEditing ? undefined : "noopener noreferrer"}
                        >
                          <Icon />
                        </IconButton>
                      </Link>
                    );
                  })}
              </Flex>
            ) : null}
          </Stack>
        </Flex>
        <Text mt={6} color="gray.500" fontSize="sm">
          © {new Date().getFullYear()} Your Store
        </Text>
      </Box>
    );
  },
};

export const Footer = withLayout(FooterInternal);
