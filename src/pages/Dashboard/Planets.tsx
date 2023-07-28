import { useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Box, Title, Button, Image } from "@mantine/core";
import example from "~/assets/planets/e1.png";
import star from "~/assets/planets/star.png";
import arrowLeft from "~/assets/planets/arrowLeft.png";
import arrowRight from "~/assets/planets/arrowRight.png";

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
                            <Box style={{ position: 'relative', height: '265px', width: '200px' }}>
                                <Image
                                    src={planet.image}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 10,
                                        bottom: 0,
                                        margin: 'auto',
                                        zIndex: '1'
                                    }}
                                    width={110} />
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
                                    <Title c="white" order={6}>{planet.name}</Title>
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