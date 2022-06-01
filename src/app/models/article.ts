import { Course } from './course';

export interface Article {
  id: number;
  title: string;
  author: string;
  link: string;
  published_at: Date;
  source: string;
  author_bs_school: string;
  author_bs_school_short: string;
  author_bs_department: string;
  author_bs_gpa: string;
  author_ms_school: string;
  author_ms_school_short: string;
  author_ms_department: string;
  author_ms_gpa: string;
  author_toefl: string;
  author_ielts: string;
  author_gre: string;
  author_gmat: string;
  author_testdaf: string;
  author_goethe: string;
  course_type: string;
  result: string;
  is_decision: boolean;
  courses: { course: Course; result: string; is_decision: boolean }[];
}

export interface ArticleParams {
  pageNumber: number;
  pageSize: number;
  searchTerm?: string;
  sources: string[];
  bsSchools: string[];
  bsDepartments: string[];
  msSchools: string[];
  msDepartments: string[];
  courseType: string;
  hideApplication?: boolean;
}
