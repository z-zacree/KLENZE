'use client';

import type { NextPage } from 'next';

import KlenzeAppShell from '@components/AppShell/AppShell';
import { Badge, Container, Stepper, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { PriceSummary } from './components';

import pricingPageClasses from './page.module.css';

const PricingPage: NextPage = () => {
    const [step, setStep] = useState(1);

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

                <PriceSummary />
            </Container>
        </KlenzeAppShell>
    );
};

export default PricingPage;
