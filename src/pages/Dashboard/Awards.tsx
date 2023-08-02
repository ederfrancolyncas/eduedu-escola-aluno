import { Title, BackgroundImage, Grid, Tooltip, Box } from "@mantine/core";
import { AWARDS_IMAGES } from '../../constants/awards'

type componentProps = {
    awards: Array[]
}
export function Awards({ awards }: componentProps) {

    AWARDS_IMAGES.map((item) => {
        awards.map((subitem) => {
            item.name == subitem.name ? (item.active = true) : {}
        })
    })
    return (
        <>
            <Title mb={40} color="white">Minhas Conquistas</Title>

            <Grid columns={9}>
                {AWARDS_IMAGES.map((item) => (
                    <Grid.Col md={2} lg={1}>
                        <Tooltip
                            label={'award.tooltipTitle' + "\n" + 'award.tooltipText'}
                            transitionProps={{ transition: 'scale', duration: 300 }}
                            style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
                            color="dark.3"
                            position="bottom"
                            withArrow
                            multiline
                            width={200}
                        >
                            <Box>
                                <BackgroundImage
                                    src={item.image}
                                    w={88}
                                    h={114}
                                    style={{
                                        filter: item.active ? '' : 'grayScale(100%)'
                                    }}
                                />
                            </Box>
                        </Tooltip>
                    </Grid.Col>
                ))}
            </Grid>
        </>
    )
}