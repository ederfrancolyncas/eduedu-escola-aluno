import { PATH } from "~/constants/path";
import { useNavigate } from "react-router-dom";
import { Stack, Grid, Group, Card, Text, Center, Pagination, Button } from "@mantine/core"
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { ModalDuplicidadeLogin } from "./ModalDuplicidadeLogin";

type componentsProps = {
    schoolClassId: string;
    students: Array<[]>;
    sendToFather: any;
}
export function Step03({ schoolClassId, students, sendToFather }: componentsProps) {
    const navigate = useNavigate();

    const [modal, modalHandler] = useDisclosure(false);

    const [studentId, setStudentId] = useState('')
    function openModal(studentId: string) {
        setStudentId(studentId)
        modalHandler.open()
    }
    function selectStudent() {
        console.log('uepra')
    }
    function login() {
        navigate(PATH.DASHBOARD)
    }
    return (
        <>
            <Card py={20} px={40}>
                <Grid columns={4}>
                    {students?.map((student) => (
                        <Grid.Col
                            key={student.id}
                            span={1}
                            style={{ height: '100%' }}

                        >
                            <Button
                                id={student.id}
                                onClick={() => openModal(student.id)}
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid #228BE6',
                                    padding: '10px 20px',
                                    height: '100%',
                                    width: '100%',
                                    display: 'block',
                                }}
                                styles={{
                                    root: {
                                        background: 'white',
                                        "&:hover": {
                                            background: '#E7F5FF'
                                        }
                                    }
                                }}
                            >
                                <Stack>
                                    <Text fz="lg" c="blue.6">{student.name}</Text>
                                    <Text fz="md" c="dimmed">{student.registry}</Text>
                                </Stack>
                            </Button>
                        </Grid.Col>
                    ))}
                </Grid>

                {/* TODO: come back here when backend response have pagination */}
                <Center mt="20px">
                    <Pagination total={10} />
                </Center>
            </Card>
            <Group position="right" mt="20px">
                <Button
                    onClick={() => login()}
                    disabled={!studentId.length}
                    style={{ width: '157px' }}
                >
                    Entrar
                </Button>
            </Group>

            <ModalDuplicidadeLogin
                opened={modal}
                onClose={modalHandler.close}
            />
        </>
    )
}