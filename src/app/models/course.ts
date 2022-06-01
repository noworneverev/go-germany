import { Article } from './article';

export interface Course {
  id: number;
  university_id: string;
  course_type: string;
  name_en: string;
  name_en_short: string;
  tuition_fees: string;
  beginning: string;
  subject: string;
  daadlink: string;
  is_elearning: boolean;
  application_deadline: string;
  is_complete_online_possible: boolean;
  programme_duration: string;
  is_from_daad: boolean;
  university_name_en: string;
  university_name_ch: string;
  city: string;
  is_tu9: boolean;
  is_u15: boolean;
  qs_ranking: number;
  university_link: string;
  languages: string[];
  articles: Article[];
}

export interface CourseParams {
  pageNumber: number;
  pageSize: number;
  searchTerm?: string;
  courseTypes: string[];
  languages: string[];
  subjects: string[];
  institutions: string[];
  isTu9?: boolean;
  isU15?: boolean;
  hasArticles?: boolean;
  hideLanguageArticle?: boolean;
  // orderBy: string;
}
