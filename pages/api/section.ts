import type { NextApiRequest, NextApiResponse } from "next";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const allData = {
  sectionOne: {
    id: 1,
    header: "Foundation",
    items: [
      { id: "office", name: "Setup virtual office" },
      { id: "mission", name: "Set mission & vision" },
      { id: "businessName", name: "Select business name" },
      { id: "domain", name: "Buy domains" },
    ],
  },
  sectionTwo: {
    id: 2,
    header: "Discovery",
    items: [
      { id: "roadmap", name: "Create roadmap" },
      { id: "competitors", name: "Competitor analysis" },
    ],
  },
  sectionTree: {
    id: 3,
    header: "Delivery",
    items: [
      { id: "website", name: "Release marketing website" },
      { id: "mvp", name: "Release MVP" },
    ],
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(allData);
}
