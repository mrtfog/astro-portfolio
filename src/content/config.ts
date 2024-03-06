import { defineCollection, z } from "astro:content";

const heroCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    firstOccupation: z.string(),
    secondOccupation: z.string(),
    keepScrolling: z.string(),
    myTimezone: z.string(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    sectionTitle: z.string(),
    sectionDescription: z.string(),
    projects: z.array(
      z.object({
        projectTitle: z.string(),
        projectDescription: z.string(),
        projectImage: z.string(),
        projectDeployUrl: z.string(),
        projectDeployBtn: z.string(),
        projectMoreInfoBtn: z.string(),
      })
    ),
  }),
});

const skillsCollection = defineCollection({
  schema: z.object({
    sectionTitle: z.string(),
    sectionDescription: z.string(),
    jobs: z.array(
      z.object({
        jobTitle: z.string(),
        jobDescription: z.string(),
        jobCompany: z.string(),
        jobDuration: z.string(),
      })
    ),
    skills: z.object({
      frontend: z.array(
        z.object({
          icon: z.string(),
          techName: z.string(),
          techDescription: z.string(),
          techUrl: z.string(),
        })
      ),
      backend: z.array(
        z.object({
          icon: z.string(),
          techName: z.string(),
          techDescription: z.string(),
          techUrl: z.string(),
        })
      ),
      otherSkills: z.array(
        z.object({
          icon: z.string(),
          techName: z.string(),
          techDescription: z.string(),
          techUrl: z.string(),
        })
      ),
    }),
  }),
});

const contactCollection = defineCollection({
  schema: z.object({
    sectionTitle: z.string(),
    sectionDescription: z.string(),
    emailHighlightedWord: z.string(),
    linkedInHighlightedWord: z.string(),
  }),
});

export const collections = {
  hero: heroCollection,
  projects: projectsCollection,
  skills: skillsCollection,
  contact: contactCollection,
};
