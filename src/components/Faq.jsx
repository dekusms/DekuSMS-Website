import React, { useState } from "react";
import {
  Box, Typography, Stack, Card,
  CardContent, CardActionArea, Collapse
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTranslation } from "react-i18next";

const ACCENT = "#2ED3B7";
const BG = "#0F2027";

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        "&:first-of-type": { borderTop: "1px solid rgba(255,255,255,0.07)" },
      }}
    >
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: { xs: 2, md: 2.5 },
          cursor: "pointer",
          gap: 2,
          "&:hover .faq-q": { color: ACCENT },
          transition: "all 0.15s",
        }}
      >
        <Typography
          className="faq-q"
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 500,
            fontSize: { xs: "0.9rem", md: "1rem" },
            color: open ? ACCENT : "rgba(255,255,255,0.9)",
            transition: "color 0.15s",
            flex: 1,
          }}
        >
          {question}
        </Typography>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: `1px solid ${open ? ACCENT : "rgba(255,255,255,0.15)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: open ? ACCENT : "rgba(255,255,255,0.5)",
            flexShrink: 0,
            transition: "all 0.2s",
          }}
        >
          {open
            ? <RemoveIcon sx={{ fontSize: 14 }} />
            : <AddIcon sx={{ fontSize: 14 }} />
          }
        </Box>
      </Box>
      <Collapse in={open}>
        <Typography
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            opacity: 0.7,
            lineHeight: 1.75,
            fontSize: { xs: "0.875rem", md: "0.95rem" },
            pb: 2.5,
            maxWidth: 600,
          }}
        >
          {answer}
        </Typography>
      </Collapse>
    </Box>
  );
}

function LinkCard({ title, subtitle, link }) {
  return (
    <Card
      sx={{
        color: "white",
        bgcolor: "rgba(0,0,0,0.4)",
        border: "1px solid rgba(0,214,180,0.2)",
        borderRadius: "14px",
        transition: "all 0.28s cubic-bezier(.16,1,.3,1)",
        "&:hover": {
          transform: "translateY(-3px)",
          border: "1px solid rgba(0,214,180,0.5)",
          boxShadow: "0 16px 36px rgba(0,214,180,0.12)",
        },
      }}
    >
      <CardActionArea
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ px: { xs: 2, md: 2.5 }, py: { xs: 1.5, md: 2 } }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 0,
          }}
        >
          <Box sx={{ flex: 1, mr: 1 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: { xs: "0.9rem", md: "1rem" },
                mb: 0.5,
                color: "white",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                opacity: 0.5,
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: { xs: "0.78rem", md: "0.85rem" },
              }}
            >
              {subtitle}
            </Typography>
          </Box>
          <ArrowOutwardIcon
            sx={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 18,
              flexShrink: 0,
              transition: "all 0.2s",
              ".MuiCardActionArea-root:hover &": {
                color: ACCENT,
                transform: "translate(2px,-2px)",
              },
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function HelpGuideSection() {
  const { t } = useTranslation();

  const faqList = [
    {
      q: t("help.faq.install.question", "How do I install DekuSMS?"),
      a: t("help.faq.install.answer", "Download from Google Play Store or F-Droid. Open the app, grant SMS permissions, and follow the setup guide. You'll be ready in under 5 minutes."),
    },
    {
      q: t("help.faq.secure.question", "Is DekuSMS secure?"),
      a: t("help.faq.secure.answer", "Yes. All messages are end-to-end encrypted before leaving your device. Not even the relay gateway can read your messages. Your privacy is guaranteed by design."),
    },
    {
      q: t("help.faq.multidevice.question", "Can I use it on multiple devices?"),
      a: t("help.faq.multidevice.answer", "DekuSMS works on any Android device. You can configure multiple gateway devices to increase reliability and coverage for your messages."),
    },
    {
      q: t("help.faq.offline.question", "Does it work completely offline?"),
      a: t("help.faq.offline.answer", "Yes — that's the core feature. DekuSMS uses SMS to relay messages through a trusted gateway that has internet access, so you don't need to."),
    },
  ];

  const cards = [
    {
      title: t("help.cards.troubleshooting.title", "Troubleshooting guide"),
      subtitle: t("help.cards.troubleshooting.subtitle", "Find solutions to common problems"),
      link: "https://docs.smswithoutborders.com/docs/Troubleshooting/Troubleshooting-FAQ",
    },
    {
      title: t("help.cards.contribution.title", "Contribute on GitHub"),
      subtitle: t("help.cards.contribution.subtitle", "Help improve DekuSMS for everyone"),
      link: "https://github.com/dekusms/DekuSMS-Android/edit/master/README.md",
    },
    {
      title: t("help.cards.contact.title", "Contact the team"),
      subtitle: "developers@smswithoutborders.com",
      link: "mailto:developers@smswithoutborders.com",
    },
  ];

  return (
    <Box
      sx={{
        color: "white",
        minHeight: "100vh",
        py: { xs: 10, md: 12 },
        px: { xs: 2.5, sm: 4, md: 8, lg: 12 },
        bgcolor: BG,
        position: "relative",
        overflowX: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          bottom: { xs: 8, md: 20 },
          left: { xs: 16, md: 64 },
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 700,
          fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" },
          opacity: 0.04,
          letterSpacing: 2,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {t("help.heading", "Help")}
      </Typography>

      <Box sx={{ width: "100%", position: "relative", zIndex: 2 }}>
        <Box sx={{ mb: { xs: 5, md: 6 } }}>
          <Typography
            sx={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "0.7rem",
              color: ACCENT,
              letterSpacing: 3,
              textTransform: "uppercase",
              mb: 2,
              opacity: 0.8,
            }}
          >
            Support
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 400,
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.4rem" },
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Got questions? We have answers.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 8 }}
          alignItems="flex-start"
        >
          <Box flex={1.3} sx={{ width: "100%" }}>
            {faqList.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </Box>

          <Box
            flex={1}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1.5, md: 2 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Unbounded', sans-serif",
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Resources
            </Typography>
            {cards.map((item, i) => (
              <LinkCard key={i} {...item} />
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}