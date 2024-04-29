'use client';

import { PropertyType, propertyTypeReadableMap } from '@/models/Pricing';
import { Card, Divider, Group, Stack, Text, Title, rem } from '@mantine/core';
import { useSearchParams } from 'next/navigation';
import { FC, useCallback, useMemo } from 'react';

type FieldGroups = {
    label: string;
    labelOverride?: string;
    value: string | null;
}[];

export const CostBreakdown: FC = () => {
    const searchParams = useSearchParams();

    const propertyType = searchParams.get('propertyType') as PropertyType | null;
    const storeyCount = searchParams.get('storeyCount');
    const outdoorCount = searchParams.get('outdoorCount');
    const livingRoomCount = searchParams.get('livingRoomCount');
    const kitchenCount = searchParams.get('kitchenCount');
    const bedroomCount = searchParams.get('bedroomCount');
    const bathroomCount = searchParams.get('bathroomCount');
    const powderRoomCount = searchParams.get('powderroomCount');
    const linenDoubleCount = searchParams.get('linenDoubleCount');
    const linenSingleCount = searchParams.get('linenSingleCount');
    const completeBathroomSet = searchParams.get('completeBathroomSet');
    const showerPack = searchParams.get('showerPack');
    const bathroomPack = searchParams.get('bathroomPack');
    const towelPack = searchParams.get('towelPack');
    const completeKitchenSet = searchParams.get('completeKitchenSet');
    const kitchenPack = searchParams.get('kitchenPack');
    const beveragesPack = searchParams.get('beveragesPack');

    const fieldGroups: FieldGroups = useMemo(
        () => [
            { label: 'Bedroom', value: bedroomCount },
            { label: 'Bathroom', value: bathroomCount },
            { label: 'Powder room', value: powderRoomCount },
            { label: 'Living room', value: livingRoomCount },
            { label: 'Kitchen', value: kitchenCount },
            { label: 'Balcony/Outdoor area', value: outdoorCount },
            {
                label: 'Linen - Queen/King',
                labelOverride: `Linen${linenDoubleCount != '1' ? 's' : ''} - Queen/King`,
                value: linenDoubleCount,
            },
            {
                label: 'Linen - Single',
                labelOverride: `Linen${linenSingleCount != '1' ? 's' : ''} - Single`,
                value: linenSingleCount,
            },
            { label: 'Complete bathroom set', value: completeBathroomSet },
            { label: 'Shower pack', value: showerPack },
            { label: 'Bathroom pack', value: bathroomPack },
            { label: 'Towel pack', value: towelPack },
            { label: 'Complete kitchen set', value: completeKitchenSet },
            { label: 'Kitchen pack', value: kitchenPack },
            { label: 'Beverages pack', value: beveragesPack },
        ],
        [
            bedroomCount,
            bathroomCount,
            powderRoomCount,
            livingRoomCount,
            kitchenCount,
            outdoorCount,
            linenDoubleCount,
            linenSingleCount,
            completeBathroomSet,
            showerPack,
            bathroomPack,
            towelPack,
            completeKitchenSet,
            kitchenPack,
            beveragesPack,
        ]
    );

    const summaryTitle: string = useMemo(
        () => (propertyType ? propertyTypeReadableMap[propertyType] : 'Summary'),
        [propertyType]
    );

    const getRoomPrice = useCallback((beds: number, baths: number) => {
        let subtotal = 40 + 60 * beds + 20 * baths;

        if (beds > 1) subtotal -= 40;

        return subtotal;
    }, []);

    const gst = useMemo(() => 0, []);
    const total = useMemo(() => 0, []);
    const subtotal = useMemo(() => {
        let subtotal = 0;

        if (bedroomCount && bathroomCount) {
            subtotal += getRoomPrice(Number(bedroomCount), Number(bathroomCount));
        }

        if (powderRoomCount) {
            subtotal += Number(powderRoomCount) * 20;
        }

        if (livingRoomCount && Number(livingRoomCount) > 1) {
            subtotal += (Number(livingRoomCount) - 1) * 55;
        }

        if (kitchenCount && Number(kitchenCount) > 1) {
            subtotal += (Number(kitchenCount) - 1) * 55;
        }

        if (outdoorCount) {
            subtotal += Number(outdoorCount) * 60;
        }

        if (linenDoubleCount) {
            subtotal += Number(linenDoubleCount) * 18;
        }

        if (linenSingleCount) {
            subtotal += Number(linenSingleCount) * 14;
        }

        if (completeBathroomSet) {
            subtotal += Number(completeBathroomSet) * 10;
        }

        if (completeKitchenSet) {
            subtotal += Number(completeKitchenSet) * 10;
        }

        if (towelPack) {
            subtotal += Number(towelPack) * 3;
        }

        if (bathroomPack) {
            subtotal += Number(bathroomPack) * 5;
        }

        if (showerPack) {
            subtotal += Number(showerPack) * 5;
        }

        if (kitchenPack) {
            subtotal += Number(kitchenPack) * 5;
        }

        if (beveragesPack) {
            subtotal += Number(beveragesPack) * 5;
        }

        return subtotal;
    }, [fieldGroups]);

    return (
        <Card flex={1} shadow="sm" radius="md" withBorder>
            <Stack h="full" gap={rem(8)}>
                <Title order={3} className="spacer">
                    {summaryTitle}
                    &nbsp;
                    {propertyType && storeyCount && (
                        <Text span>
                            ({storeyCount} {Number(storeyCount) > 1 ? 'stories' : 'storey'})
                        </Text>
                    )}
                </Title>
                {fieldGroups.filter(({ value }) => value).length > 0 && <Divider my="xs" />}
                {fieldGroups.map(
                    ({ value, label, labelOverride }) =>
                        value &&
                        Number(value) > 0 && (
                            <Text size="sm" c="dimmed">
                                {value} {labelOverride || label + (Number(value) != 1 ? 's' : '')}
                            </Text>
                        )
                )}

                <Divider my="xs" />
                <Group justify="space-between">
                    <Text size="sm">Subtotal</Text>
                    <Text size="md" fw={600}>
                        A${subtotal}
                    </Text>
                </Group>
                <Group justify="space-between">
                    <Text size="sm">GST</Text>
                    <Text size="md" fw={600}>
                        A${gst}
                    </Text>
                </Group>
                <Divider my="xs" />
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
