'use client';

import { FC } from 'react';

import { Button, Group, NumberInput, Radio, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

import heroClasses from '../Hero/Hero.module.css';

export const CTAForm: FC = () => {
    const form = useForm({
        initialValues: {
            cleanType: 'house',
            bedroomCount: 1,
            bathroomCount: 1,
            storeyCount: 1,
            propertyType: 'apartment',
        },

        validate: {
            bedroomCount: (val) => val < 0,
            bathroomCount: (val) => val < 0,
            storeyCount: (val) => val < 1,
        },
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const values = { ...form.values };

        if (values.propertyType === 'apartment') values.storeyCount = 1;

        console.log(values);
    };

    return (
        <form className={heroClasses.form} onSubmit={handleSubmit}>
            <Text fw="bold" fz="xl">
                Say Goodbye to any mess!
            </Text>
            <Radio.Group
                name="clean-type"
                label="What type of cleaning do you need?"
                {...form.getInputProps('cleanType')}
            >
                <Group mt="xs">
                    <Radio color="teal" value="house" label="House Clean" />
                    <Radio color="teal" value="lease" label="End of Lease" />
                    <Radio color="teal" value="deep" label="Deep Clean" />
                </Group>
            </Radio.Group>
            <Group grow>
                <NumberInput
                    min={0}
                    defaultValue={1}
                    name="bedroom-count"
                    label="Bedrooms (s)"
                    {...form.getInputProps('bedroomCount')}
                />
                <NumberInput
                    min={0}
                    defaultValue={1}
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
                    <Radio color="teal" value="apartment" label="Apartment" />
                    <Radio color="teal" value="house" label="House" />
                    <Radio color="teal" value="others" label="Others" />
                </Group>
            </Radio.Group>
            {form.values.propertyType !== 'apartment' ? (
                <NumberInput
                    min={1}
                    defaultValue={1}
                    name="storey-count"
                    label="Number of Stories"
                    {...form.getInputProps('storeyCount')}
                />
            ) : undefined}
            <Button type="submit" color="teal">
                Book now!
            </Button>
        </form>
    );
};
