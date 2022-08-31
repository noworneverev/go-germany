import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import agent from "../../app/api/agent";
import AppRadio from "../../app/components/AppRadio";
import AppSelectList from "../../app/components/AppSelectList";
import AppTextInput from "../../app/components/AppTextinput";
import useCourses from "../../app/hooks/useCourses";
import { Course } from "../../app/models/course";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";

export default function CourseForm() {
  const { courseTypes, institutions, subjects } = useCourses();
  const {
    control,
    reset,
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = useForm({});
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);

  // useEffect(() => {
  //   let course: Course = {
  //     id: ,
  //     university_id: '',
  //   };
  //   if (!isDirty) reset(course);
  // }, [reset, isDirty]);

  async function handleSubmitData(data: FieldValues) {
    try {
      let response: Course;

      if (user) {
        response = await agent.Admin.createCourse(data, user.token);
        // console.log(response);
        // dispatch(setCourse(response));
        toast.success("Course created!");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Add Course
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <AppTextInput control={control} name="id" label="Course id" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AppTextInput
              control={control}
              name="universityId"
              label="University id"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AppSelectList
              items={courseTypes}
              control={control}
              name="courseTypes"
              label="Course Type"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name="nameEn" label="Name En" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput
              control={control}
              name="nameEnShort"
              label="Name En Short"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput control={control} name="nameCh" label="Name Ch" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput
              control={control}
              name="nameChShort"
              label="Name Ch Short"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <AppTextInput
              control={control}
              name="tuitionFees"
              label="Tuition Fees"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AppTextInput
              control={control}
              name="beginning"
              label="Beginning"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AppSelectList
              items={subjects}
              control={control}
              name="subjects"
              label="Subject"
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <AppTextInput control={control} name="daadlink" label="DAAD Link" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AppRadio
              name="isElearning"
              label="Is Elearning"
              control={control}
              defaultValue={false}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AppRadio
              name="isCompleteOnlinePossible"
              label="Is Complete Online Possible"
              control={control}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <AppRadio
              name="isFromDaad"
              label="Is From DAAD"
              control={control}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <AppTextInput
              control={control}
              name="programmeDuration"
              label="Programme Duration"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput
              control={control}
              name="applicationDeadline"
              label="Application Deadline"
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
