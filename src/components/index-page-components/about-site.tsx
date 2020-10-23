/** @jsx jsx */
import { jsx, Heading, Styled } from "theme-ui"

const AboutSite = () => {
  return (
    <div
      sx={{
        width: [10, 10, 8, 6],
        py: [4],
      }}
    >
      <Styled.h1
        sx={{
          color: "heading",
          fontSize: ["2rem", "2rem", "3rem", "3rem"],
        }}
      >
        Welcome to My Blog, the simplest way to stay upto date with latest tech
        trend
      </Styled.h1>
    </div>
  )
}

export default AboutSite
