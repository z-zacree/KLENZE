'use client';

import { FC } from 'react';

import { Button, Flex, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import contactClasses from '../Contact/Contact.module.css';

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
        <form className={contactClasses.form} onSubmit={handleSubmit}>
            <Flex gap="md" direction={{ base: 'column', sm: 'row' }}>
                <TextInput
                    name="contact-name"
                    label="Name"
                    description="How should we address you"
                    style={{ flex: 1 }}
                    {...form.getInputProps('name')}
                />
                <TextInput
                    name="contact-number"
                    label="Contact Number"
                    description="Your preferred contact number"
                    style={{ flex: 1 }}
                    {...form.getInputProps('contactNumber')}
                />
            </Flex>
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
                Send message
            </Button>
        </form>
    );
};
