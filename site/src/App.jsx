import { Box, Button, Center, Group, Image, List, Paper, SegmentedControl, Select, Space, Stack, Switch, Text, Title, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconAppWindow, IconDownload } from "@tabler/icons-react"

const ZILTEK_URL = "https://ziltek.kuylar.dev/";

function App() {
	const { t, i18n: { language, changeLanguage } } = useTranslation();
	const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

	return (
		<Group justify='center'>
			<Stack
				align='center'
				style={{ textAlign: "center" }}
				px="sm"
				className="app"
				w={isMobile ? "90vw" : "50vw"}>
				<Space h="xl" />
				<Title>
					ZilTek
					<Text c="dimmed">{t("by_dennis")}</Text>
				</Title>
				<SegmentedControl
					value={language}
					onChange={(v) => changeLanguage(v)}
					data={[
						{ value: "en", label: "English" },
						{ value: "tr", label: "Türkçe" },
					]}
					comboboxProps={{ withinPortal: false }}
				/>
				<Text>
					{t("content1")}
				</Text>

				<Paper withBorder p="md" w="100%">
					<Title order={3}>{t("use_ziltek")}</Title>
					<Center p="md">
						<Group>
							<Button
								variant='light'
								color="green"
								leftSection={<IconDownload />}>
								{t("download")}
							</Button>
							<Button
								variant='light'
								leftSection={<IconAppWindow />}
								component="a"
								href={ZILTEK_URL}
								
							>
								{t("open")}
							</Button>
						</Group>
					</Center>
				</Paper>
				<Paper withBorder p="md" w="100%" ta="left">
					<Title order={3}>{t("feats_header")}</Title>
					<List>
						{t("features").split("|").map((content, i) => (
							<List.Item key={i}>
								{content}
							</List.Item>
						))}
					</List>
				</Paper>
				<Paper withBorder p="md" w="100%">
					<Title order={3} mb="md">{t("screenshots")}</Title>
					{["view", "table-edit", "files"].map((n, i) => (
						<Image
							src={"/" + language + "-" + n + ".png"}
						/>
					))}
				</Paper>
				<Space h="50vh" />
			</Stack>
		</Group>
	)
}

export default App
