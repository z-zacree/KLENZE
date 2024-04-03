'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback, useMemo } from 'react';

import { PropertyType, propertyTypeReadableMap } from '@/models/Pricing';
import {
    ActionIcon,
    ComboboxItem,
    Flex,
    Group,
    GroupProps,
    NumberInput,
    Select,
    Stack,
    Text,
    Title,
    rem,
} from '@mantine/core';
import { IconMinus, IconPlus } from '@tabler/icons-react';

import pricingPageClasses from '../../page.module.css';

type SelectFieldDetails = {
    type: 'select';
    title: string;
    subtitle: string;
    fieldName: string;
    value: string;
    options: ComboboxItem[];
};

type CountFieldDetails = {
    type: 'count';
    title: string;
    subtitle: string;
    fieldName: string;
    min: number;
    value: string;
};

type FieldGroups = (SelectFieldDetails | CountFieldDetails)[][];

export const PropertyDetails: FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const propertyType = searchParams.get('propertyType') as PropertyType | null;
    const storeyCount = searchParams.get('storeyCount') || '1';
    const livingRoomCount = searchParams.get('livingRoomCount') || '1';
    const kitchenCount = searchParams.get('kitchenCount') || '1';
    const bedroomCount = searchParams.get('bedroomCount') || '1';
    const bathroomCount = searchParams.get('bathroomCount') || '1';
    const powderRoomCount = searchParams.get('powderroomCount') || '0';

    const propertyTypeSelectItems: ComboboxItem[] = useMemo(
        () => Object.entries(propertyTypeReadableMap).map(([value, label]) => ({ label, value })),
        [propertyTypeReadableMap]
    );

    const fieldGroups: FieldGroups = useMemo(
        () => [
            [
                {
                    type: 'select',
                    title: 'Type of Property',
                    subtitle: `Does not affect the cost, but it helps our cleaners prepare for their job more efficiently.`,
                    fieldName: 'propertyType',
                    value: propertyType as string,
                    options: propertyTypeSelectItems,
                },
                {
                    type: 'count',
                    title: 'Number of storeys',
                    subtitle: `Does not affect the cost, but it helps us select the appropriate cleaners fit for the job.`,
                    fieldName: 'storeyCount',
                    min: 1,
                    value: storeyCount,
                },
                {
                    type: 'count',
                    title: 'Number of living rooms',
                    subtitle: `The number of main living areas in the property.`,
                    fieldName: 'livingRoomCount',
                    min: 0,
                    value: livingRoomCount,
                },
                {
                    type: 'count',
                    title: 'Number of kitchens',
                    subtitle: `The number of kitchen areas available for cleaning.`,
                    fieldName: 'kitchenCount',
                    min: 0,
                    value: kitchenCount,
                },
            ],
            [
                {
                    type: 'count',
                    title: 'Number of bedrooms',
                    subtitle: 'Note: Offices/Studies count as Bedrooms.',
                    fieldName: 'bedroomCount',
                    min: 0,
                    value: bedroomCount,
                },
                {
                    type: 'count',
                    title: 'Number of bathrooms',
                    subtitle: 'Bathroom consists of Shower, Toilet Bowl and Sink.',
                    fieldName: 'bathroomCount',
                    min: 0,
                    value: bathroomCount,
                },
                {
                    type: 'count',
                    title: 'Number of powder rooms',
                    subtitle: 'Powder rooms consists of Toilet Bowl and/or Sink only. (No Shower)',
                    fieldName: 'powderroomCount',
                    min: 0,
                    value: powderRoomCount,
                },
            ],
        ],
        [
            propertyType,
            storeyCount,
            bedroomCount,
            bathroomCount,
            powderRoomCount,
            livingRoomCount,
            kitchenCount,
        ]
    );

    const COUNT_GROUP_PROPS = useMemo(
        () =>
            ({
                w: { base: 'min-content', xs: rem(200) },
                justify: 'center',
                wrap: 'nowrap',
                gap: 'sm',
            } satisfies GroupProps),
        []
    );

    const updateParam = useCallback(
        (propName: string, nextValue: string | number | null) => {
            const nextSearchParams = Array.from(searchParams.entries()).map(([key, value]) => {
                if (key == propName && nextValue != null) {
                    value = String(nextValue);
                }

                return `${key}=${value}`;
            });

            if (!searchParams.has(propName) && nextValue != null) {
                nextSearchParams.push(`${propName}=${nextValue}`);
            }

            const nextUrl = `${pathname}?${nextSearchParams.join('&')}`;

            router.replace(nextUrl);
        },
        [router, pathname, searchParams]
    );

    return (
        <Flex my="lg" gap={{ base: 'md', md: 'xl' }} direction={{ base: 'column', md: 'row' }}>
            {fieldGroups.map((group, fieldGroupIndex) => (
                <Stack flex={1} key={`stack-${fieldGroupIndex}`}>
                    {group.map((details, detailsIndex) => (
                        <Flex
                            gap="md"
                            direction={{ base: 'column', xs: 'row' }}
                            justify="space-between"
                            key={`flex-${detailsIndex}`}
                        >
                            <Stack flex={1} gap={0}>
                                <Title order={4}>{details.title}</Title>
                                <Text size="sm" c="dimmed">
                                    {details.subtitle}
                                </Text>
                            </Stack>
                            {details.type == 'count' ? (
                                <Group {...COUNT_GROUP_PROPS}>
                                    <ActionIcon
                                        variant="light"
                                        size="sm"
                                        radius="md"
                                        aria-label={`Decrease ${details.fieldName} count`}
                                        color="teal"
                                        onClick={() =>
                                            updateParam(
                                                details.fieldName,
                                                Number(details.value) <= details.min
                                                    ? Number(details.value)
                                                    : Number(details.value) - 1
                                            )
                                        }
                                    >
                                        <IconMinus size="1rem" />
                                    </ActionIcon>
                                    <NumberInput
                                        w={rem(36)}
                                        hideControls
                                        value={details.value}
                                        classNames={{
                                            input: pricingPageClasses['centered-number-input'],
                                        }}
                                    />
                                    <ActionIcon
                                        variant="light"
                                        size="sm"
                                        radius="md"
                                        aria-label={`Increase ${details.fieldName} count`}
                                        color="teal"
                                        onClick={() =>
                                            updateParam(
                                                details.fieldName,
                                                Number(details.value) + 1
                                            )
                                        }
                                    >
                                        <IconPlus size="1rem" />
                                    </ActionIcon>
                                </Group>
                            ) : (
                                <Select
                                    color="teal"
                                    placeholder="Pick type of property"
                                    defaultValue={details.value}
                                    data={details.options}
                                    onChange={(val) => updateParam(details.fieldName, val)}
                                />
                            )}
                        </Flex>
                    ))}
                </Stack>
            ))}
        </Flex>
    );
};
