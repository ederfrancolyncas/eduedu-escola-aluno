import { Modal, Group, Text, Button, Stack, Divider } from "@mantine/core";

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
        >
            <Stack>
                <Text size="sm">
                    Essa ação vai desativar o login anterior.
                    O aluno selecionado está ativo em outro computador.
                </Text>
                <Text size="sm">
                    Deseja continuar?
                </Text>
                <Divider />
                <Group position="right">
                    <Button variant="outline" onClick={() => onClose()}>Não</Button>
                    <Button>Sim</Button>
                </Group>
            </Stack>
        </Modal>
    )
}