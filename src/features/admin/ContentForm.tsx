import { LoadingButton } from '@mui/lab';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useForm, FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';
import agent from '../../app/api/agent';
import AppTextInput from '../../app/components/AppTextinput';
import { useAppSelector } from '../../app/store/configureStore';

export default function ContentForm() {
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
        await agent.Admin.createContent(data, user.token);
        toast.success('Content created!');
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
            <AppTextInput control={control} name="id" label="Content id" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <AppTextInput control={control} name="link" label="Link" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <AppTextInput control={control} name="title" label="Title" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AppTextInput control={control} name="author" label="Author" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AppTextInput
              control={control}
              name="publishedAt"
              label="Published Date"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AppTextInput control={control} name="source" label="Source" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AppTextInput
              control={control}
              name="authorBsSchool"
              label="BS School"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AppTextInput
              control={control}
              name="authorBsSchoolShort"
              label="BS School Short"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AppTextInput
              control={control}
              name="authorBsDepartment"
              label="BS Department"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AppTextInput control={control} name="authorBsGpa" label="BS GPA" />
          </Grid>

          <Grid item xs={12} sm={3}>
            <AppTextInput
              control={control}
              name="authorMsSchool"
              label="MS School"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AppTextInput
              control={control}
              name="authorMsSchoolShort"
              label="MS School Short"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AppTextInput
              control={control}
              name="authorMsDepartment"
              label="MS Department"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AppTextInput control={control} name="authorMsGpa" label="MS GPA" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name="authorToefl" label="TOEFL" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name="authorIelts" label="IELTS" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name="authorGre" label="GRE" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name="authorGmat" label="GMAT" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput
              control={control}
              name="authorTestdaf"
              label="TestDaF"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput
              control={control}
              name="authorGoethe"
              label="Goethe"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <AppTextInput
              control={control}
              name="courseType"
              label="Course Type"
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
