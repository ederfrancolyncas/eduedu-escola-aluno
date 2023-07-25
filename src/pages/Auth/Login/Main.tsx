import { BackgroundImage, Image, Box, Center, TextInput, Select, Flex } from "@mantine/core";
import { useState } from "react";
import bg from "~/assets/bgs/bg-aluno.svg";
import logo from "~/assets/logos/eduedu-branca.svg";
import { Step01 } from "./Step01";
import { Step02 } from "./Step02";
import { Step03 } from "./Step03";

export function LoginPage() {


    const [step, setStep] = useState(1)
    function nextStep(step) { setStep(step) }

    function getFromChild01() { nextStep(2) }
    return (
        <BackgroundImage src={bg} h="100vh" w="100vw">
            <Center maw={1200} h="100%" mx="auto">
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
                        <Step01 sendToFather={getFromChild01} />
                    }
                    {step == 2 &&
                        <Step02 />
                    }
                    {step == 3 &&
                        <Step03 />
                    }
                </Box>
            </Center>
        </BackgroundImage>
    )
}