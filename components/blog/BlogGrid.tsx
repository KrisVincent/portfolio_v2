import { Grid } from "@chakra-ui/react";

type Props = { children: JSX.Element };

const BlogGrid = ({ children }: Props) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={10}
    >
      {children}
    </Grid>
  );
};

export default BlogGrid;
