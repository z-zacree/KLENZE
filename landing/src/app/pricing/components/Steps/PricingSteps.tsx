'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, FC, SetStateAction, useCallback, useContext, useMemo } from 'react';

import {
    CountFieldDetails, PropertyType, propertyTypeReadableMap, SelectFieldDetails
} from '@/models/Pricing';
import {
    ActionIcon, Button, ComboboxItem, Container, Divider, Group, GroupProps, NumberInput, rem,
    ScrollArea, Select, SimpleGrid, Stack, Text
} from '@mantine/core';
import { nprogress } from '@mantine/nprogress';
import { IconArrowRight, IconCheck, IconMinus, IconPlus } from '@tabler/icons-react';

import { PricingContext } from '../../context/PricingContext';
import pricingPageClasses from '../../page.module.css';

type Step = {
    description: string;
    fields: (SelectFieldDetails | CountFieldDetails)[];
};

interface ComponentProps {
    step: number;
    open: () => void;
    setStep: Dispatch<SetStateAction<number>>;
}

export const PricingSteps: FC<ComponentProps> = ({ step, open, setStep }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { total: subtotal } = useContext(PricingContext);

    const propertyType = searchParams.get('propertyType') as PropertyType;
    const storeyCount = searchParams.get('storeyCount');
    const bedroomCount = searchParams.get('bedroomCount');
    const bathroomCount = searchParams.get('bathroomCount');
    const powderRoomCount = searchParams.get('powderRoomCount');
    const livingRoomCount = searchParams.get('livingRoomCount');
    const kitchenCount = searchParams.get('kitchenCount');
    const outdoorCount = searchParams.get('outdoorCount');
    const linenDoubleCount = searchParams.get('linenDoubleCount');
    const linenSingleCount = searchParams.get('linenSingleCount');
    const completeBathroomSet = searchParams.get('completeBathroomSet');
    const showerPack = searchParams.get('showerPack');
    const bathroomPack = searchParams.get('bathroomPack');
    const towelPack = searchParams.get('towelPack');
    const completeKitchenSet = searchParams.get('completeKitchenSet');
    const kitchenPack = searchParams.get('kitchenPack');
    const beveragesPack = searchParams.get('beveragesPack');

    const propertyTypeSelectItems: ComboboxItem[] = useMemo(
        () => Object.entries(propertyTypeReadableMap).map(([value, label]) => ({ label, value })),
        [propertyTypeReadableMap]
    );

    const steps: Step[] = useMemo(
        () => [
            {
                description: 'Basic property details',
                fields: [
                    {
                        id: crypto.randomUUID(),
                        type: 'select',
                        label: 'Type of Property',
                        description: `Does not affect the cost, but it helps our cleaners prepare for their job more efficiently.`,
                        placeholder: 'Pick type of property',
                        fieldName: 'propertyType',
                        value: propertyType as string,
                        options: propertyTypeSelectItems,
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Number of storeys',
                        description: `Does not affect the cost, but it helps us select the appropriate cleaners fit for the job.`,
                        fieldName: 'storeyCount',
                        value: storeyCount ?? '0',
                        min: 1,
                    },
                ],
            },
            {
                description: 'Interior spaces',
                fields: [
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Number of bedrooms',
                        description: 'Offices/Studies count as Bedrooms.',
                        fieldName: 'bedroomCount',
                        min: 1,
                        value: bedroomCount ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Number of bathrooms',
                        description: 'Consists of a Shower, Toilet Bowl and/or Sink.',
                        fieldName: 'bathroomCount',
                        min: 1,
                        value: bathroomCount ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Number of powder rooms',
                        description: 'Consists of Toilet Bowl and/or Sink only. (No Shower)',
                        fieldName: 'powderRoomCount',
                        min: 0,
                        value: powderRoomCount ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Number of living areas',
                        description: `Cleaning costs cover a single living area. Additional fee for multiples.`,
                        fieldName: 'livingRoomCount',
                        min: 0,
                        value: livingRoomCount ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Number of kitchen areas',
                        description: `Cleaning costs cover a single kitchen area. Additional fee for multiples.`,
                        fieldName: 'kitchenCount',
                        min: 0,
                        value: kitchenCount ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Number of balcony/outdoor areas',
                        description: `Any external outdoor extension area`,
                        fieldName: 'outdoorCount',
                        min: 0,
                        value: outdoorCount ?? '0',
                    },
                ],
            },
            {
                description: 'Linen requirements',
                fields: [
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Linen - Queen/King',
                        description: `3x sheets Queen linen, 4x Pillowcases, 2x Bath Towels`,
                        fieldName: 'linenDoubleCount',
                        min: 0,
                        value: linenDoubleCount ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Linen - Single',
                        description: `3x sheets Single linen, 2x Pillowcases, 1x Bath Towel`,
                        fieldName: 'linenSingleCount',
                        min: 0,
                        value: linenSingleCount ?? '0',
                    },
                ],
            },
            {
                description: 'Bathroom supplies',
                fields: [
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Shower pack',
                        description: `1x Shampoo, 1x Conditioner, 1x Body Wash, 3x Toilet Paper rolls`,
                        fieldName: 'showerPack',
                        min: 0,
                        value: showerPack ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Bathroom pack',
                        description: `1x bath mat, 1x Hand towel`,
                        fieldName: 'bathroomPack',
                        min: 0,
                        value: bathroomPack ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Complete Bathroom Set',
                        description: `Shower pack + Bathroom pack`,
                        fieldName: 'completeBathroomSet',
                        min: 0,
                        value: completeBathroomSet ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Towel pack',
                        description: `2x Bath Towel`,
                        fieldName: 'towelPack',
                        min: 0,
                        value: towelPack ?? '0',
                    },
                ],
            },
            {
                description: 'Kitchen supplies',
                fields: [
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Kitchen pack',
                        description: `1x Sponge, 1x Wipe, 1x Laundry Powder, 1x Dishwashing Liquid, 3x Bin Liners`,
                        fieldName: 'kitchenPack',
                        min: 0,
                        value: kitchenPack ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Beverages pack',
                        description: `1x Milk, 2x Tea, 2x Coffee, 2x Sugar`,
                        fieldName: 'beveragesPack',
                        min: 0,
                        value: beveragesPack ?? '0',
                    },
                    {
                        id: crypto.randomUUID(),
                        type: 'count',
                        label: 'Complete Kitchen set',
                        description: `Kitchen pack + Beverages pack`,
                        fieldName: 'completeKitchenSet',
                        min: 0,
                        value: completeKitchenSet ?? '0',
                    },
                ],
            },
        ],
        [
            propertyTypeSelectItems,
            propertyType,
            storeyCount,
            outdoorCount,
            livingRoomCount,
            kitchenCount,
            bedroomCount,
            bathroomCount,
            powderRoomCount,
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

    const curStep = useMemo(() => steps[step], [steps, step]);

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

    const setPrevStep = useCallback(
        () => setStep((step) => (step > 0 ? step - 1 : step)),
        [setStep]
    );

    const setNextStep = useCallback(() => {
        setStep((step) => (step < steps.length ? step + 1 : step));

        if (step >= steps.length - 1) nprogress.complete();
    }, [step, steps, setStep]);

    const COUNT_GROUP_PROPS = useMemo(
        () =>
            ({
                wrap: 'nowrap',
                gap: 'sm',
            } satisfies GroupProps),
        []
    );

    return (
        <>
            <Container size="sm" className={pricingPageClasses['step-container']}>
                <Stack align="center">
                    <div>
                        <Text c="teal" span>
                            Step {step + 1}
                        </Text>{' '}
                        <Text c="dimmed" span>
                            / {steps.length}
                        </Text>
                    </div>
                    <Text fz="lg" fw={600}>
                        {curStep?.description}
                    </Text>
                </Stack>
                <ScrollArea flex={1}>
                    <SimpleGrid h="100%" cols={{ base: 1, sm: 2 }}>
                        {curStep?.fields.map((field) => {
                            switch (field.type) {
                                case 'select':
                                    return (
                                        <Select
                                            key={field.id}
                                            flex={1}
                                            miw={rem(104)}
                                            color="teal"
                                            placeholder={field.placeholder}
                                            label={field.label}
                                            description={field.description}
                                            defaultValue={field.value}
                                            data={field.options}
                                            onChange={(val) => updateParam(field.fieldName, val)}
                                        />
                                    );
                                case 'count':
                                    return (
                                        <Stack gap={4} key={field.id}>
                                            <Stack flex={3} gap={0}>
                                                <Text size="sm" lh="md" fw={500}>
                                                    {field.label}
                                                </Text>
                                                <Text size="xs" lh={1.2} c="dimmed">
                                                    {field.description}
                                                </Text>
                                            </Stack>
                                            <Group flex={1} {...COUNT_GROUP_PROPS}>
                                                <ActionIcon
                                                    variant="light"
                                                    size="sm"
                                                    radius="md"
                                                    aria-label={`Decrease ${field.fieldName} count`}
                                                    color="teal"
                                                    onClick={() =>
                                                        updateParam(
                                                            field.fieldName,
                                                            Number(field.value) <= field.min
                                                                ? Number(field.value)
                                                                : Number(field.value) - 1
                                                        )
                                                    }
                                                >
                                                    <IconMinus size="1rem" />
                                                </ActionIcon>
                                                <NumberInput
                                                    w={rem(36)}
                                                    hideControls
                                                    value={field.value}
                                                    classNames={{
                                                        input: pricingPageClasses[
                                                            'centered-number-input'
                                                        ],
                                                    }}
                                                />
                                                <ActionIcon
                                                    variant="light"
                                                    size="sm"
                                                    radius="md"
                                                    aria-label={`Increase ${field.fieldName} count`}
                                                    color="teal"
                                                    onClick={() =>
                                                        updateParam(
                                                            field.fieldName,
                                                            Number(field.value) + 1
                                                        )
                                                    }
                                                >
                                                    <IconPlus size="1rem" />
                                                </ActionIcon>
                                            </Group>
                                        </Stack>
                                    );

                                default:
                                    break;
                            }
                        })}
                    </SimpleGrid>
                </ScrollArea>
            </Container>
            <Divider mx="-1rem" mb="1.5rem" />
            <Container size="sm" px={0}>
                <Group mx="0.5rem" pos="relative">
                    <Button
                        size="md"
                        flex={1}
                        color="gray"
                        fz={{ base: 'sm', md: 'md' }}
                        radius="md"
                        variant="outline"
                        onClick={setPrevStep}
                        disabled={step < 1}
                    >
                        Back
                    </Button>
                    <Button
                        size="md"
                        flex={1}
                        color="teal"
                        fz={{ base: 'sm', md: 'md' }}
                        radius="md"
                        onClick={setNextStep}
                        rightSection={step < steps.length - 1 ? <IconArrowRight /> : <IconCheck />}
                    >
                        {step < steps.length - 1 ? 'Next step' : 'Complete'}
                    </Button>
                    <Button
                        size="md"
                        color="teal"
                        variant="light"
                        fz={{ base: 'sm', md: 'md' }}
                        radius="md"
                        className={pricingPageClasses['cost-breakdown-btn']}
                        onClick={open}
                    >
                        A${subtotal}
                    </Button>
                </Group>
            </Container>
        </>
    );
};
