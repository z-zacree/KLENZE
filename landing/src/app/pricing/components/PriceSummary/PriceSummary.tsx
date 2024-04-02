'use client';

import { Card, Divider, Group, Stack, Text, Title, rem } from '@mantine/core';
import { useSearchParams } from 'next/navigation';
import { FC, useMemo } from 'react';
import { PropertyType } from '../../../../models/Pricing';

export const PriceSummary: FC = () => {
    const searchParams = useSearchParams();

    const propertyType = searchParams.get('propertyType') as PropertyType | null;
    const storeyCount = searchParams.get('storeyCount') || '1';
    const livingRoomCount = searchParams.get('livingRoomCount') || '1';
    const kitchenCount = searchParams.get('kitchenCount') || '1';
    const bedroomCount = searchParams.get('bedroomCount') || '1';
    const bathroomCount = searchParams.get('bathroomCount') || '1';
    const powderRoomCount = searchParams.get('powderroomCount') || '0';

    const gst = useMemo(() => 0, []);
    const total = useMemo(() => 0, []);
    const subtotal = useMemo(() => 0, []);

    return (
        <Card flex={1} shadow="sm" radius="md" withBorder>
            <Stack h="full">
                <Title order={3} className="spacer">
                    Summary
                </Title>
                <Divider />
                <Group justify="space-between">
                    <Text size="sm">Subtotal</Text>
                    <Text size="md" fw={600}>
                        A${subtotal}
                    </Text>
                </Group>
                <Group mt={rem(-12)} justify="space-between">
                    <Text size="sm">GST</Text>
                    <Text size="md" fw={600}>
                        A${gst}
                    </Text>
                </Group>
                <Divider />
                <Group justify="space-between">
                    <Text size="sm">Total</Text>
                    <Text size="md" fw={600}>
                        A${total}
                    </Text>
                </Group>
            </Stack>
        </Card>
    );
};
