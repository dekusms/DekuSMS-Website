import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CloudUploadOutlined,
  ApiOutlined,
  LockOutlined,
  SendOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const ACCENT = "#2ED3B7";
const BG = "#07141A";

export default function Landing() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <CloudUploadOutlined />,
      text: t(
        "landing.pills.cloud",
        "Forward incoming messages to the cloud"
      ),
    },
    {
      icon: <ApiOutlined />,
      text: t(
        "landing.pills.encrypted",
        "Connect to messaging brokers like RMQ to turn your device into an SMS sending machine"
      ),
    },
    {
      icon: <LockOutlined />,
      text: t(
        "landing.pills.broker",
        "Provide end-to-end encrypted SMS messaging between DekuSMS users"
      ),
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: BG,
        color: "white",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
 
 <Typography
  sx={{
    position: "absolute",
    bottom: {
      xs: 0,
      md: -70,
    },
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "2000px",
    textAlign: "center",
    fontSize: {
      xs: "7rem",
      sm: "13rem",
      md: "15rem",
      lg: "20rem",
    },
    fontWeight: 500,
    lineHeight: 1,
    opacity: 0.04,
    fontFamily: "'Unbounded', sans-serif",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  }}
>
  {t("landing.backgroundTitle")}
</Typography>


      <Box
        sx={{
          width: "100%",
          maxWidth: "1900px",
          mx: "auto",
          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
            lg: 8,
          },
          py: {
            xs: 8,
            md: 6,
          },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.1fr 0.9fr",
          },
          alignItems: "center",
          gap: {
            xs: 6,
            md: 4,
            lg: 6,
          },
          position: "relative",
          zIndex: 2,
        }}
      >
     
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 700,
              lineHeight: 1.1,
              fontSize: {
                xs: "2rem",
                sm: "2.7rem",
                md: "3.2rem",
                lg: "4rem",
              },
              mb: 3,
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            {t("landing.title")}
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: {
                xs: "0.95rem",
                md: "1rem",
              },
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.72)",
              mb: 4,
              maxWidth: 720,
              mx: {
                xs: "auto",
                md: 0,
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            {t("landing.description1")}
          </Typography>

          <Stack
            spacing={2}
            sx={{
              mb: 4,
            }}
          >
            {features.map((feature, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  p: 2,
                  borderRadius: "20px",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  background:
                    "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  transition: "0.25s ease",
                  "&:hover": {
                    border:
                      "1px solid rgba(46,211,183,0.2)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "12px",
                    bgcolor:
                      "rgba(46,211,183,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: ACCENT,
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography
                  sx={{
                    fontFamily:
                      "'Ubuntu', sans-serif",
                    fontSize: {
                      xs: "0.9rem",
                      md: "0.95rem",
                    },
                    lineHeight: 1.7,
                    color:
                      "rgba(255,255,255,0.82)",
                  }}
                >
                  {feature.text}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Typography
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: {
                xs: "0.9rem",
                md: "0.95rem",
              },
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.55)",
              mb: 2,
              maxWidth: 680,
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            {t("landing.description2")}
          </Typography>

          <Typography
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
              gap: 1,
              alignItems: "center",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'Ubuntu', sans-serif",
              mb: 2,
              lineHeight: 1.8,
            }}
          >
            {t("landing.moreInfo")}

            <Box
              component="a"
              href="https://smswithoutborders.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: ACCENT,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {t("landing.website")}
            </Box>

            &amp;

            <Box
              component="a"
              href="https://github.com/smswithoutborders"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: ACCENT,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                fontWeight: 500,
              }}
            >
              <GithubOutlined />
              {t("landing.github")}
            </Box>
          </Typography>

          <Typography
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
              gap: 1,
              alignItems: "center",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'Ubuntu', sans-serif",
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            <SendOutlined
              style={{
                color: ACCENT,
              }}
            />

            {t("landing.join")}

            <Box
              component="a"
              href="https://t.me/deku_sms"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: ACCENT,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Telegram
            </Box>

            &amp;

            <Box
              component="a"
              href="https://reddit.com/r/dekusms"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: ACCENT,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Reddit
            </Box>

            {t("landing.forUpdates")}
          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            sx={{
              width: {
                xs: "100%",
                sm: "auto",
              },
            }}
          >
            <Button
              href="https://play.google.com/store/apps/details?id=com.afkanerd.deku&pli=1"
              target="_blank"
              variant="contained"
              sx={{
                bgcolor: ACCENT,
                color: BG,
                px: 4,
                py: 1.4,
                borderRadius: "16px",
                textTransform: "none",
                fontSize: "0.95rem",
                fontWeight: 700,
                fontFamily:
                  "'Ubuntu', sans-serif",
                width: {
                  xs: "100%",
                  sm: "auto",
                },
                "&:hover": {
                  bgcolor: "#22bda2",
                },
              }}
            >
              {t("topNav.download")}
            </Button>

            <Button
              href="https://opencollective.com/dekusms"
              target="_blank"
              variant="outlined"
              sx={{
                border:
                  "1px solid rgba(255,255,255,0.12)",
                color: "white",
                px: 4,
                py: 1.4,
                borderRadius: "16px",
                textTransform: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                fontFamily:
                  "'Ubuntu', sans-serif",
                width: {
                  xs: "100%",
                  sm: "auto",
                },
                "&:hover": {
                  border:
                    "1px solid rgba(46,211,183,0.3)",
                  bgcolor:
                    "rgba(255,255,255,0.03)",
                },
              }}
            >
              {t("topNav.donate")}
            </Button>
          </Stack>
        </Box>

     <Box
  flex={{ md: 1 }}
  sx={{
    width: "100%",
    position: "relative",
    display: {
      xs: "none", 
      md: "flex", 
    },
    justifyContent: "center",
    alignItems: "center",
    minHeight: {
      md: 600,
    },
  }}
>
  <Box
    sx={{
      width: { md: 240, lg: 390 },
      height: { md: 460, lg: 620 },
      borderRadius: "26px",
      transform: "rotate(10deg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 2,
      position: "relative",
      overflow: "visible",
    }}
  >
    <Box
      component="img"
      src="/Home.png"
      alt={t("landing.imageAlt", "DekuSMS app")}
      sx={{
        width: "80%",
        display: "block",
        position: "relative",
        zIndex: 2,
        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
      }}
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
  </Box>
</Box>
      
      </Box>
    </Box>
  );
}