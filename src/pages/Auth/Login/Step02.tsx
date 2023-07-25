import { Select, Stack, Button } from "@mantine/core"
import { useSchoolClassesAll } from "~/api/user"

export function Step02() {

    const { data: schoolClasses } = useSchoolClassesAll()
    return (
        <Stack w={400} m="auto">
            <Select
                label="Turma"
                placeholder="Selecione"
                data={
                    schoolClasses?.map((item) => ({
                        label: item.name,
                        value: item.id
                    })) ?? []
                }
                styles={{
                    label: { color: "#fff", marginBottom: 6 },
                }}
            />
            <Button onClick={() => { }}>Entrar</Button>
        </Stack>
    )
}