'use client';

import type { NextPage } from 'next';

import KlenzeAppShell from '@components/AppShell/AppShell';
import { Hero } from './components';
import { Services } from './components/Services/Services';

const HomePage: NextPage = () => (
    <KlenzeAppShell>
        <Hero />
        <Services />
    </KlenzeAppShell>
);

export default HomePage;
