import { useAuthLogin } from "~/api/auth"
import { useForm, zodResolver } from "@mantine/form"
import { z } from "zod"
import { errorNotification } from "~/utils/errorNotification"
import { Stack, Button, TextInput } from "@mantine/core"

export function Step01({ sendToFather }) {

    const { mutate: login, isLoading: isAuthenticating } = useAuthLogin({
        onError: (error) => {
            errorNotification(
                "Erro durante a operação",
                `${error.message} (cod: ${error.code})`
            )
        },
        onSuccess: (data) => {
            sendToFather(data)
        }
    })
    const formValidation = z.object({
        accessKey: z.string().min(1, "Insira um código de acesso")
    })
    const form = useForm({
        initialValues: {
            accessKey: ''
        },
        validate: zodResolver(formValidation)
    })

    return (
        <form onSubmit={form.onSubmit((values) => { login(values) })}>
            <Stack>
                <TextInput
                    label="Código de acesso"
                    placeholder="Digite o código de acesso"
                    styles={{
                        label: { color: "#fff", marginBottom: 6 },
                    }}
                    {...form.getInputProps("accessKey")}
                />
                <Button type="submit">Entrar</Button>
            </Stack>
        </form>
    )
}