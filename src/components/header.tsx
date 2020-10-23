/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { useColorMode } from "theme-ui"
import { Heading } from "theme-ui"
import darkmodeIcon from "../images/darkmode.svg"
import lightmodeIcon from "../images/lightmode.svg"

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div>
      <header
        sx={{
          py: 3,
          color: "primary",
          backgroundColor: "background",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: "auto",
          maxWidth: 960,
          px: `1.0875rem`,
        }}
      >
        <Heading as="h3">Shyam Lohar</Heading>
        <Flex sx={{ alignItems: "center" }}>
          <button
            sx={{
              display: "flex",
              cursor: "pointer",
              background: 'transparent',
              width:'auto',
              p:0,
              border: 'none'
            }}
            onClick={e =>
              setColorMode(colorMode === "default" ? "dark" : "default")
            }
          >
            <img
              sx={{
                width: colorMode === "default" ? "1.2em" : "1em",
                mb: 0,
              }}
              src={colorMode === "default" ? lightmodeIcon : darkmodeIcon}
              alt=""
            />
          </button>
        </Flex>
      </header>
    </div>
  )
}

export default Header
