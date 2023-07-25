import { Box, Button, Card, Text, Center, Grid, Group, Pagination } from "@mantine/core"
import { useNavigate } from "react-router-dom";
import { PATH } from "~/constants/path";

export function Step03() {
    const navigate = useNavigate();

    const students = [
        { name: 'Amanda Freitas Dias', registerNumber: '109283746512' },
        { name: 'Antônio Ricardo', registerNumber: '109283746512' },
        { name: 'Amanda Freitas Dias', registerNumber: '109283746512' },
        { name: 'Beatriz Ferreira', registerNumber: '109283746512' },
        { name: 'Bianca Dias', registerNumber: '109283746512' },
        { name: 'Bruno Martins', registerNumber: '109283746512' },
        { name: 'Camila Santos', registerNumber: '109283746512' },
        { name: 'Carlos Eduardo', registerNumber: '109283746512' },
        { name: 'César Oliveira', registerNumber: '109283746512' },
        { name: 'Diego Carvalho', registerNumber: '109283746512' },
        { name: 'Fabiana Oliveira', registerNumber: '109283746512' },
        { name: 'Fábio dos Santos', registerNumber: '109283746512' },
        { name: 'Gustavo Dias', registerNumber: '109283746512' },
        { name: 'Helena Ramos', registerNumber: '109283746512' },
        { name: 'Igor Ferreira', registerNumber: '109283746512' },
        { name: 'Janaína Dias', registerNumber: '109283746512' },
    ]

    return (
        <>
            <Card py={20} px={40}>
                <Grid columns={4}>
                    {students?.map((student) => (
                        <Grid.Col span={1} style={{ height: '100%' }}>
                            <Box
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid #228BE6',
                                    padding: '10px 20px'
                                }}
                            >
                                <Text fz="lg" c="blue.6">{student.name}</Text>
                                <Text fz="md" c="dimmed">{student.registerNumber}</Text>
                            </Box>
                        </Grid.Col>
                    ))}
                </Grid>
                <Center mt="20px">
                    <Pagination total={10} />
                </Center>
            </Card>
            <Group position="right" mt="20px">
                <Button
                    style={{ width: '157px' }}
                    onClick={() => {
                        navigate(PATH.DASHBOARD)
                    }}>
                    Entrar
                </Button>
            </Group>
        </>
    )
}