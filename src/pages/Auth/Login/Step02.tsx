import { Select, Stack, Button } from "@mantine/core"

export function Step02() {
    return (
        <Stack w={400} m="auto">
            <Select
                label="Turma"
                placeholder="Selecione"
                data={[]}
                styles={{
                    label: { color: "#fff", marginBottom: 6 },
                }}
            />
            <Button onClick={() => { }}>Entrar</Button>
        </Stack>
    )
}