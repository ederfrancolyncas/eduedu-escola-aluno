import { Box, Button, Card, Text, Center, Grid, Group, Pagination } from "@mantine/core"
import { useNavigate } from "react-router-dom";
import { PATH } from "~/constants/path";

type componentsProps = {
    schoolClasses: Array<[]>;
    students: Array<[]>;
    sendToFather: any;
}
export function Step03({ schoolClasses, students, sendToFather }: componentsProps) {
    const navigate = useNavigate();

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
                            <Box
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid #228BE6',
                                    padding: '10px 20px'
                                }}
                            >
                                <Text fz="lg" c="blue.6">{student.name}</Text>
                                <Text fz="md" c="dimmed">{student.registry}</Text>
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