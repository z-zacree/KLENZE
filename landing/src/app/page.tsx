'use client';

import type { NextPage } from 'next';

import KlenzeAppShell from '@/components/AppShell/AppShell';
import { Stack } from '@mantine/core';

import { Contact, Hero, Services } from './components';

const HomePage: NextPage = () => (
    <KlenzeAppShell>
        <Stack gap="xl">
            <Hero />
            <Services />
            <Contact />
        </Stack>
    </KlenzeAppShell>
);

export default HomePage;
