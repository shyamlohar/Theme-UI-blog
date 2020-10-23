/** @jsx jsx */
import { jsx, Heading, Flex, Text } from "theme-ui"

const PostCard = () => {
  return (
    <div
      sx={{
        py: 2,
        cursor: "pointer",
        "&:hover > h2": {
          color: "tertiary",
        },
      }}
    >
      <h2
        sx={{
          color: "heading",
        }}
      >
        Lessons Learned Speaking at Conferences
      </h2>
      <p>
        Speaking at conferences is equal parts exciting and terrifying. This
        article is a behind-the-scenes look at what the experience is like, and
        shares tips for getting started as a conference speaker.
      </p>
      <Flex sx={{ fontSize: 1 }}>
        <Text>May 1 2020</Text> <Text sx={{ px: 1 }}>•</Text>{" "}
        <Text>1 min read</Text>
      </Flex>
      {/* <div
        sx={{ fontWeight: "semibold", color: "tertiary", cursor: "pointer" }}
      >
        Read more
      </div> */}
    </div>
  )
}

export default PostCard
