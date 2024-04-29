'use client';

import { PricingFieldDetails } from '@/models/Pricing';
import {
    ActionIcon,
    Button,
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
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback, useMemo, useState } from 'react';

import pricingPageClasses from '../../page.module.css';

interface ComponentProps {
    onPrevStep: Function;
    onFinishStep: Function;
}

export const HouseSupplies: FC<ComponentProps> = ({ onPrevStep, onFinishStep }) => {
    const [innerStep, setInnerStep] = useState(0);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Step 1
    const linenDoubleCount = searchParams.get('linenDoubleCount');
    const linenSingleCount = searchParams.get('linenSingleCount');

    // Step 2
    const completeBathroomSet = searchParams.get('completeBathroomSet');
    const showerPack = searchParams.get('showerPack');
    const bathroomPack = searchParams.get('bathroomPack');
    const towelPack = searchParams.get('towelPack');

    // Step 3
    const completeKitchenSet = searchParams.get('completeKitchenSet');
    const kitchenPack = searchParams.get('kitchenPack');
    const beveragesPack = searchParams.get('beveragesPack');

    const fieldGroups: PricingFieldDetails = useMemo(
        () => [
            {
                step: 0,
                type: 'count',
                title: 'Linen - Queen/King',
                subtitle: `3x sheets Queen linen, 4x Pillowcases, 2x Bath Towels`,
                fieldName: 'linenDoubleCount',
                min: 0,
                value: linenDoubleCount ?? '0',
            },
            {
                step: 0,
                type: 'count',
                title: 'Linen - Single',
                subtitle: `3x sheets Single linen, 2x Pillowcases, 1x Bath Towel`,
                fieldName: 'linenSingleCount',
                min: 0,
                value: linenSingleCount ?? '0',
            },
            {
                step: 1,
                type: 'count',
                title: 'Complete Bathroom Set',
                subtitle: `Shower pack + Bathroom pack`,
                fieldName: 'completeBathroomSet',
                min: 0,
                value: completeBathroomSet ?? '0',
            },
            {
                step: 1,
                type: 'count',
                title: 'Shower pack',
                subtitle: `1x bath mat, 1x Hand towel`,
                fieldName: 'showerPack',
                min: 0,
                value: showerPack ?? '0',
            },
            {
                step: 1,
                type: 'count',
                title: 'Bathroom pack',
                subtitle: `1x Shampoo, 1x Conditioner, 1x Body Wash, 3x Toilet Paper rolls`,
                fieldName: 'bathroomPack',
                min: 0,
                value: bathroomPack ?? '0',
            },
            {
                step: 1,
                type: 'count',
                title: 'Towel pack',
                subtitle: `2x Bath Towel`,
                fieldName: 'towelPack',
                min: 0,
                value: towelPack ?? '0',
            },
            {
                step: 2,
                type: 'count',
                title: 'Complete Kitchen set',
                subtitle: `Kitchen pack + Beverages pack`,
                fieldName: 'completeKitchenSet',
                min: 0,
                value: completeKitchenSet ?? '0',
            },
            {
                step: 2,
                type: 'count',
                title: 'Kitchen pack',
                subtitle: `1x Sponge, 1x Wipe, 1x Laundry Powder, 1x Dishwashing Liquid, 3x Bin Liners`,
                fieldName: 'kitchenPack',
                min: 0,
                value: kitchenPack ?? '0',
            },
            {
                step: 2,
                type: 'count',
                title: 'Beverages pack',
                subtitle: `1x Milk, 2x Tea, 2x Coffee, 2x Sugar`,
                fieldName: 'beveragesPack',
                min: 0,
                value: beveragesPack ?? '0',
            },
        ],
        [
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

    const prevStep = useCallback(() => {
        if (innerStep == 0) {
            onPrevStep();
        } else setInnerStep((current) => current - 1);
    }, [innerStep, setInnerStep]);

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
