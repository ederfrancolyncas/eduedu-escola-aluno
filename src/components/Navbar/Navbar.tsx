import {
  Header as MantineHeader,
  Image,
  Text,
  Group,
  Divider,
  createStyles,
} from "@mantine/core";
import logo from "~/assets/logos/eduedu-azul.svg";

const useStyles = createStyles({
  anchor: {
    textDecoration: "none",
    color: "inherit",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

const links = [
  { label: "Amanda Freitas", value: "" },
  { label: "Matrícula", value: "17827498371" },
  { label: "Série", value: "2º Ano Fund" },
  { label: "Turma", value: "2º C" },
  { label: "Período", value: "Manhã" },
] as const;

export function Navbar() {
  const { classes } = useStyles();

  return (
    <MantineHeader
      height={78}
      styles={{
        root: {
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        },
      }}
      py={17}
    >
      <Group
        maw={1200}
        w="100%"
        spacing={64}
        position="apart"
        noWrap
        align="center"
        h="100%"
        px={150}
      >
        <Image src={logo} alt="EduEdu Escola" width={50} mx={40} />

        <Group noWrap>
          <Group spacing={16}>
            {links.map((link) => (
              <>
                <Text color="dark.5" td="none" weight={600} size={14}>
                  {link.label}
                </Text>
                <Text>{link.value}</Text>
              </>
            ))}
          </Group>
        </Group>
      </Group>
    </MantineHeader>
  );
}
