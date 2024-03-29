import { TextField, InputAdornment, Tooltip } from "@mui/material";
import { debounce } from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setArticleParams } from "./articleSlice";
import SearchIcon from "@mui/icons-material/Search";
import ReactGA from "react-ga4";

export default function ArticleSearch() {
  const { articleParams } = useAppSelector((state) => state.article);
  const [searchTerm, setSearchTerm] = useState(articleParams.searchTerm);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const debouncedSearch = debounce((event: any) => {
    dispatch(setArticleParams({ searchTerm: event.target.value }));
    if (
      !window.location.href.includes("localhost") &&
      process.env.REACT_APP_MEASUREMENT_ID
    ) {
      ReactGA.event({
        category: "search",
        action: `Search article: ${event.target.value}`,
      });
    }
  }, 1000);

  return (
    <Tooltip title={t("search_article_helpertext")} arrow placement="right">
      <TextField
        label={t("search_programmes")}
        variant="outlined"
        fullWidth
        value={searchTerm || ""}
        onChange={(event: any) => {
          setSearchTerm(event.target.value);
          debouncedSearch(event);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Tooltip>
  );
}
