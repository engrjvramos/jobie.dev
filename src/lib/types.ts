export type TSkill = {
  Icon?: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  imageSrc?: string;
  name: string;
};

export type TCareerItem = {
  id: number;
  date: string;
  title: string;
  position: string;
  details: string[];
  description: string;
  techStack: string[];
};
