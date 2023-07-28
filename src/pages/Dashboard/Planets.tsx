import { useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Box, Title, Button, Image } from "@mantine/core";
import planetE1 from "~/assets/planets/planet-e1.png";
import planetE3 from "~/assets/planets/planet-e3.png";
import planetF1 from "~/assets/planets/planet-f1.png";
import planetF6 from "~/assets/planets/planet-f6.png";
import planetG1 from "~/assets/planets/planet-g1.png";
import planetH1 from "~/assets/planets/planet-h1.png";
import star from "~/assets/planets/star.png";
import arrowLeft from "~/assets/planets/arrowLeft.png";
import arrowRight from "~/assets/planets/arrowRight.png";

export function Planets() {
    const planets = [
        {
            image: planetE1,
            name: 'João-de-barro',
            stars: 2,
            link: ''
        },
        {
            image: planetF1,
            name: 'Pica-Pau',
            stars: 4,
            link: ''
        },
        {
            image: planetG1,
            name: 'Sopa de Pedra',
            stars: 1,
            link: ''
        },
        {
            image: planetH1,
            name: 'Plim-Plim',
            stars: 5,
            link: ''
        },
        {
            image: planetE3,
            name: 'Toc-Toc',
            stars: 0,
            link: ''
        },
        {
            image: planetF6,
            name: 'Shuá',
            stars: 0,
            link: ''
        }
    ]

    const [embla, setEmbla] = useState<Embla>();
    return (
        <Box mb={50}>
            <Title mb={40} c="white">Meus planetas</Title>

            <Box style={{ position: 'relative' }}>
                <Button
                    style={{
                        background: 'transparent',
                        position: 'absolute',
                        top: 130,
                        left: -100
                    }}
                    onClick={() => embla?.scrollPrev()}>
                    <Image src={arrowLeft} />
                </Button>
                <Button
                    style={{
                        background: 'transparent',
                        position: 'absolute',
                        top: 130,
                        right: -50
                    }}
                    onClick={() => embla?.scrollNext()}>
                    <Image src={arrowRight} />
                </Button>
            </Box>

            <Carousel
                loop
                align="start"
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                getEmblaApi={setEmbla}
                withControls={false}
            >
                {planets &&
                    planets.map((planet) => (
                        <Carousel.Slide gap="sm" size="10%">
                            <Box style={{ position: 'relative', height: '270px', width: '200px' }}>
                                <img
                                    src={planet.image}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 15,
                                        bottom: 0,
                                        margin: '0 auto',
                                        zIndex: '1',
                                        height: 100,
                                        width: 'auto'
                                    }}
                                />
                                <Box
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        textAlign: 'center',
                                        padding: '20px',
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '16px',
                                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                        backdropFilter: 'blur(5px)',
                                    }}
                                >
                                    <Title mt={50} c="white" order={6}>{planet.name}</Title>
                                    <Image src={star} width={20} my={25} />
                                    <Button fullWidth variant="outline">Tentar de novo</Button>
                                </Box>
                            </Box>
                        </Carousel.Slide>
                    ))
                }
            </Carousel>
        </Box>
    )
}