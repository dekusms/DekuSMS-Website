import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
  Dialog,
  useTheme,
} from "@mui/material";
import {
  DownloadOutlined,
  CloseOutlined,
  ExpandOutlined,
  ExportOutlined,
  LinkOutlined,
} from "@ant-design/icons";


const ACCENT = "#2ED3B7";
const NAVY = "#0D1B8E";
const INDIGO = "#001871";
const CARD = "#FFFFFF";
const TEXT_SECONDARY = "#3D4E7A";
const TEXT_MUTED = "#7A8AB0";
const BORDER = "rgba(13,27,142,0.10)";

const BASE = "/DekuSMS";
const asset = (path) => encodeURI(`${BASE}/${path}`);

const VARIANT_BG = {
  Default: "#FFFFFF",
  Blue: "#FFFFFF",
  Black: "#FFFFFF",
  White: INDIGO,
  "Dark Theme": "#07141A",
};

const LOGO_GROUPS = [
  {
    title: "Full Logo",
    folder: "Full Logo",
    file: (v) => `DekuSMS-${v}`,
    variants: ["Default", "Dark Theme", "Blue", "Black", "White"],
  },
  {
    title: "Logo Icon",
    folder: "Logo Icon",
    file: (v) => `DekuSMS-Icon-${v}`,
    variants: ["Default", "Dark Theme", "Blue", "Black", "White"],
  },
  {
    title: "Logo on Background",
    folder: "Logo on Background",
    file: (v) => `DekuSMS-${v}`,
    variants: ["Default", "Dark Theme", "Blue", "White"],
    framed: true,
  },
];

const SOCIAL_ASSETS = [
  { name: "Avatar 3", file: "Avatar 3.png", size: "360 × 360" },
  { name: "Avatar 4", file: "Avatar 4.png", size: "360 × 360" },
  { name: "Facebook Cover Photo", file: "Facebook _ Cover Photo.png", size: "820 × 312" },
  { name: "Facebook Image Post", file: "Facebook _ Image Post.png", size: "1200 × 630" },
  { name: "Facebook Event Photo", file: "Facebook _ Event Photo.png", size: "1920 × 1080" },
  { name: "LinkedIn Company Cover", file: "LinkedIn _ Company Cover Image.png", size: "1536 × 768" },
  { name: "LinkedIn Personal Background", file: "LinkedIn _ Personal Background Photo.png", size: "1584 × 396" },
];

export default function BrandResources() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const BG = isDark ? "#07141A" : "#EEF2F7";

  const [preview, setPreview] = useState(null);
  const [linkCopied, setLinkCopied] = useState(false);

  const openPreview = (item) => {
    setLinkCopied(false);
    setPreview(item);
  };

  const copyLink = () => {
    navigator.clipboard?.writeText(window.location.origin + preview.src);
    setLinkCopied(true);
  };

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "DekuSMS · Brand Resources";

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    return () => {
      document.title = prevTitle;
      robots.remove();
    };
  }, []);

  const cardSx = {
    borderRadius: "20px",
    border: isDark
      ? "1px solid rgba(255,255,255,0.08)"
      : `1px solid ${BORDER}`,
    background: isDark ? "rgba(255,255,255,0.03)" : CARD,
    boxShadow: isDark ? "none" : "0 4px 12px rgba(13,27,142,0.03)",
    overflow: "hidden",
  };

  const textPrimary = isDark ? "white" : NAVY;
  const textSecondary = isDark ? "rgba(255,255,255,0.72)" : TEXT_SECONDARY;
  const textMuted = isDark ? "rgba(255,255,255,0.55)" : TEXT_MUTED;

  const downloadLinkSx = {
    color: ACCENT,
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.8rem",
    display: "inline-flex",
    alignItems: "center",
    gap: 0.5,
    "&:hover": { textDecoration: "underline" },
  };

  const SectionTitle = ({ children, sub }) => (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          color: textPrimary,
          mb: sub ? 1 : 0,
        }}
      >
        {children}
      </Typography>
      {sub && (
        <Typography
          sx={{
            fontSize: "0.9rem",
            color: textMuted,
            maxWidth: 680,
          }}
        >
          {sub}
        </Typography>
      )}
    </Box>
  );

  const previewAreaSx = {
    position: "relative",
    width: "100%",
    border: 0,
    cursor: "zoom-in",
    font: "inherit",
    "& .preview-hint": {
      opacity: 0,
      transition: "opacity 0.2s ease",
    },
    "&:hover .preview-hint, &:focus-visible .preview-hint": {
      opacity: 1,
    },
    "&:focus-visible": {
      outline: `2px solid ${ACCENT}`,
      outlineOffset: -2,
    },
  };

  const previewHint = (
    <Box
      className="preview-hint"
      sx={{
        position: "absolute",
        top: 10,
        right: 10,
        width: 30,
        height: 30,
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(7,20,26,0.7)",
        color: "white",
        fontSize: 14,
      }}
    >
      <ExpandOutlined />
    </Box>
  );

  const grid = (min) => ({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${min}px), 1fr))`,
    gap: 2,
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: BG,
        color: textPrimary,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 5, md: 8 },
        }}
      >
        {/* Header */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          sx={{
            mb: { xs: 6, md: 8 },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Box>
            <Box
              component="a"
              href="/"
              sx={{ display: "inline-block", mb: 2 }}
            >
              <Box
                component="img"
                src={asset(
                  `Logo/SVG/Full Logo/DekuSMS-${isDark ? "Dark Theme" : "Default"}.svg`
                )}
                alt="DekuSMS"
                sx={{ width: { xs: 180, md: 220 }, display: "block" }}
              />
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2.6rem" },
                lineHeight: 1.15,
                color: textPrimary,
                mb: 1.5,
              }}
            >
              Brand Resources
            </Typography>
            <Typography
              sx={{
                color: textSecondary,
                maxWidth: 620,
                lineHeight: 1.8,
              }}
            >
              Logos and social media assets for DekuSMS.
            </Typography>
          </Box>
        </Stack>

        {/* Logos */}
        <Box component="section" sx={{ mb: { xs: 7, md: 10 } }}>
          <SectionTitle sub="Use the Default logo on white or light backgrounds and the Dark Theme or White logo on dark or coloured backgrounds. Keep a clear safe area around the logo equal to the width of the small message bubble.">
            Logo
          </SectionTitle>

          <Stack spacing={5}>
            {LOGO_GROUPS.map((group) => (
              <Box key={group.title}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: textSecondary,
                    mb: 2,
                  }}
                >
                  {group.title}
                </Typography>

                <Box sx={grid(group.framed ? 260 : 210)}>
                  {group.variants.map((variant) => {
                    const name = group.file(variant);
                    const svg = asset(`Logo/SVG/${group.folder}/${name}.svg`);
                    const png = asset(`Logo/PNG/${group.folder}/${name}.png`);

                    return (
                      <Box key={variant} sx={cardSx}>
                        <Box
                          component="button"
                          type="button"
                          aria-label={`Preview ${group.title} – ${variant}`}
                          onClick={() =>
                            openPreview({
                              title: `${group.title} – ${variant}`,
                              src: svg,
                              bg: group.framed ? null : VARIANT_BG[variant],
                              downloads: [
                                { label: "SVG", href: svg },
                                { label: "PNG", href: png },
                              ],
                            })
                          }
                          sx={{
                            ...previewAreaSx,
                            height: group.framed ? 180 : 140,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            p: group.framed ? 0 : 3,
                            bgcolor: group.framed
                              ? "transparent"
                              : VARIANT_BG[variant],
                            borderBottom: isDark
                              ? "1px solid rgba(255,255,255,0.08)"
                              : `1px solid ${BORDER}`,
                          }}
                        >
                          <Box
                            component="img"
                            src={svg}
                            alt={`${group.title} – ${variant}`}
                            loading="lazy"
                            sx={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: group.framed ? "cover" : "contain",
                              width: group.framed ? "100%" : "auto",
                              height: group.framed ? "100%" : "auto",
                              ...(group.title === "Logo Icon" && {
                                height: 64,
                              }),
                            }}
                          />
                          {previewHint}
                        </Box>
                        <Stack
                          direction="row"
                          sx={{
                            px: 2,
                            py: 1.5,
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.85rem",
                              color: textPrimary,
                            }}
                          >
                            {variant}
                          </Typography>
                          <Stack direction="row" spacing={1.5}>
                            <Box component="a" href={svg} download sx={downloadLinkSx}>
                              <DownloadOutlined /> SVG
                            </Box>
                            <Box component="a" href={png} download sx={downloadLinkSx}>
                              <DownloadOutlined /> PNG
                            </Box>
                          </Stack>
                        </Stack>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box component="section">
          <SectionTitle sub="Ready-made images for social profiles and posts.">
            Social Media
          </SectionTitle>
          <Box sx={grid(280)}>
            {SOCIAL_ASSETS.map((item) => {
              const src = asset(`Social Media/${item.file}`);
              return (
                <Box key={item.file} sx={cardSx}>
                  <Box
                    component="button"
                    type="button"
                    aria-label={`Preview ${item.name}`}
                    onClick={() =>
                      openPreview({
                        title: `${item.name} · ${item.size}`,
                        src,
                        bg: null,
                        downloads: [{ label: "PNG", href: src }],
                      })
                    }
                    sx={{
                      ...previewAreaSx,
                      height: 180,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 2,
                      bgcolor: isDark ? "rgba(255,255,255,0.02)" : "#F8FAFC",
                      borderBottom: isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : `1px solid ${BORDER}`,
                    }}
                  >
                    <Box
                      component="img"
                      src={src}
                      alt={item.name}
                      loading="lazy"
                      sx={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                    />
                    {previewHint}
                  </Box>
                  <Stack
                    direction="row"
                    sx={{
                      px: 2,
                      py: 1.5,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: textPrimary,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: textMuted,
                        }}
                      >
                        {item.size}
                      </Typography>
                    </Box>
                    <Box component="a" href={src} download sx={downloadLinkSx}>
                      <DownloadOutlined /> PNG
                    </Box>
                  </Stack>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Dialog
        open={Boolean(preview)}
        onClose={() => setPreview(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "20px",
            bgcolor: isDark ? "#0D1117" : CARD,
            backgroundImage: "none",
            border: isDark
              ? "1px solid rgba(255,255,255,0.08)"
              : `1px solid ${BORDER}`,
            m: { xs: 2, sm: 4 },
            width: { xs: "calc(100% - 32px)", sm: "calc(100% - 64px)" },
          },
        }}
      >
        {preview && (
          <>
            <Stack
              direction="row"
              sx={{
                px: { xs: 2, sm: 3 },
                py: 1.5,
                gap: 2,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  color: textPrimary,
                  minWidth: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {preview.title}
              </Typography>
              <IconButton
                onClick={() => setPreview(null)}
                aria-label="Close preview"
                sx={{ color: textPrimary }}
              >
                <CloseOutlined style={{ fontSize: 16 }} />
              </IconButton>
            </Stack>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: preview.bg ? { xs: 4, sm: 8 } : { xs: 2, sm: 3 },
                bgcolor:
                  preview.bg ||
                  (isDark ? "rgba(255,255,255,0.02)" : "#F1F5F9"),
                borderTop: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : `1px solid ${BORDER}`,
                borderBottom: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : `1px solid ${BORDER}`,
              }}
            >
              <Box
                component="img"
                src={preview.src}
                alt={preview.title}
                sx={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  width: "auto",
                  height: "auto",
                  minWidth: preview.bg ? "min(100%, 320px)" : 0,
                  objectFit: "contain",
                }}
              />
            </Box>

            <Stack
              direction="row"
              sx={{
                px: { xs: 2, sm: 3 },
                py: 2,
                gap: 1,
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={copyLink}
                startIcon={<LinkOutlined />}
                sx={{
                  textTransform: "none",
                  color: textPrimary,
                  borderRadius: "12px",
                }}
              >
                {linkCopied ? "Link copied" : "Copy link"}
              </Button>
              <Button
                href={preview.src}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<ExportOutlined />}
                sx={{
                  textTransform: "none",
                  color: textPrimary,
                  borderRadius: "12px",
                }}
              >
                Open in new tab
              </Button>
              {preview.downloads.map((d) => (
                <Button
                  key={d.label}
                  href={d.href}
                  download
                  variant="contained"
                  startIcon={<DownloadOutlined />}
                  sx={{
                    textTransform: "none",
                    bgcolor: ACCENT,
                    color: "#07141A",
                    fontWeight: 700,
                    borderRadius: "12px",
                    boxShadow: "none",
                    "&:hover": { bgcolor: ACCENT, boxShadow: "none" },
                  }}
                >
                  {d.label}
                </Button>
              ))}
            </Stack>
          </>
        )}
      </Dialog>
    </Box>
  );
}
