'use client';

import type { NextPage } from 'next';
import { useEffect } from 'react';

import KlenzeAppShell from '@components/AppShell/AppShell';
import { BasicPricingInfo } from '@models/Pricing';

interface PageProps {
    searchParams: BasicPricingInfo;
}

const PricingPage: NextPage<PageProps> = ({ searchParams }) => {
    useEffect(() => {
        console.log(searchParams);
    }, []);

    return (
        <KlenzeAppShell>
            <div>Pricing Page</div>
        </KlenzeAppShell>
    );
};

export default PricingPage;
