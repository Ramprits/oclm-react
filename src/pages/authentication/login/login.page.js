import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Controller, useForm } from 'react-hook-form';

import { useStyles } from './components/login.styles';

export default function LoginPage(props) {
  const classes = useStyles();
  const { handleSubmit, control } = useForm({
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const content = {
    brand: {
      image: 'mui-assets/img/logo-pied-piper-icon.png',
      width: 100
    },
    '02_header': 'Sign in',
    '02_primary-action': 'Sign in',
    '02_secondary-action': "Don't have an account?",
    '02_tertiary-action': 'Forgot password?',
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img
        src={content.brand.image}
        alt=""
        width={content.brand.width}
      />
    );
  } else {
    brand = content.brand.text || '';
  }

  const onSubmit = data => console.log(data);

  return (
    <Container maxWidth="xs">
      <Box pt={8} pb={10}>
        <Box mb={3} textAlign="center">
          <Link
            href="#"
            variant="h4"
            color="inherit"
            underline="none"
          >
            {brand}
          </Link>
          <Typography variant="h5" component="h2">
            {content['02_header']}
          </Typography>
        </Box>
        <Box>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="Email"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="password"
                      placeholder="Password"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Box my={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                {content['02_primary-action']}
              </Button>
            </Box>
            <Grid container spacing={2} className={classes.actions}>
              <Grid item xs={12} sm={6}>
                <Link href="#" variant="body2">
                  {content['02_secondary-action']}
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classes.tertiaryAction}
              >
                <Link href="#" variant="body2">
                  {content['02_tertiary-action']}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
