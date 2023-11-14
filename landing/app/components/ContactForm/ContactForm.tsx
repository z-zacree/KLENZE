'use client';

import { Button, Group, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC } from 'react';

import heroClasses from '../Hero/Hero.module.css';

export const ContactForm: FC = () => {
    // const router = useRouter();

    const form = useForm({
        initialValues: {
            name: '',
            contactNumber: '',
            email: '',
            message: '',
        },

        validate: {
            name: (val) => val.length < 1,
            contactNumber: (val) => val.length < 1,
            email: (val) => val.length < 1,
            message: (val) => val.length < 1,
        },
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        form.onSubmit((formValues) => {
            const values = { ...formValues };

            console.log(values);
        })();
    };

    return (
        <form className={heroClasses.form} onSubmit={handleSubmit}>
            <Group grow>
                <TextInput
                    name="contact-name"
                    label="Name"
                    description="How should we address you"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    name="contact-number"
                    label="Contact Number"
                    description="Your preferred contact number"
                    {...form.getInputProps('contactNumber')}
                />
            </Group>
            <TextInput
                name="email"
                label="Email"
                description="In case we can't get you on the line, we'll use this instead!"
                placeholder="you@xyz.com"
                {...form.getInputProps('email')}
            />
            <Textarea
                name="message"
                label="Message"
                placeholder="Leave us a message and we'll get to you as soon as we can!"
                autosize
                minRows={3}
                maxRows={5}
                {...form.getInputProps('message')}
            />
            <Button type="submit" color="teal">
                Check pricing
            </Button>
        </form>
    );
};
