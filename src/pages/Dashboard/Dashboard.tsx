import { BackgroundImage, Center, Image, Text } from "@mantine/core";
import bg from "~/assets/bgs/bg-dashboard.svg";
import bicho from "~/assets/bicho.png";
export function DashboardPage() {
    return (
        <BackgroundImage src={bg} h="100vh">
            <Center mt="500px">
                <Image src={bicho} maw={100} />
                <Text c="white">&nbsp;Em construção ♡</Text>
            </Center>
        </BackgroundImage>
    )
}