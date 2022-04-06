const MAX_BODY_PREVIEW = 500;
const TRAILING_THING = "...";

export const getPostBodyPreview = (body: string) =>
  body.length > MAX_BODY_PREVIEW
    ? body.substring(0, MAX_BODY_PREVIEW - TRAILING_THING.length) +
      TRAILING_THING
    : body;
