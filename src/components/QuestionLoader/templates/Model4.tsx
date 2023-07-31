import { Button, Stack } from "@mantine/core";
import { Question } from "~/api/exam";

export function Model4({ question }: { question: Question }) {
  return (
    <Stack>
      <Button>Heya Model 4</Button>
    </Stack>
  );
}
