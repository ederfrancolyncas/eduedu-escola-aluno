import { Group, Modal, Text, Button, Stack, Divider } from "@mantine/core";

type Props = {
    opened: boolean;
    onClose(): void;
};

export function ModalDuplicidadeLogin({ opened, onClose }: Props) {
    return (
        <Modal
            title="Atenção - Duplicidade de Login"
            opened={opened}
            onClose={onClose}
            radius="md"
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        >
            <Stack>
                <Text>
                    Essa ação vai desativar o login anterior.
                    O aluno selecionado está ativo em outro computador.
                </Text>
                <Text>
                    Deseja continuar?
                </Text>
                <Divider />
                <Group position="right">
                    <Button>Não</Button>
                    <Button>Sim</Button>
                </Group>
            </Stack>
        </Modal>
    )
}