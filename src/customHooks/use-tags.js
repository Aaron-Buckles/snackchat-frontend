import { useState, useEffect } from "react";
import tagService from "../services/tagService";

export const useTags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      setTags(await tagService.getAllTags());
    };
    fetchTags();
  }, []);

  return tags;
};
