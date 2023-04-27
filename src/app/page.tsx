'use client';

import Link from 'next/link';
import { Alert, AlertTitle, Button, Box, Typography } from '@/components/material';

export default function Home() {
  // const theme = useTheme
  return (
    <div>
      {/* <Box sx={{ height: 500 }}>
        <Typography color={(theme) => theme.palette.primary.light}>Tuan</Typography>
      </Box> */}
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        This is an error alert with title — check it out!
      </Alert>
      <Alert severity='success'>
        <AlertTitle>Success</AlertTitle>
        This is a success alert with title — check it out!
      </Alert>
      <Link href='/about'>about</Link>
    </div>
  );
}
