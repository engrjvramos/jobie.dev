import { SKILLS_BACKEND, SKILLS_FRONTEND, TOOLS_AND_PLATFORMS } from '@/lib/constants';
import { TSkill } from '@/lib/types';
import { ArrowRight, SquareCode } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export default function SkillsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className="text-muted-foreground hover:text-accent-foreground">
          View my full arsenal <ArrowRight />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="border-input flex max-h-[min(640px,80vh)] flex-col gap-0 p-0 shadow-xl outline-none sm:max-w-xl [&>button:last-child]:top-3.5"
        showCloseButton={false}
      >
        <div className="overflow-y-auto">
          <DialogHeader className="contents space-y-0 text-left">
            <div className="border-input border-b px-6 py-4">
              <DialogTitle className="mb-2 flex flex-row items-center gap-2 text-xl">
                <SquareCode className="text-primary-500" /> My Tech Arsenal
              </DialogTitle>
              <DialogDescription className="text-pretty">
                A comprehensive list of technologies, frameworks, and tools I&apos;ve mastered over the years—powering
                everything I build.
              </DialogDescription>
            </div>
            <DialogDescription asChild>
              <div className="space-y-5 px-4 py-6">
                <SkillSection title="Frontend Technologies" skills={SKILLS_FRONTEND} />
                <SkillSection title="Backend Technologies" skills={SKILLS_BACKEND} />
                <SkillSection title="Tools & Platforms" skills={TOOLS_AND_PLATFORMS} />
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
              <Image src={imageSrc} alt={name} width={0} height={0} sizes="100vw" className="size-5 shrink-0" />
            )}
            <span className="w-full truncate">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
