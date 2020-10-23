/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

const Tag = ({ name, url }) => {
  return (
    <div
      sx={{
        py: "4px",
        px: 2,
        fontSize: 1,
        borderRadius: "8px",
        bg: "tagBg",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.1)",
          color: "heading",
        },
      }}
    >
      Tag
    </div>
  )
}

export default Tag
