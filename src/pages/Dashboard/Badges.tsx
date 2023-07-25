import { Title, Image, BackgroundImage, Grid } from "@mantine/core";

// Images:
import badgeScreenActive from "~/assets/badges/badge-screen-active.png";
import badgeScreenInactive from "~/assets/badges/badge-screen-inactive.png";
import bombastico from "~/assets/badges/bombastico.png";
import brilhante from "~/assets/badges/brilhante.png";
import competente from "~/assets/badges/competente.png";
import confiante from "~/assets/badges/confiante.png";
import corajoso from "~/assets/badges/corajoso.png";
import escritor from "~/assets/badges/escritor.png";
import excelente from "~/assets/badges/excelente.png";
import fantastico from "~/assets/badges/fantastico.png";
import gigante from "~/assets/badges/gigante.png";

export function Badges() {
    const badges = [
        {
            image: bombastico,
            active: true,
            tooltipTitle: 'Execelente',
            tooltipText: 'Completou 20 planetas'
        },
        {
            image: brilhante,
            active: true,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: competente,
            active: true,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: confiante,
            active: true,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: corajoso,
            active: true,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: escritor,
            active: true,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: excelente,
            active: true,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: fantastico,
            active: true,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: gigante,
            active: true,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        }
    ]
    return (
        <>
            <Title mb={40} color="white">Minhas Conquistas</Title>

            <Grid>
                {badges &&
                    badges.map((badge) => (
                        <Grid.Col span="auto">
                            <BackgroundImage src={badge ? badgeScreenActive : badgeScreenInactive} w={88} h={114}>
                                <Image src={badge.image} width={88} />
                            </BackgroundImage>
                        </Grid.Col>
                    ))
                }
            </Grid>
        </>
    )
}