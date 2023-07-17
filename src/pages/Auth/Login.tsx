import { BackgroundImage, Image, Box, Group, Center, Stack, TextInput, Button, Select, Card, Grid, Text, Pagination, Flex } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "~/assets/bgs/bg-aluno.svg";
import logo from "~/assets/logos/eduedu-branca.svg";
import { PATH } from "../../constants/path";

export function LoginPage() {

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
        { name: 'Jonas Oliveira', registerNumber: '109283746512' },
        { name: 'Luis Henrique', registerNumber: '109283746512' },
        { name: 'Marcelo Martins', registerNumber: '109283746512' },
        { name: 'Pedro Oliveira', registerNumber: '109283746512' },
        { name: 'Rodolfo Ricardo', registerNumber: '109283746512' },
        { name: 'Rodolfo Dias', registerNumber: '109283746512' },
        { name: 'Tatiana Martins', registerNumber: '109283746512' },
        { name: 'Thaís Oliveira', registerNumber: '109283746512' },
        { name: 'Ulisses Ramos', registerNumber: '109283746512' },
        { name: 'Vanessa Freitas', registerNumber: '109283746512' },
        { name: 'Vitor Henrique', registerNumber: '109283746512' },
        { name: 'Victor Dias', registerNumber: '109283746512' },
    ]

    const [step, setStep] = useState(1)
    function nextStep(step) { setStep(step) }
    return (
        <BackgroundImage src={bg} h="100vh" w="100vw">
            <Center maw={1000} h="100%" mx="auto">
                <Box sx={{ minWidth: "100%" }}>
                    <Flex>
                        {step == 3 &&
                            <Select
                                mt="auto"
                                mb="50px"
                                label="Turma"
                                placeholder="Selecione"
                                data={[]}
                                styles={{
                                    label: { color: "#fff", marginBottom: 6 },
                                }}
                            />
                        }
                        <Image
                            maw={180}
                            mb={50}
                            mx="auto"
                            radius="md"
                            src={logo}
                            alt="Logo EduEdu Escola"
                        />
                        {step == 3 &&
                            <TextInput
                                mt="auto"
                                mb="50px"
                                label="Código de acesso"
                                placeholder="Digite o código de acesso"
                                styles={{
                                    label: { color: "#fff", marginBottom: 6 },
                                }}
                            />
                        }
                    </Flex>
                    {step == 1 &&
                        <Stack w={400} m="auto">
                            <TextInput
                                label="Código de acesso"
                                placeholder="Digite o código de acesso"
                                styles={{
                                    label: { color: "#fff", marginBottom: 6 },
                                }}
                            />
                            <Button onClick={() => { nextStep(2) }}>Entrar</Button>
                        </Stack>
                    }
                    {step == 2 &&
                        <Stack w={400} m="auto">
                            <Select
                                label="Turma"
                                placeholder="Selecione"
                                data={[]}
                                styles={{
                                    label: { color: "#fff", marginBottom: 6 },
                                }}
                            />
                            <Button onClick={() => { nextStep(3) }}>Entrar</Button>
                        </Stack>
                    }
                    {step == 3 &&
                        <>
                            <Card>
                                <Grid columns={4}>
                                    {students?.map((student) => (
                                        <Grid.Col span={1} style={{ height: '100%' }}>
                                            <Box
                                                style={{
                                                    borderRadius: '12px',
                                                    border: '1px solid #228BE6',
                                                    padding: '10px'
                                                }}
                                            >
                                                <Text fz="xl" c="blue.6">{student.name}</Text>
                                                <Text c="dimmed">{student.registerNumber}</Text>
                                            </Box>
                                        </Grid.Col>
                                    ))}
                                </Grid>
                                <Center mt="20px">
                                    <Pagination total={10} />
                                </Center>
                            </Card>
                            <Group position="right" mt="20px">
                                <Button onClick={() => {
                                    navigate(PATH.DASHBOARD)
                                }}>Entrar</Button>
                            </Group>
                        </>
                    }
                </Box>
            </Center>
        </BackgroundImage>
    )
}