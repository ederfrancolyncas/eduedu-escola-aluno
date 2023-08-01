import { BackgroundImage, Container } from "@mantine/core";
import bg from "~/assets/bgs/bg-dashboard.jpg";
import { Planets } from "./Planets";
import { Badges } from "./Badges";
import { errorNotification } from "~/utils/errorNotification";
import { useState } from "react";
import { useGetStudentPlanetTrackQuery } from "~/api/student";

export function DashboardPage() {

    const [planetTrack, setPlanetTrack] = useState([])

    const { data: getPlanetTrack } = useGetStudentPlanetTrackQuery({
        onError: (error) => {
            errorNotification(
                "Erro durante a operação",
                `${error.message} (cod: ${error.code})`
            );
        },
        onSuccess: (data) => {
            setPlanetTrack(data.planetTrack)
        },
    })


    return (
        <BackgroundImage src={bg} h="100vh">
            <Container size="xl" mt={50}>
                <Planets planets={planetTrack} />
                <Badges />
            </Container>
        </BackgroundImage >
    )
}