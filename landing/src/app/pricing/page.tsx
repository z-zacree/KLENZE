'use client';

import type { NextPage } from 'next';

import KlenzeAppShell from '@/components/AppShell/AppShell';
import { useEffect, useMemo, useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { nprogress } from '@mantine/nprogress';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CostBreakdown } from './components/CostBreakdown/CostBreakdown';
import { PricingSteps } from './components/Steps/PricingSteps';
import { PricingContextProvider } from './context/PricingContext';

const MAX_STEP = 5;

const PricingPage: NextPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const storeyCount = searchParams.get('storeyCount');
    const bedroomCount = searchParams.get('bedroomCount');
    const bathroomCount = searchParams.get('bathroomCount');
    const livingRoomCount = searchParams.get('livingRoomCount');
    const kitchenCount = searchParams.get('kitchenCount');

    const [step, setStep] = useState(0);
    const [modalOpened, { open, close }] = useDisclosure(false);

    const concatenatedSearchParams = useMemo(
        () => Array.from(searchParams.entries()).map(([key, value]) => `${key}=${value}`),
        [searchParams]
    );

    useEffect(() => {
        switch (step) {
            case 0:
                if (!storeyCount) {
                    const nextSearchParams = [...concatenatedSearchParams];

                    nextSearchParams.push('storeyCount=1');

                    const nextUrl = `${pathname}?${nextSearchParams.join('&')}`;

                    router.replace(nextUrl);
                }
                break;
            case 1:
                if (!bedroomCount) {
                    const nextSearchParams = [...concatenatedSearchParams];

                    nextSearchParams.push('bedroomCount=1');

                    const nextUrl = `${pathname}?${nextSearchParams.join('&')}`;

                    router.replace(nextUrl);
                } else if (!bathroomCount) {
                    const nextSearchParams = [...concatenatedSearchParams];

                    nextSearchParams.push('bathroomCount=1');

                    const nextUrl = `${pathname}?${nextSearchParams.join('&')}`;

                    router.replace(nextUrl);
                }
                break;
            case 2:
                if (!livingRoomCount) {
                    const nextSearchParams = [...concatenatedSearchParams];

                    nextSearchParams.push('livingRoomCount=1');

                    const nextUrl = `${pathname}?${nextSearchParams.join('&')}`;

                    router.replace(nextUrl);
                } else if (!kitchenCount) {
                    const nextSearchParams = [...concatenatedSearchParams];

                    nextSearchParams.push('kitchenCount=1');

                    const nextUrl = `${pathname}?${nextSearchParams.join('&')}`;

                    router.replace(nextUrl);
                }
                break;

            default:
                break;
        }
    }, [concatenatedSearchParams, step]);

    useEffect(() => {
        nprogress.set((step / MAX_STEP) * 100);
    }, [step]);

    return (
        <KlenzeAppShell>
            <PricingContextProvider>
                {step < MAX_STEP ? (
                    <PricingSteps open={open} step={step} setStep={setStep} />
                ) : (
                    <>completed</>
                )}
                <CostBreakdown opened={modalOpened} close={close} />
            </PricingContextProvider>
        </KlenzeAppShell>
    );
};

export default PricingPage;
