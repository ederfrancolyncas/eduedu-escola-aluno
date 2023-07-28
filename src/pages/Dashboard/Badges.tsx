import { Title, BackgroundImage, Grid, Tooltip } from "@mantine/core";

// Images:
import bombastico from "~/assets/badges/bombastico.png";
import brilhante from "~/assets/badges/brilhante.png";
import competente from "~/assets/badges/competente.png";
import confiante from "~/assets/badges/confiante.png";
import corajoso from "~/assets/badges/corajoso.png";
import escritor from "~/assets/badges/escritor.png";
import excelente from "~/assets/badges/excelente.png";
import fantastico from "~/assets/badges/fantastico.png";
import gigante from "~/assets/badges/gigante.png";
import activeLeitor from "~/assets/badges/active-leitor.png";
import activeLutador from "~/assets/badges/active-lutador.png";
import activeMaestro from "~/assets/badges/active-maestro.png";
import activeMotivador from "~/assets/badges/active-motivador.png";
import activePerfeito from "~/assets/badges/active-perfeito.png";
import activeSensacional from "~/assets/badges/active-sensacional.png";
import activeSensivel from "~/assets/badges/active-sensivel.png";
import activeSuper from "~/assets/badges/active-super.png";
import activeIncrivel from "~/assets/badges/active-incrivel.png";

export function Badges() {
    const badges = [
        {
            image: bombastico,
            tooltipTitle: 'Execelente',
            tooltipText: 'Completou 20 planetas'
        },
        {
            image: brilhante,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: competente,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: confiante,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: corajoso,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: escritor,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: excelente,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: fantastico,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: gigante,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: activeLeitor,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: activeLutador,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: activeMaestro,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: activeMotivador,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: activePerfeito,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: activeSensacional,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: activeSensivel,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: activeSuper,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        },
        {
            image: activeIncrivel,
            tooltipTitle: 'Execelente',
            tooltipText: 'Lorem ipsum'
        }
    ]
    return (
        <>
            <Title mb={40} color="white">Minhas Conquistas</Title>

            <Grid columns={9}>
                {badges &&
                    badges.map((badge) => (
                        <Grid.Col md={2} lg={1}>
                            <Tooltip
                                label={badge.tooltipTitle + "\n" + badge.tooltipText}
                                transitionProps={{ transition: 'scale', duration: 300 }}
                                style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
                                color="dark.3"
                                position="bottom"
                                withArrow
                                multiline
                                width={200}
                            >
                                <BackgroundImage src={badge.image} w={88} h={114} />
                            </Tooltip>
                        </Grid.Col>
                    ))
                }
            </Grid>
        </>
    )
}