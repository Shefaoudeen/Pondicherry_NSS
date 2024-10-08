import { OFFICERS_DETAILS } from "./WhosWho";
import { UNIT_DETAILS } from "./Directory";

const NAV_ITEMS = [
  { title: "HOME", path: "/" },
  {
    title: "ORGANISATION",
    path: "/aboutUs",
    subItems: [
      { title: "ABOUT US", path: "/aboutUs" },
      { title: "OBJECTIVES", path: "/objectives" },
      { title: "WHO'S WHO", path: "/whoswho" },
      { title: "NSS DIRECTORY", path: "/directory" },
      { title: "REGULAR ACTIVITIES", path: "/regActivities" },
      { title: "SPECIAL CAMP PROGRAMME", path: "/specialCamp" },
      { title: "AWARDS AND AWARDEES", path: "/awards" },
    ],
  },

  { title: "SUGGESTIONS", path: "/suggestion" },
  { title: "CIRCULAR", path: "/circulars" },
  { title: "CO-ORDINATORS", path: "/coordinators" },
  { title: "NSS VOLUNTEERS", path: "/volunteers" },
  { title: "NEWS LETTERS", path: "/news" },
  { title: "CONTACT", path: "/contact" },
];

export { NAV_ITEMS, OFFICERS_DETAILS, UNIT_DETAILS };
