const styleContainerPosts = {
  height: "40vh",
  overflow: "scroll",
  overflowX: "hidden",
  padding: "0px !important",
  "&::-webkit-scrollbar": {
    "-webkit-appearance": "none",
    widht: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#ccc",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: " #b3b3b3",
    boxShadow: "0 0 2px 1px rgba(0, 0, 0, 0.2)",
  },
  "&::-webkit-scrollbar-thumb:active": {
    backgroundColor: "#999999",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#e1e1e1",
    borderRadius: "2px",
  },
  "&::-webkit-scrollbar-track:hover": {
    background: "#d4d4d4",
  },
  "&:-webkit-scrollbar-track:active": {
    background: "#d4d4d4",
  },
};

export {styleContainerPosts};