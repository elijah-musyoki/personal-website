export interface Project {
  period: string;
  title: string;
  summary: string;
  videoUrl: string;
  repoHref: string;
}

export const projects: Project[] = [
  {
    period: '2024 - Present',
    title: 'Project 1',
    summary:
      'Short placeholder summary for the first project. Replace this with the real problem, outcome, and context later.',
    videoUrl: 'https://www.youtube.com/watch?v=49lY0HqqUVc',
    repoHref: '#',
  },
  {
    period: '2024 - Present',
    title: 'Project 2',
    summary:
      'Short placeholder summary for the second project. Keep this section brief for now and refine it over time.',
    videoUrl: 'https://www.youtube.com/watch?v=49lY0HqqUVc',
    repoHref: '#',
  },
  {
    period: '2024 - Present',
    title: 'Project 3',
    summary:
      'Short placeholder summary for the third project. Use this slot for one of the workflows you want to highlight.',
    videoUrl: 'https://www.youtube.com/watch?v=49lY0HqqUVc',
    repoHref: '#',
  },
];
