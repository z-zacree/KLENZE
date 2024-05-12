'use client';

import { useRouter } from 'next/navigation';
import { FC, SyntheticEvent } from 'react';

import { BasicPricingInfo } from '@/models/Pricing';
import { Button, Group, NumberInput, Radio, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

import heroClasses from '../Hero/Hero.module.css';

export const CTAForm: FC = () => {
    const router = useRouter();

    const form = useForm<BasicPricingInfo>({
        initialValues: {
            propertyType: 'APARTMENT',
            storeyCount: 1,
            bedroomCount: 1,
            bathroomCount: 1,
        },

        validate: {
            propertyType: (val) => !val || val.length < 0,
            storeyCount: (val) => !val || val < 1,
            bedroomCount: (val) => !val || val < 0,
            bathroomCount: (val) => !val || val < 0,
        },
    });

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        form.onSubmit((formValues) => {
            const values = { ...formValues };

            if (values.propertyType === 'APARTMENT') values.storeyCount = 1;

            const href = `/pricing?${Object.entries(values)
                .map(([key, value]) => `${key}=${value}`)
                .join('&')}`;

            router.push(href);
        })();
    };

    return (
        <form className={heroClasses.form} onSubmit={handleSubmit}>
            <Text fw="bold" fz="xl">
                Say Goodbye to any mess!
            </Text>
            <Group grow>
                <NumberInput
                    min={0}
                    placeholder="Number of bedrooms"
                    defaultValue={1}
                    name="bedroom-count"
                    label="Bedrooms (s)"
                    {...form.getInputProps('bedroomCount')}
                />
                <NumberInput
                    min={0}
                    defaultValue={1}
                    placeholder="Number of bathrooms"
                    name="bathroom-count"
                    label="Bathroom (s)"
                    {...form.getInputProps('bathroomCount')}
                />
            </Group>
            <Radio.Group
                name="property-type"
                label="Property type"
                {...form.getInputProps('propertyType')}
            >
                <Group mt="xs">
                    <Radio color="teal" value="APARTMENT" label="Apartment" />
                    <Radio color="teal" value="HOUSE" label="House" />
                    <Radio color="teal" value="OTHERS" label="Others" />
                </Group>
            </Radio.Group>
            {form.values.propertyType !== 'APARTMENT' ? (
                <NumberInput
                    min={1}
                    defaultValue={1}
                    name="storey-count"
                    label="Number of Stories"
                    {...form.getInputProps('storeyCount')}
                />
            ) : undefined}
            <Button type="submit" color="teal">
                Check pricing
            </Button>
        </form>
    );
};
