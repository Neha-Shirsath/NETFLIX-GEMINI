import { MOVIE_TOKEN } from "./movieToken";

export const NETFLIX_LOGO = "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAQ4TXm1OaapkwYRGseWYrT2HFpAFV7IX9bgV76BxLOD_049HTkgqZ6zq3enQ0gxU1b-868yGZj1I99Ak9oRykNILYsbpT_0d-be9QKbwkD8OfaEdWL-FHZBiORJ9ppzVCM1-mVn63afS.svg";

export const USER_LOGO = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg";

export const MOVIES_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/f0b42cac-9ced-425f-8677-777eadbdbe2f/web/IN-en-20261005-TRIFECTA-perspective_14c6dcd8-c058-4841-a0e5-1d0d70b35836_large.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {accept: 'application/json',
  Authorization: `Bearer ${MOVIE_TOKEN}`}
};

export const IMG_CDN_URL = " https://image.tmdb.org/t/p/w400/"