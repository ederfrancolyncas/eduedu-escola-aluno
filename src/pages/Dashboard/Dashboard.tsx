import { BackgroundImage, Container } from "@mantine/core";
import bg from "~/assets/bgs/bg-dashboard.jpg";
import { Planets } from "./Planets";
import { Badges } from "./Badges";

export function DashboardPage() {
    return (
        <BackgroundImage src={bg} h="100vh">
            <Container size="xl" mt={50}>
                <Planets />
                <Badges />
            </Container>
        </BackgroundImage >
    )
}