import { LoadingButton } from '@mui/lab';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import agent from '../../app/api/agent';
import AppRadio from '../../app/components/AppRadio';
import AppTextInput from '../../app/components/AppTextinput';
import { useAppSelector } from '../../app/store/configureStore';

export default function ArticleForm() {
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
        await agent.Admin.createArticle(data, user.token);
        toast.success('Article created!');
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Add Article
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <AppTextInput control={control} name="id" label="Article id" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <AppTextInput control={control} name="courseId" label="Course id" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <AppTextInput control={control} name="result" label="Result" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <AppRadio name="isDecision" label="Is Decision" control={control} />
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
