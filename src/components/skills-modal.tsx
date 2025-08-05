import { SKILLS_BACKEND, SKILLS_FRONTEND, TOOLS_AND_PLATFORMS } from '@/lib/constants';
import { View } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export default function SkillsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className="text-muted-foreground hover:text-accent-foreground">
          View my full arsenal <View />
        </Button>
      </DialogTrigger>
      <DialogContent className="border-input shadow-xl outline-none sm:max-w-xl">
        <DialogHeader className="py-3">
          <DialogTitle className="text-xl">My Tech Arsenal</DialogTitle>
          <DialogDescription className="text-pretty">
            A comprehensive list of technologies, frameworks, and tools I’ve mastered over the years—powering everything
            I build.
          </DialogDescription>
        </DialogHeader>
        <section className="space-y-5">
          <div className="">
            <h2 className="font-medium">Frontend Technologies</h2>
            <hr className="border-input my-2" />
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {SKILLS_FRONTEND.map(({ Icon, name }) => (
                <li
                  key={name}
                  className="group hover:bg-accent flex items-center gap-2 truncate rounded-md border border-none p-2 text-sm shadow-2xl transition-colors"
                >
                  <Icon className="inline-block size-5 shrink-0" />
                  <span className="w-full truncate">{name}</span>
                </li>
              ))}
              <li className="group hover:bg-accent flex items-center gap-2 truncate rounded-md border border-none p-2 text-sm shadow-2xl transition-colors">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg"
                  alt="zustand"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-5 shrink-0"
                />
                <span className="w-full truncate">Zustand</span>
              </li>
              <li className="group hover:bg-accent flex items-center gap-2 truncate rounded-md border border-none p-2 text-sm shadow-2xl transition-colors">
                <Image
                  src="/images/tanstack.svg"
                  alt="zustand"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-5 shrink-0"
                />
                <span className="w-full truncate">Tanstack Query</span>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-2 font-medium">Backend Technologies</h2>
            <hr className="border-input my-2" />
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {SKILLS_BACKEND.map(({ Icon, name }) => (
                <li
                  key={name}
                  className="group hover:bg-accent flex items-center gap-2 truncate rounded-md border border-none p-2 text-sm shadow-2xl transition-colors"
                >
                  <Icon className="inline-block size-5 shrink-0" />
                  <span className="w-full truncate">{name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-medium">Tools and Platforms</h2>
            <hr className="border-input my-2" />
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {TOOLS_AND_PLATFORMS.map(({ Icon, name }) => (
                <li
                  key={name}
                  className="group hover:bg-accent flex items-center gap-2 truncate rounded-md border border-none p-2 text-sm shadow-2xl transition-colors"
                >
                  <Icon className="inline-block size-5 shrink-0" />
                  <span className="w-full truncate">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
