export default function FloaterNav({ setActiveSection }) {
  const [hovered, setHovered] = useState(null);

  const links = [
    { id: "landing", label: "Home", icon: <HomeIcon /> },
    { id: "features", label: "Features", icon: <StarIcon /> },
    { id: "downloads", label: "Download", icon: <DownloadIcon /> },
    { id: "faq", label: "FAQ", icon: <HelpCenterIcon /> },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginLeft: 3, 
        justifyContent: "center",
      }}
    >
      {links.map((link) => (
        <Paper
          key={link.id}
          elevation={4}
          onMouseEnter={() => setHovered(link.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setActiveSection(link.id)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            padding: "10px 14px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: hovered === link.id ? 140 : 50,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {link.icon}
          {hovered === link.id && (
            <Typography variant="body2">{link.label}</Typography>
          )}
        </Paper>
      ))}
    </Box>
  );
}
