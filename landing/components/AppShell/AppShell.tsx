'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { AppShell, Burger, Button, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Icon3dCubeSphere } from '@tabler/icons-react';

const NavigationItems: FC = () => (
    <>
        <Link href="/" className="nav-item-link">
            Home
        </Link>
        <Button component={Link} href="#contact" mt={4} color="teal" variant="outline">
            Contact us!
        </Button>
    </>
);

const KlenzeAppShell: NextPage<PropsWithChildren> = ({ children }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 80 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Container h="100%" size="2xl">
                    <Group h="100%">
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        <Group justify="space-between" style={{ flex: 1 }}>
                            <Icon3dCubeSphere size={30} />
                            <Group align="center" visibleFrom="sm">
                                <NavigationItems />
                            </Group>
                        </Group>
                    </Group>
                </Container>
            </AppShell.Header>

            <AppShell.Navbar p="md" px={4}>
                <NavigationItems />
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
};

export default KlenzeAppShell;
