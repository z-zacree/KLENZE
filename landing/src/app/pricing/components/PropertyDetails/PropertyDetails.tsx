'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { PricingFieldDetails, PropertyType, propertyTypeReadableMap } from '@/models/Pricing';
import {
    ActionIcon,
    Button,
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

interface ComponentProps {
    onFinishStep: Function;
}

export const PropertyDetails: FC<ComponentProps> = ({ onFinishStep }) => {
    const [innerStep, setInnerStep] = useState(0);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Step 1
    const propertyType = searchParams.get('propertyType') as PropertyType | null;
    const storeyCount = searchParams.get('storeyCount');
    const outdoorCount = searchParams.get('outdoorCount');

    // Step 2
    const bedroomCount = searchParams.get('bedroomCount');
    const bathroomCount = searchParams.get('bathroomCount');
    const powderRoomCount = searchParams.get('powderroomCount');

    // Step 3
    const livingRoomCount = searchParams.get('livingRoomCount');
    const kitchenCount = searchParams.get('kitchenCount');

    const propertyTypeSelectItems: ComboboxItem[] = useMemo(
        () => Object.entries(propertyTypeReadableMap).map(([value, label]) => ({ label, value })),
        [propertyTypeReadableMap]
    );

    const fieldGroups: PricingFieldDetails = useMemo(
        () => [
            {
                step: 0,
                type: 'select',
                title: 'Type of Property',
                subtitle: `Does not affect the cost, but it helps our cleaners prepare for their job more efficiently.`,
                fieldName: 'propertyType',
                value: propertyType as string,
                options: propertyTypeSelectItems,
            },
            {
                step: 0,
                type: 'count',
                title: 'Number of storeys',
                subtitle: `Does not affect the cost, but it helps us select the appropriate cleaners fit for the job.`,
                fieldName: 'storeyCount',
                min: 1,
                value: storeyCount ?? '1',
            },
            {
                step: 0,
                type: 'count',
                title: 'Number of balcony/outdoor areas',
                subtitle: `Any external outdoor extension area`,
                fieldName: 'outdoorCount',
                min: 0,
                value: outdoorCount ?? '0',
            },
            {
                step: 1,
                type: 'count',
                title: 'Number of bedrooms',
                subtitle: 'Offices/Studies count as Bedrooms.',
                fieldName: 'bedroomCount',
                min: 1,
                value: bedroomCount ?? '1',
            },
            {
                step: 1,
                type: 'count',
                title: 'Number of bathrooms',
                subtitle: 'Consists of a Shower, Toilet Bowl and/or Sink.',
                fieldName: 'bathroomCount',
                min: 1,
                value: bathroomCount ?? '1',
            },
            {
                step: 1,
                type: 'count',
                title: 'Number of powder rooms',
                subtitle: 'Consists of Toilet Bowl and/or Sink only. (No Shower)',
                fieldName: 'powderroomCount',
                min: 0,
                value: powderRoomCount ?? '0',
            },
            {
                step: 2,
                type: 'count',
                title: 'Number of living rooms',
                subtitle: `Cleaning costs cover a single living area. Additional fee for multiples.`,
                fieldName: 'livingRoomCount',
                min: 0,
                value: livingRoomCount ?? '1',
            },
            {
                step: 2,
                type: 'count',
                title: 'Number of kitchens',
                subtitle: `Cleaning costs cover a single kitchen area. Additional fee for multiples.`,
                fieldName: 'kitchenCount',
                min: 0,
                value: kitchenCount ?? '1',
            },
        ],
        [
            propertyType,
            storeyCount,
            outdoorCount,
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

    const filteredFieldGroups = useMemo(() => {
        return fieldGroups.filter(({ step }) => step == innerStep);
    }, [fieldGroups, innerStep]);

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

    const nextStep = useCallback(() => {
        if (innerStep < 2) {
            setInnerStep((current) => current + 1);
        } else onFinishStep();
    }, [innerStep, setInnerStep]);

    const prevStep = useCallback(
        () => setInnerStep((current) => (current > 0 ? current - 1 : current)),
        [setInnerStep]
    );

    const concatenatedSearchParams = useMemo(
        () => Array.from(searchParams.entries()).map(([key, value]) => `${key}=${value}`),
        [searchParams]
    );

    useEffect(() => {
        switch (innerStep) {
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
    }, [concatenatedSearchParams, innerStep]);

    return (
        <Stack flex={1}>
            {filteredFieldGroups.map((details, detailsIndex) => (
                <Flex
                    gap="md"
                    direction={{ base: 'column', xs: 'row' }}
                    justify="space-between"
                    key={`flex-${detailsIndex}`}
                >
                    <Stack flex={3} gap={0}>
                        <Title order={4}>{details.title}</Title>
                        <Text size="sm" c="dimmed">
                            {details.subtitle}
                        </Text>
                    </Stack>
                    {details.type == 'count' ? (
                        <Group flex={1} {...COUNT_GROUP_PROPS}>
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
                                    updateParam(details.fieldName, Number(details.value) + 1)
                                }
                            >
                                <IconPlus size="1rem" />
                            </ActionIcon>
                        </Group>
                    ) : (
                        <Select
                            flex={1}
                            miw={rem(104)}
                            color="teal"
                            placeholder="Pick type of property"
                            defaultValue={details.value}
                            data={details.options}
                            onChange={(val) => updateParam(details.fieldName, val)}
                        />
                    )}
                </Flex>
            ))}
            <Group mt="xl">
                <Button variant="default" onClick={prevStep}>
                    Back
                </Button>
                <Button color="teal" onClick={nextStep}>
                    Next step
                </Button>
            </Group>
        </Stack>
    );
};
