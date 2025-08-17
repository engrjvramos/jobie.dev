import { SKILLS_BACKEND, SKILLS_CLOUD_DEVOPS, SKILLS_DATABASE_ORM, SKILLS_FRONTEND } from '@/lib/constants';
import { TSkill } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Code2 } from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { HoverBorderGradient } from './ui/hover-border-gradient';

export default function SkillsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <HoverBorderGradient
          containerClassName="rounded-md"
          as="button"
          className="bg-primary flex cursor-pointer items-center gap-2 text-sm text-white"
        >
          My Arsenal
          <Code2 className="size-4" />
        </HoverBorderGradient>
      </DialogTrigger>
      <DialogContent
        className="border-input flex max-h-[min(640px,80vh)] flex-col gap-0 p-0 shadow-xl outline-none sm:max-w-xl [&>button:last-child]:top-3.5"
        showCloseButton={false}
      >
        <div className="overflow-y-auto">
          <DialogHeader className="contents space-y-0 text-left">
            <div className="border-input border-b px-6 py-4">
              <DialogTitle className="mb-2 flex flex-row items-center gap-2 text-xl">My Tech Arsenal</DialogTitle>
              <DialogDescription className="text-pretty">
                A comprehensive list of technologies, frameworks, and tools I&apos;ve mastered over the years—powering
                everything I build.
              </DialogDescription>
            </div>
            <DialogDescription asChild>
              <div className="space-y-5 px-4 py-6">
                <SkillSection title="Frontend" skills={SKILLS_FRONTEND} />
                <SkillSection title="Backend" skills={SKILLS_BACKEND} />
                <SkillSection title="Database/ORM" skills={SKILLS_DATABASE_ORM} />
                <SkillSection title="Cloud/DevOps" skills={SKILLS_CLOUD_DEVOPS} />
              </div>
            </DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
}

type SkillSectionProps = {
  title: string;
  skills: TSkill[];
};

function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div>
      <h2 className="text-foreground relative mb-2 font-medium">
        <strong>{title}</strong>
      </h2>
      {/* <hr className="border-input my-2" /> */}
      <ul className="border-input grid grid-cols-2 gap-2 sm:grid-cols-3">
        {skills.map(({ Icon, name, imageSrc }) => (
          <li
            key={name}
            className="group hover:bg-accent flex items-center gap-2 truncate rounded-md p-2 text-sm transition-colors"
          >
            {Icon && <Icon className="inline-block size-5 shrink-0" />}
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={name}
                width={0}
                height={0}
                sizes="100vw"
                className={cn('size-5 shrink-0', name === 'Jotai' && 'rounded bg-white p-0.5')}
              />
            )}
            <span className="w-full truncate">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
