import { Select, Stack, Button } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { z } from "zod"

type componentsProps = {
    schoolClasses: Array<[]>;
    sendToFather: any;
}
export function Step02({ schoolClasses, sendToFather }: componentsProps) {

    const formValidation = z.object({
        id: z.string().min(1, "Selecione uma turma")
    })
    const form = useForm({
        initialValues: {
            id: ''
        },
        validate: zodResolver(formValidation)
    })

    return (
        <Stack w={400} m="auto">
            <form onSubmit={form.onSubmit((schoolClass) => { sendToFather(3, schoolClass.id) })}>
                <Select
                    label="Turma"
                    placeholder="Selecione"
                    data={schoolClasses}
                    {...form.getInputProps('id')}
                    styles={{
                        label: { color: "#fff", marginBottom: 6 },
                    }}
                />
                <Button
                    fullWidth
                    type="submit"
                    mt={20}
                >
                    Entrar
                </Button>
            </form>
        </Stack>
    )
}