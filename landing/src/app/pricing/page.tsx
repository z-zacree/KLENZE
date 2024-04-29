'use client';

import type { NextPage } from 'next';

import { FC, useCallback, useState } from 'react';

import KlenzeAppShell from '@/components/AppShell/AppShell';
import { Badge, Container, Flex, Stack, Stepper, Text, Title } from '@mantine/core';

import { AdHocTasks, CostBreakdown, HouseSupplies, PropertyDetails } from './components';
import pricingPageClasses from './page.module.css';

const PricingPage: NextPage = () => {
    const [step, setStep] = useState(0);

    const StepContent: FC = useCallback(() => {
        switch (step) {
            case 0:
                return <PropertyDetails onFinishStep={() => setStep(1)} />;
            case 1:
                return (
                    <HouseSupplies onPrevStep={() => setStep(0)} onFinishStep={() => setStep(2)} />
                );
            case 2:
                return <AdHocTasks onPrevStep={() => setStep(1)} onFinishStep={() => setStep(3)} />;
            case 3:
                return <CostBreakdown />;
            default:
                return <CostBreakdown />;
        }
    }, [step]);

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

                <Flex mt="lg" gap="md" direction={{ base: 'column', lg: 'row' }}>
                    <Stack flex={3}>
                        <div className={pricingPageClasses['stepper-wrapper']}>
                            <Stepper
                                active={step}
                                onStepClick={setStep}
                                color="teal"
                                classNames={pricingPageClasses}
                            >
                                <Stepper.Step label="Property Details" />
                                <Stepper.Step label="House supplies" />
                                <Stepper.Step label="Ad Hoc Tasks" />
                                <Stepper.Step label="Date & Time" />
                            </Stepper>
                        </div>

                        <StepContent />
                    </Stack>
                    <CostBreakdown />
                </Flex>
            </Container>
        </KlenzeAppShell>
    );
};

export default PricingPage;
