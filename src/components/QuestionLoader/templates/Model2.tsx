import { Button, Image, SimpleGrid, Stack, createStyles } from "@mantine/core";
import { ModelProps } from ".";

const useStyles = createStyles((theme) => ({
  emptyCard: {
    width: 170,
    height: 200,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#868E96",
    backgroundColor: "#F1F3F5",
  },

  contentCard: {
    width: 170,
    height: 200,
    borderRadius: 16,
    backgroundColor: "#fff",
    boxShadow: "0 1px 0 0 #006AC6",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#228BE6",
    padding: 16,
  },

  contentCardImage: {
    width: "100%",
    height: "100%",
  },
}));

export function Model2({ question }: ModelProps) {
  const { classes } = useStyles();

  return (
    <Stack>
      <SimpleGrid cols={3} spacing={24}>
        {question.options.map((o) => (
          <div className={classes.emptyCard} key={o.order} />
        ))}
      </SimpleGrid>

      <SimpleGrid cols={3} spacing={24}>
        {question.options.map((o) => (
          <div className={classes.contentCard} key={o.order} draggable>
            <Image
              src={o.imageUrl}
              alt={o.description}
              className={classes.contentCardImage}
            />
          </div>
        ))}
      </SimpleGrid>

      <Button>Heya Model 2</Button>
    </Stack>
  );
}
