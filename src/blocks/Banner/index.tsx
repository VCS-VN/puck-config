import { ComponentConfig } from "@measured/puck";
import { withLayout } from "@/components/Layout";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import {useGetSlidersQuery} from "../../hooks/sliders";
import _ from "lodash";
import {matchDataCondition} from "../CommonFunction/function";

type Slide = {
  imageUrl: string;
  alt?: string;
  textEnabled?: boolean;
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

type HeightByBreakpoint = { base?: number; md?: number; lg?: number };

export type BannerProps = {
  height?: number | HeightByBreakpoint; // px or responsive
  textSide?: "left" | "right";
  verticalAlign?: "start" | "center" | "end";
  imageFit?: "cover" | "contain";
  autoplay?: boolean;
  intervalMs?: number;
  showDots?: boolean;
  showArrows?: boolean;
  overlayEnabled?: boolean;
  overlayOpacity?: number; // 0..1
  overlayWidthPercent?: number; // 0..100
  slides: Slide[];
};

const BannerInternal: ComponentConfig<BannerProps> = {
  label: "Banner",
  fields: {
    height: {
      type: "object",
      label: "Height (px)",
      objectFields: {
        base: { type: "number", label: "base", min: 200, max: 900 },
        md: { type: "number", label: "md", min: 200, max: 900 },
        lg: { type: "number", label: "lg", min: 200, max: 900 },
      },
    },
    textSide: {
      type: "radio",
      label: "Text Side",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
    },
    verticalAlign: {
      type: "radio",
      label: "Vertical Align",
      options: [
        { label: "Top", value: "start" },
        { label: "Center", value: "center" },
        { label: "Bottom", value: "end" },
      ],
    },
    imageFit: {
      type: "select",
      label: "Image Fit",
      options: [
        { label: "Cover", value: "cover" },
        { label: "Contain", value: "contain" },
      ],
    },
    autoplay: { type: "radio", label: "Autoplay", options: [
      { label: "On", value: true },
      { label: "Off", value: false },
    ] },
    intervalMs: { type: "number", label: "Autoplay Interval (ms)", min: 1000, max: 30000 },
    showDots: { type: "radio", label: "Show Dots", options: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ] },
    showArrows: { type: "radio", label: "Show Arrows", options: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ] },
    overlayEnabled: { type: "radio", label: "Text Overlay", options: [
      { label: "On", value: true },
      { label: "Off", value: false },
    ] },
    overlayOpacity: { type: "number", label: "Overlay Opacity (0-1)", min: 0, max: 1 },
    overlayWidthPercent: { type: "number", label: "Overlay Width %", min: 10, max: 100 },
    slides: {
      type: "array",
      label: "Slides",
      min: 0,
      arrayFields: {
        imageUrl: { type: "text", label: "Image URL" },
        alt: { type: "text", label: "Alt" },
        textEnabled: {
          type: "radio",
          label: "Show Text",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        eyebrow: { type: "text", label: "Eyebrow" },
        headline: { type: "text", label: "Headline", contentEditable: true },
        description: { type: "textarea", label: "Description" },
        ctaLabel: { type: "text", label: "CTA Label" },
        ctaHref: { type: "text", label: "CTA Link" },
      },
      defaultItemProps: {
        imageUrl: "https://picsum.photos/1200/600",
        alt: "",
        textEnabled: true,
        eyebrow: "Series",
        headline: "Up to 10% off Voucher",
        description: "",
        ctaLabel: "Shop Now",
        ctaHref: "#",
      },
    },
  },
  defaultProps: {
    height: { base: 360, md: 420, lg: 420 },
    textSide: "left",
    verticalAlign: "center",
    imageFit: "cover",
    autoplay: true,
    intervalMs: 5000,
    showDots: true,
    showArrows: true,
    overlayEnabled: true,
    overlayOpacity: 0.6,
    overlayWidthPercent: 60,
    slides: [
      // {
      //   imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
      //   alt: "Banner 1",
      //   textEnabled: true,
      //   eyebrow: "iPhone 14 Series",
      //   headline: "Up to 10% off Voucher",
      //   description: "",
      //   ctaLabel: "Shop Now",
      //   ctaHref: "#",
      // },
      // {
      //   imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
      //   alt: "Banner 2",
      //   textEnabled: true,
      //   eyebrow: "iPhone 12 Series",
      //   headline: "Up to 12% off Voucher",
      //   description: "",
      //   ctaLabel: "Shop Now 2",
      //   ctaHref: "#",
      // },
    ],
  },
  render: ({
    height,
    textSide,
    verticalAlign,
    imageFit,
    autoplay,
    intervalMs,
    showDots,
    showArrows,
    overlayEnabled,
    overlayOpacity,
    overlayWidthPercent,
    slides,
    puck,
  }) => {

    const {data: bannerData} = useGetSlidersQuery({})
    console.log("bannerData",bannerData)
    const [index, setIndex] = useState(0);
    const timerRef = useRef<number | null>(null);
    const safeSlides = useMemo(() => {
      if (Array.isArray(slides) && slides.length > 0) {
        return slides
      }
      if (_.isArray(bannerData) && bannerData?.length > 0) {
        const newData : any = bannerData.map((item: any) => {
          return {
            imageUrl: item?.image,
            alt: item?.name,
            textEnabled: true,
            eyebrow: item?.name,
            // headline: "Up to 12% off Voucher",
            description: "",
            ctaLabel: "Shop Now",
            ctaHref: matchDataCondition(item?.url,item?.params),
          }
        }).sort((a:any, b:any) => {
          const ai = a.index ?? Infinity;
          const bi = b.index ?? Infinity;
          return ai - bi;
        });
        return newData;
      }
      return []
    }, [slides,bannerData]);

    const next = () => setIndex((i) => (i + 1) % (safeSlides.length || 1));
    const prev = () => setIndex((i) => (i - 1 + (safeSlides.length || 1)) % (safeSlides.length || 1));

    useEffect(() => {
      if (!autoplay || puck?.isEditing || safeSlides.length <= 1) return;
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = window.setInterval(next, Math.max(1000, intervalMs || 5000));
      return () => {
        if (timerRef.current) window.clearInterval(timerRef.current);
      };
    }, [autoplay, intervalMs, puck?.isEditing, safeSlides.length]);

    const current = safeSlides[index] as Slide | undefined;

    const heightObj: HeightByBreakpoint = typeof height === "number" ? { base: height, md: height, lg: height } : (height || {});
    const hBase = (heightObj.base ?? 360);
    const hMd = (heightObj.md ?? hBase);
    const hLg = (heightObj.lg ?? hMd);
    return (
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="lg"
        onMouseEnter={() => { if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; } }}
        onMouseLeave={() => { if (autoplay && !puck?.isEditing && safeSlides.length > 1) { timerRef.current = window.setInterval(next, Math.max(1000, intervalMs || 5000)); } }}
      >
        {/* Slide */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="stretch"
          align={verticalAlign === "start" ? "flex-start" : verticalAlign === "end" ? "flex-end" : "center"}
          gap={6}
          h={{ base: `${hBase}px`, md: `${hMd}px`, lg: `${hLg}px` }}
          bg="black"
          color="white"
          p={{ base: 6, md: 10 }}
        >
          {overlayEnabled && (
            <Box
              position="absolute"
              inset={0}
              pointerEvents="none"
              bgGradient={
                textSide === "left"
                  ? `linear(to-r, rgba(0,0,0,${overlayOpacity ?? 0.6}) ${overlayWidthPercent ?? 60}%, rgba(0,0,0,0) 100%)`
                  : `linear(to-l, rgba(0,0,0,${overlayOpacity ?? 0.6}) ${overlayWidthPercent ?? 60}%, rgba(0,0,0,0) 100%)`
              }
            />
          )}
          {/* Text area */}
          {current?.textEnabled !== false && (
            <Flex
              order={textSide === "left" ? 0 : 1}
              direction="column"
              justify={verticalAlign === "start" ? "flex-start" : verticalAlign === "end" ? "flex-end" : "center"}
              flex={{ base: "0 0 auto", md: "1 1 50%" }}
              minW={{ base: "100%", md: "50%" }}
              gap={3}
            >
              {current?.eyebrow ? (
                <Text color="gray.300" fontSize={{ base: "sm", md: "md" }}>{current.eyebrow}</Text>
              ) : null}
              {current?.headline ? (
                <Heading fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1.1">
                  {current.headline}
                </Heading>
              ) : null}
              {current?.description ? (
                <Text color="gray.200" fontSize={{ base: "sm", md: "md" }}>
                  {current.description}
                </Text>
              ) : null}
              {current?.ctaLabel ? (
                <Button
                  onClick={(e) => {
                    if (puck?.isEditing) return e.preventDefault();
                    const href = current.ctaHref || '#'
                    if (href.startsWith('http')) window.open(href, '_blank', 'noopener,noreferrer')
                    else window.location.assign(href)
                  }}
                  variant="solid"
                  colorScheme="gray"
                  mt={2}
                  alignSelf="flex-start"
                >
                  {current.ctaLabel}
                </Button>
              ) : null}
            </Flex>
          )}

          {/* Image */}
          <Flex
            order={textSide === "left" ? 1 : 0}
            justify="center"
            align="center"
            flex={{ base: "1 1 auto", md: current?.textEnabled !== false ? "1 1 50%" : "1 1 100%" }}
            minW={{ base: "100%", md: current?.textEnabled !== false ? "50%" : "100%" }}
          >
            {current?.imageUrl ? (
              <Image
                src={current.imageUrl}
                alt={current.alt || "banner"}
                objectFit={imageFit || "cover"}
                maxH={{ base: `${hBase}px`, md: `${hMd}px`, lg: `${hLg}px` }}
              />
            ) : null}
          </Flex>
        </Flex>

        {/* Arrows */}
        {showArrows && safeSlides.length > 1 && (
          <>
            <IconButton
              aria-label="Previous"
              onClick={prev}
              position="absolute"
              top="50%"
              left={3}
              transform="translateY(-50%)"
              variant="ghost"
              color="white"
            >
              <LuChevronLeft />
            </IconButton>
            <IconButton
              aria-label="Next"
              onClick={next}
              position="absolute"
              top="50%"
              right={3}
              transform="translateY(-50%)"
              variant="ghost"
              color="white"
            >
              <LuChevronRight />
            </IconButton>
          </>
        )}

        {/* Dots */}
        {showDots && safeSlides.length > 1 && (
          <Stack direction="row" gap={2} position="absolute" bottom={4} left="50%" transform="translateX(-50%)">
            {safeSlides.map((_, i) => (
              <Box
                key={i}
                w={2}
                h={2}
                borderRadius="full"
                bg={i === index ? "red.400" : "gray.500"}
                cursor="pointer"
                onClick={() => setIndex(i)}
              />
            ))}
          </Stack>
        )}
      </Box>
    );
  },
};

export const Banner = withLayout(BannerInternal);
