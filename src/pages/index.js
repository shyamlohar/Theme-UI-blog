/** @jsx jsx */
import { jsx, Heading, BaseStyles, Flex } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutSite from "../components/index-page-components/about-site"
import { Text } from "theme-ui"
import PostCard from "../components/post-card"
import Tag from "../components/tag"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutSite />
    <Flex>
      <Text
        sx={{
          fontSize: [2],
          color: "primary",
          fontWeight: "semibold",
          letterSpacing: "1.1px",
          mt: 3,
          width: [10, 10, 10, 7],
        }}
      >
        RECENTLY PUBLISHED
      </Text>
      <Text
        sx={{
          fontSize: [2],
          color: "primary",
          fontWeight: "semibold",
          letterSpacing: "1.1px",
          mt: 3,
          pl: 4,
          display: ["none", "none", "none", "block"],
        }}
      >
        TOP CATEGORIES
      </Text>
    </Flex>
    <Flex sx={{ pt: 2 }}>
      <div sx={{ width: [10, 10, 7, 7] }}>
        <PostCard />
        <PostCard />
      </div>
      <div
        sx={{
          flex: "1 1 auto",
          pl: 4,
          display: ["none", "none", "none", "flex"],
          justifyContent: "flex-start",
          alignItems: "start",
        }}
      >
        <Tag />
      </div>
    </Flex>
  </Layout>
)

export default IndexPage
