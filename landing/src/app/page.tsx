'use client';

import type { NextPage } from 'next';

import KlenzeAppShell from '@/components/AppShell/AppShell';
import { Stack } from '@mantine/core';

import { Hero } from './components';
import { Contact } from './components/Contact/Contact';
import { Services } from './components/Services/Services';

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
