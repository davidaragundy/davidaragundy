const WORDS_PER_MINUTE = 200;

export const getReadTime = (content: string) =>
  Math.max(
    1,
    Math.round(content.trim().split(/\s+/).length / WORDS_PER_MINUTE),
  );
