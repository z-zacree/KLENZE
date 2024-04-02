'use client';

import type { NextPage } from 'next';

import { useSearchParams } from 'next/navigation';
import { FC, useCallback, useEffect, useState } from 'react';

import KlenzeAppShell from '@/components/AppShell/AppShell';
import { Badge, Button, Container, Flex, Group, Stack, Stepper, Text, Title } from '@mantine/core';

import { AdHocTasks, ExtraSupplies, PriceSummary, PropertyDetails } from './components';
import pricingPageClasses from './page.module.css';

const PricingPage: NextPage = (props) => {
    const [step, setStep] = useState(0);
    const searchParams = useSearchParams();

    const nextStep = useCallback(
        () => setStep((current) => (current < 4 ? current + 1 : current)),
        [setStep]
    );
    const prevStep = useCallback(
        () => setStep((current) => (current > 0 ? current - 1 : current)),
        [setStep]
    );

    const StepContent: FC = useCallback(() => {
        switch (step) {
            case 0:
                return <PropertyDetails />;
            case 1:
                return <ExtraSupplies />;
            case 2:
                return <AdHocTasks />;
            case 3:
                return <PriceSummary />;
            default:
                return <PriceSummary />;
        }
    }, [step]);

    useEffect(() => {
        // const bedroomCount = Number(searchParams.get('bedroomCount'));
        // const bathroomCount = Number(searchParams.get('bathroomCount'));
        // const storeyCount = Number(searchParams.get('storeyCount'));
        // const cleanType = searchParams.get('cleanType') as CleanType;
        // const propertyType = searchParams.get('propertyType') as PropertyType;
        // if (
        //     isNaN(bedroomCount) ||
        //     isNaN(bathroomCount) ||
        //     isNaN(storeyCount) ||
        //     !(cleanTypes.includes(cleanType) && propertyTypes.includes(propertyType))
        // ) {
        //     setStep(0);
        // } else setStep(1);
    }, [searchParams]);

    return (
        <KlenzeAppShell>
            <Container size="2xl">
                <Badge variant="light" color="teal" size="lg" mt="xl">
                    Pricing
                </Badge>

                <Title maw={560} order={1} mt="sm" fz={{ base: 28, xs: 36, sm: 42 }}>
                    Simple, transparent pricing
                </Title>

                <Text maw={560} c="dimmed" mt="sm" fz={{ base: 'sm', xs: 'md', sm: 'lg' }}>
                    Discover and Streamline your costs with our intuitive pricing calculator
                </Text>

                <Flex mt="lg" gap="md" direction={{ base: 'column', lg: 'row-reverse' }}>
                    <PriceSummary />
                    <Stack flex={3}>
                        <div className={pricingPageClasses['stepper-wrapper']}>
                            <Stepper
                                active={step}
                                onStepClick={setStep}
                                color="teal"
                                classNames={pricingPageClasses}
                            >
                                <Stepper.Step label="Property Details" />
                                <Stepper.Step label="Extra supplies" />
                                <Stepper.Step label="Ad Hoc Tasks" />
                                <Stepper.Step label="Date & Time" />
                            </Stepper>
                        </div>

                        <StepContent />
                    </Stack>
                </Flex>

                <Group justify="center" mt="xl">
                    <Button variant="default" onClick={prevStep}>
                        Back
                    </Button>
                    <Button onClick={nextStep}>Next step</Button>
                </Group>
            </Container>
        </KlenzeAppShell>
    );
};

export default PricingPage;
