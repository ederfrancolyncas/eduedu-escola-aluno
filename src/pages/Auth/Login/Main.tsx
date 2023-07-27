import { BackgroundImage, Image, Box, Center, TextInput, Select, Flex } from "@mantine/core";
import { useState } from "react";
import bg from "~/assets/bgs/bg-aluno.svg";
import logo from "~/assets/logos/eduedu-branca.svg";
import { Step01 } from "./Step01";
import { Step02 } from "./Step02";
import { Step03 } from "./Step03";
import { useSchoolClassesAll } from "~/api/user";
import { useStudentsBySchoolclass } from "~/api/school-class";
import { errorNotification } from "~/utils/errorNotification";

export function LoginPage() {

    // Controlling steps:
    const [step, setStep] = useState(1)
    function nextStep(step: number) { setStep(step) }

    // SchoolClasses:
    const [schoolClassId, setSchoolClassId] = useState('')
    const { data: schoolClasses } = useSchoolClassesAll()
    let schoolClassesOptions = schoolClasses?.map((item) => ({
        label: item.name,
        value: item.id
    })) ?? []

    // Students:
    const [students, setStudents] = useState([])
    const { mutate: studentsList } = useStudentsBySchoolclass({
        onError: (error) => {
            errorNotification(
                "Erro durante a operação",
                `${error.message} (cod: ${error.code})`
            );
        },
        onSuccess: (data) => {
            console.log(data)
            setStudents(data)
        },
    });

    // Managing data received from childs:
    function getDataFromChild(step: number, schoolClassIdChild: string) {
        nextStep(step)
        setSchoolClassId(schoolClassIdChild)

        step == 3 ? studentsList({ id: schoolClassIdChild }) : {}
    }

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
                                data={schoolClassesOptions}
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
                        <Step01 sendToFather={getDataFromChild} />
                    }
                    {step == 2 &&
                        <Step02
                            schoolClasses={schoolClassesOptions}
                            sendToFather={getDataFromChild}
                        />
                    }
                    {step == 3 &&
                        <Step03
                            schoolClasses={schoolClasses}
                            students={students}
                            sendToFather={getDataFromChild}
                        />
                    }
                </Box>
            </Center>
        </BackgroundImage>
    )
}