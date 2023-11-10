'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import { AppShell, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Icon3dCubeSphere } from '@tabler/icons-react';

import { Hero } from './components';

const NavigationItems: FC = () => (
    <>
        <Link href="/" className="nav-item-link">
            Home
        </Link>
        <Button mt={4} color="teal" variant="outline">
            Contact us!
        </Button>
    </>
);

const HomePage: NextPage = () => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 80 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="xl">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Icon3dCubeSphere size={30} />
                        <Group align="center" visibleFrom="sm">
                            <NavigationItems />
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md" px={4}>
                <NavigationItems />
            </AppShell.Navbar>

            <AppShell.Main>
                <Hero />
            </AppShell.Main>
        </AppShell>
    );
};

export default HomePage;
