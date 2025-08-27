'use client';

import { useEffect, useRef, useState } from 'react';
import { Button, Textarea, TextInput, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './Form.module.css';

const LS_KEY = 'bookedDatesDemo_v1';

export default function AppointmentForm() {
  const ref = useRef<HTMLFormElement | null>(null);

  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setBookedSlots(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(bookedSlots));
    } catch {}
  }, [bookedSlots]);

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
      appointmentTime: '',
      message: '',
    },
    validate: {
      fullName: (v) => (v.trim().length < 2 ? 'The name is too short' : null),
      email: (v) => (/^\S+@\S+$/.test(v) ? null : 'Incorrect email'),
      preferredService: (v) => (!v ? 'Please select a service' : null),
      appointmentDate: (v) => (!v ? 'Please select a date' : null),
      appointmentTime: (v) => (!v ? 'Please select a time' : null),
      message: (v) => (v.trim().length < 4 ? 'The message is too short' : null),
    },
  });

  const serviceOptions = [
    { value: 'Haarschnitt', label: 'Haarschnitt & Styling' },
    { value: 'Haarfärbung', label: 'Haarfärbung' },
    { value: 'Haarbehandlung', label: 'Haarbehandlung' },
    { value: 'Strähnchen', label: 'Strähnchen' },
    { value: 'Dauerwelle', label: 'Dauerwelle & Locken' },
    { value: 'Beratung', label: 'Beratung' },
  ];

  const timeOptions = [
    { value: '09:00', label: '09:00' },
    { value: '09:30', label: '09:30' },
    { value: '10:00', label: '10:00' },
    { value: '10:30', label: '10:30' },
    { value: '11:00', label: '11:00' },
    { value: '11:30', label: '11:30' },
    { value: '12:00', label: '12:00' },
    { value: '12:30', label: '12:30' },
    { value: '13:00', label: '13:00' },
    { value: '13:30', label: '13:30' },
    { value: '14:00', label: '14:00' },
    { value: '14:30', label: '14:30' },
    { value: '15:00', label: '15:00' },
    { value: '15:30', label: '15:30' },
    { value: '16:00', label: '16:00' },
    { value: '16:30', label: '16:30' },
    { value: '17:00', label: '17:00' },
    { value: '17:30', label: '17:30' },
    { value: '18:00', label: '18:00' },
  ];

  const handleSubmit = async (values: typeof form.values) => {
    setSubmissionStatus({ submitting: true, succeeded: false, error: false });
  
    const { appointmentDate: dateKey, appointmentTime: timeKey } = values;
    if (!dateKey || !timeKey) {
      setSubmissionStatus({ submitting: false, succeeded: false, error: true });
      return;
    }
    const slotKey = `${dateKey} ${timeKey}`;
  
    if (bookedSlots.includes(slotKey)) {
      setSubmissionStatus({ submitting: false, succeeded: false, error: true });
      return;
    }
  
    try {
      await new Promise((r) => setTimeout(r, 300));
  
      setBookedSlots((prev) => Array.from(new Set([...prev, slotKey])));
  
      const res = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.fullName,
          email: values.email,
          service: values.preferredService,
          date: dateKey,
          time: timeKey,
          slot: slotKey,
        }),
      });
  
      if (!res.ok) {
        console.error('Email send failed', await res.json().catch(() => ({})));
      }
  
      setSubmissionStatus({ submitting: false, succeeded: true, error: false });
      form.reset();
    } catch (e) {
      console.error(e);
      setSubmissionStatus({ submitting: false, succeeded: false, error: true });
    }
  };
  


  const formatBookedSlots = () => {
    return bookedSlots.map(slot => {
      const [date, time] = slot.split(' ');
      const formattedDate = new Date(date).toLocaleDateString('de-DE');
      return `${formattedDate} ${time}`;
    });
  };

  return (
    <div className="w-full max-w-[500px] mx-auto sm:p-6 p-0">

      <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)} ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            {...form.getInputProps('fullName')}
            error={form.errors.fullName}
            classNames={{ root: classes.root, label: classes.label, input: classes.input, error: classes.error }}
            label="Vollständiger Name"
            key={form.key('fullName')}
            placeholder="Muzamal Hussain"
            required
          />
          <TextInput
            {...form.getInputProps('email')}
            error={form.errors.email}
            classNames={{ root: classes.root, label: classes.label, input: classes.input, error: classes.error }}
            label="E-Mail-Adresse"
            key={form.key('email')}
            placeholder="info@gmail.com"
            required
          />
        </div>

        <Select
          {...form.getInputProps('preferredService')}
          error={form.errors.preferredService}
          classNames={{ root: classes.root, label: classes.label, input: classes.input, error: classes.error }}
          label="Bevorzugter Service"
          placeholder="Auswählen..."
          data={serviceOptions}
          searchable
          clearable
          required
          mb="md"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className={classes.root}>
            <label className={classes.label}>Termin</label>
            <input
              {...form.getInputProps('appointmentDate')}
              type="date"
              className={`${classes.input} w-full`}
              min={new Date().toISOString().split('T')[0]}
              required
            />
            {form.errors.appointmentDate && <div className={classes.error}>{form.errors.appointmentDate}</div>}
          </div>
          
          <Select
            {...form.getInputProps('appointmentTime')}
            error={form.errors.appointmentTime}
            classNames={{ root: classes.root, label: classes.label, input: classes.input, error: classes.error }}
            label="Uhrzeit"
            placeholder="Auswählen..."
            data={timeOptions}
            searchable
            clearable
            required
            disabled={!form.values.appointmentDate}
          />
        </div>

        <Textarea
          {...form.getInputProps('message')}
          error={form.errors.message}
          classNames={{ root: classes.root, label: classes.label, input: classes.textinput, error: classes.error }}
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
          styles={{
            root: {
              backgroundColor: '#FF6B35',
              width: '100%',
              borderRadius: '16px',
              '&:hover': { backgroundColor: '#e55a2b' },
            },
          }}
        >
          <p>Formular abschicken</p>
        </Button>

        {submissionStatus.succeeded && (
        <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-800 text-center">
          Vielen Dank! ✅ <br />Wir haben den von Ihnen gewählten Termin reserviert.
        </div>
      )}

      {submissionStatus.error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800 text-center">
          Leider ist dieser Termin bereits vergeben. <br /> Wählen Sie bitte ein anderes Datum oder eine andere Uhrzeit.
        </div>
      )}
      </form>
    </div>
  );
}