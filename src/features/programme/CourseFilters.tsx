import {
  Stack,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppAccordion from '../../app/components/AppAccordion';
import AppSelectCheckboxes from '../../app/components/AppSelectCheckboxes';
import CheckboxButtons from '../../app/components/CheckboxButtons';
import useCourses from '../../app/hooks/useCourses';
import { useAppDispatch } from '../../app/store/configureStore';
import CourseSearch from './CourseSearch';
import { setCourseParams } from './programmeSlice';
import { Dispatch, SetStateAction } from 'react';

const labels = {
  '1': 'Bachelor',
  '2': 'Master',
  '3': 'Ph.D.',
  '4': 'Cross-faculty graduate and research school',
  '5': 'Language course',
  '6': 'Short course',
  '56': 'Short course and language course',
  '7': 'Prep course',
  '9': 'Various',
};

export default function CourseFilters() {
  const { courseParams, courseTypes, institutions, subjects, languages } =
    useCourses();
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  return (
    <Stack spacing={2}>
      <Paper sx={{ boxShadow: 2 }}>
        <CourseSearch />
      </Paper>
      <Paper sx={{ boxShadow: 2 }}>
        <AppAccordion
          title={t('course_type')}
          childComp={
            <CheckboxButtons
              items={courseTypes}
              checked={courseParams.courseTypes}
              onChange={(items: string[]) => {
                dispatch(setCourseParams({ courseTypes: items }));
              }}
              labels={labels}
            />
          }
        />
      </Paper>
      <Paper sx={{ boxShadow: 2 }}>
        <AppAccordion
          title={t('course_language')}
          childComp={
            <CheckboxButtons
              items={languages}
              checked={courseParams.languages}
              onChange={(items: string[]) =>
                dispatch(setCourseParams({ languages: items }))
              }
            />
          }
        />
      </Paper>
      <Paper sx={{ boxShadow: 2 }}>
        <AppSelectCheckboxes
          items={subjects}
          checked={courseParams.subjects}
          onChange={(items: string[]) =>
            dispatch(setCourseParams({ subjects: items }))
          }
          title={t('subject')}
          placeholder={t('subject')}
        />
      </Paper>
      <Paper sx={{ boxShadow: 2 }}>
        <AppSelectCheckboxes
          items={institutions}
          checked={courseParams.institutions}
          onChange={(items: string[]) =>
            dispatch(setCourseParams({ institutions: items }))
          }
          title={t('institution')}
          placeholder={t('institution')}
        />
      </Paper>

      <Paper sx={{ boxShadow: 2 }}>
        <AppAccordion
          title={t('istu9_u15')}
          childComp={
            <>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={courseParams.isTu9}
                      onClick={() => {
                        dispatch(
                          setCourseParams({ isTu9: !courseParams.isTu9 })
                        );
                      }}
                    />
                  }
                  label="TU9"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={courseParams.isU15}
                      onClick={() => {
                        dispatch(
                          setCourseParams({ isU15: !courseParams.isU15 })
                        );
                      }}
                    />
                  }
                  label="U15"
                />
              </FormGroup>
            </>
          }
        />
      </Paper>
      <Paper sx={{ paddingLeft: 2, boxShadow: 2, py: 0.6 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={courseParams.hasArticles}
                onClick={() => {
                  dispatch(
                    setCourseParams({
                      hasArticles: !courseParams.hasArticles,
                    })
                  );
                }}
              />
            }
            label={t('has_articles')}
          />
        </FormGroup>
        {/* <CheckboxButtons
                items={courseTypes}
                checked={courseParams.courseTypes}
                onChange={(items: string[]) =>
                  dispatch(setCourseParams({ courseTypes: items }))
                }
                labels={labels}
              /> */}
      </Paper>
      <Paper sx={{ paddingLeft: 2, boxShadow: 2, py: 0.6 }}>
        <Typography color="text.secondary" gutterBottom sx={{ mt: 1 }}>
          {t('performance')}
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={courseParams.hideLanguageArticle}
                onClick={() => {
                  dispatch(
                    setCourseParams({
                      hideLanguageArticle: !courseParams.hideLanguageArticle,
                    })
                  );
                }}
              />
            }
            label={t('hide_language_article')}
          />
        </FormGroup>
      </Paper>
    </Stack>
  );
}
