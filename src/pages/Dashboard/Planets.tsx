import { Carousel } from '@mantine/carousel';
import { Box, Title, Button, Image } from "@mantine/core";
import { Icon123 } from '@tabler/icons-react';
import example from "~/assets/dashboard/e1.png";
import star from "~/assets/dashboard/star.png";

export function Planets() {
    const planets = [
        {
            image: example,
            name: 'João-de-barro',
            stars: 2,
            link: ''
        },
        {
            image: example,
            name: 'Pica-Pau',
            stars: 2,
            link: ''
        },
        {
            image: example,
            name: 'Sopa de Pedra',
            stars: 2,
            link: ''
        },
        {
            image: example,
            name: 'Plim-Plim',
            stars: 2,
            link: ''
        },
        {
            image: example,
            name: 'Toc-Toc',
            stars: 2,
            link: ''
        },
        {
            image: example,
            name: 'Shuá',
            stars: 2,
            link: ''
        }
    ]
    return (
        <>
            <Title mb={40} c="white">Meus planetas</Title>
            <Carousel
                height={600}
                slideSize="10%"
                slideGap="lg"
                loop
                align="start"
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                nextControlIcon={<Icon123 size={16} />}
                previousControlIcon={<Icon123 size={16} />}
            >
                {planets &&
                    planets.map((planet) => (
                        <Carousel.Slide>
                            <Image
                                src={planet.image}
                                style={{
                                    bottom: '10px',
                                    margin: 'auto'
                                }}
                                width={110} />
                            <Box
                                style={{
                                    textAlign: 'center',
                                    padding: '20px',
                                    background: 'rgba(255, 255, 255, 0.18)',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(5px)',
                                }}
                            >
                                <Title c="white" order={6}>{planet.name}</Title>
                                <Image src={star} width={20} my={25} />
                                <Button fullWidth variant="outline">Tentar de novo</Button>
                            </Box>
                        </Carousel.Slide>
                    ))
                }
            </Carousel>
        </>
    )
}