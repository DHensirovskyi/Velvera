'use client';

import { useRef, useState } from 'react';
import { Button, Textarea, TextInput, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './Form.module.css';

export default function AppointmentForm() {
  const ref = useRef(null);

  const [submissionStatus, setSubmissionStatus] = useState({
    submitting: false,
    succeeded: false,
    error: false,
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { 
      fullName: '', 
      email: '', 
      preferredService: '', 
      appointmentDate: '',
      message: '' 
    },
    validate: {
      fullName: (v) => (v.trim().length < 2 ? 'The name is too short' : null),
      email: (v) => (/^\S+@\S+$/.test(v) ? null : 'Incorrect email'),
      preferredService: (v) => (!v ? 'Please select a service' : null),
      appointmentDate: (v) => (!v ? 'Please select a date' : null),
      message: (v) => (v.trim().length < 4 ? 'The message is too short' : null),
    },
  });

  const serviceOptions = [
  { value: 'haircut', label: 'Haarschnitt & Styling' },
  { value: 'coloring', label: 'Haarfärbung' },
  { value: 'treatment', label: 'Haarbehandlung' },
  { value: 'highlights', label: 'Strähnchen' },
  { value: 'perm', label: 'Dauerwelle & Locken' },
  { value: 'consultation', label: 'Beratung' },
  ];

  const handleSubmit = async (values: typeof form.values) => {
    setSubmissionStatus({ submitting: true, succeeded: false, error: false });
    try {
      const formattedValues = {
        ...values,
        appointmentDate: values.appointmentDate,
      };

      const response = await fetch('https://formspree.io/f/xqalrokg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedValues),
      });

      if (response.ok) {
        setSubmissionStatus({ submitting: false, succeeded: true, error: false });
        form.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (e) {
      console.error('Failed to submit the form:', e);
      setSubmissionStatus({ submitting: false, succeeded: false, error: true });
    }
  };

  if (submissionStatus.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p style={{ color: '#FF6A00', fontWeight: 'bold', textAlign: 'center', fontSize: '1.25rem' }}>
          Vielen Dank! Ihr Terminwunsch wurde gesendet. Wir melden uns bald bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[500px] mx-auto sm:p-6 p-0">
      <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)} ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            {...form.getInputProps('fullName')}
            error={form.errors.fullName}
            classNames={{ 
              root: classes.root, 
              label: classes.label, 
              input: classes.input, 
              error: classes.error 
            }}
            label="Vollständiger Name"
            key={form.key('fullName')}
            placeholder="Muzamal Hussain"
            required
          />

          <TextInput
            {...form.getInputProps('email')}
            error={form.errors.email}
            classNames={{ 
              root: classes.root, 
              label: classes.label, 
              input: classes.input, 
              error: classes.error 
            }}
            label="E-Mail-Adresse"
            key={form.key('email')}
            placeholder="info@gmail.com"
            required
          />
        </div>

        <Select
          {...form.getInputProps('preferredService')}
          error={form.errors.preferredService}
          classNames={{ 
            root: classes.root, 
            label: classes.label, 
            input: classes.input, 
            error: classes.error 
          }}
          label="Bevorzugter Service"
          placeholder="Auswählen..."
          data={serviceOptions}
          searchable
          clearable
          required
          mb="md"
        />

        <div className="mb-4">
          <label className={classes.label}>Termin</label>
          <input
            {...form.getInputProps('appointmentDate')}
            type="date"
            className={`${classes.input} w-full`}
            min={new Date().toISOString().split('T')[0]}
            required
          />
          {form.errors.appointmentDate && (
            <div className={classes.error}>{form.errors.appointmentDate}</div>
          )}
        </div>

        <Textarea
          {...form.getInputProps('message')}
          error={form.errors.message}
          classNames={{ 
            root: classes.root, 
            label: classes.label, 
            input: classes.textinput, 
            error: classes.error 
          }}
          label="Nachricht"
          placeholder="Nachricht oder Sonderwünsche"
          minRows={4}
          required
          mb="md"
        />

        <Button
          className="w-full py-2 transition duration-300 hover:scale-[0.99] bg-[#FF6B35] hover:bg-[#e55a2b]"
          type="submit"
          loading={submissionStatus.submitting}
          size="md"
          styles={(theme) => ({
            root: {
              backgroundColor: '#FF6B35',
              width: '100%',
              borderRadius: '16px',
              '&:hover': {
                backgroundColor: '#e55a2b',
              },
            },
          })}
        >
          Formular abschicken
        </Button>

        {submissionStatus.error && (
          <p style={{ color: 'red', fontSize: '1rem', marginTop: '1rem', textAlign: 'center' }}>
            Fehler beim Senden. Bitte versuchen Sie es später erneut.
          </p>
        )}
      </form>
    </div>
  );
}