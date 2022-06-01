import { LoadingButton } from '@mui/lab';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import agent from '../../app/api/agent';
import AppRadio from '../../app/components/AppRadio';
import AppTextInput from '../../app/components/AppTextinput';
import { useAppSelector } from '../../app/store/configureStore';

export default function UniversityForm() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = useForm({});
  const { user } = useAppSelector((state) => state.account);
  async function handleSubmitData(data: FieldValues) {
    try {
      if (user) {
        await agent.Admin.createUniversity(data, user.token);
        toast.success('University created!');
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Add University
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <AppTextInput control={control} name="id" label="Course id" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name="nameEn" label="Name En" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name="nameCh" label="Name Ch" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name="city" label="City" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name="link" label="Link" />
          </Grid>

          <Grid item xs={12} sm={3}>
            <AppRadio
              name="isFromDaad"
              label="Is From DAAD"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AppRadio name="isTu9" label="Is TU9" control={control} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AppRadio name="isU15" label="Is U15" control={control} />
          </Grid>

          <Grid item xs={12} sm={3}>
            <AppTextInput
              control={control}
              name="qsRanking"
              type="number"
              label="QS Ranking"
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 3 }}>
          <Button variant="contained" color="inherit">
            Cancel
          </Button>
          <LoadingButton
            loading={isSubmitting}
            type="submit"
            variant="contained"
            color="success"
          >
            Submit
          </LoadingButton>
        </Box>
      </form>
    </Box>
  );
}
