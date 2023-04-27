'use client';

import Link from '@/components/Link';
import { FTextField, FormProvider } from '@/components/form';
import { Button, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// const BoxStyle = styled('div')(({ theme }) => ({
//   height: 500,
//   width: 500,
//   margin: 'auto auto',
//   backgroundColor: '#fff',
//   [theme.breakpoints.up('sm')]: {
//     height: 200,
//     width: 200,
//   },
//   [theme.breakpoints.up('md')]: {
//     height: 300,
//     width: 300,
//     backgroundColor: theme.palette.primary.light,
//   },
// }));

interface IFormInputs {
  email: string;
}
const defaultValues: IFormInputs = {
  email: 'tuandd.310797@gmail.com',
};
function About() {
  const methods = useForm<IFormInputs>({ defaultValues });
  const [text, setText] = useState('');

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Stack mt={5}>
        <FormProvider {...methods} onSubmit={handleSubmit(onSubmit)}>
          <FTextField name='email' label='Email' />
        </FormProvider>
      </Stack>
    </Container>
  );
}

export default About;
