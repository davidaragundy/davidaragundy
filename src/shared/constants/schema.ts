import {
  AUTHOR_NAME,
  AUTHOR_USERNAME,
  AVATAR_URL,
  BASE_URL,
  GITHUB_URL,
  SITE_DESCRIPTION,
  X_URL,
} from "@/shared/constants/app";

export const PERSON_ID = `${BASE_URL}/#person`;

export const WEBSITE_ID = `${BASE_URL}/#website`;

export const PERSON_SCHEMA = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: AUTHOR_NAME,
  alternateName: AUTHOR_USERNAME,
  url: BASE_URL,
  image: `${BASE_URL}${AVATAR_URL}`,
  description: SITE_DESCRIPTION,
  sameAs: [GITHUB_URL, X_URL],
};

export const PERSON_REFERENCE = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: AUTHOR_NAME,
  url: BASE_URL,
};
