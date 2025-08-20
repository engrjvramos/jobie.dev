'use client';

import { ChevronDown, ExternalLink } from 'lucide-react';
import { AnimatePresence, motion, MotionProps } from 'motion/react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { TProjectData } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type ProjectItemProps = React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    project: TProjectData;
    onSwap?: (isFirstVisible: boolean) => void;
  };

const ProjectItem = React.forwardRef<HTMLDivElement, ProjectItemProps>((props, ref) => {
  const { project, className, onSwap, ...restProps } = props;

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const thumbnails = project.thumbnail;

  const handleSwap = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const nextIndex = (activeIndex + 1) % thumbnails.length;
    setActiveIndex(nextIndex);

    if (onSwap) {
      onSwap(nextIndex === 0);
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <motion.div
      ref={ref}
      className={cn('w-full max-w-96 space-y-4 overflow-hidden rounded-xl p-4', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      {...restProps}
    >
      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={handleSwap}
          size="icon"
          variant="outline"
          className={cn(
            'shrink-0 shadow-sm transition-all duration-200',
            isTransitioning && 'pointer-events-none opacity-70',
          )}
          aria-label={`Show ${activeIndex === 0 ? 'next' : 'previous'} image`}
          disabled={isTransitioning}
        >
          <div className="transition-transform duration-500 ease-out">
            <ChevronDown
              size={20}
              strokeWidth={1.5}
              className={cn('transition-all duration-300 ease-in-out', activeIndex === 1 && 'rotate-180')}
            />
          </div>
        </Button>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <AnimatePresence initial={false}>
            {thumbnails.map((src, index) => (
              <motion.div
                key={src}
                className={cn('absolute inset-0 h-full w-full', activeIndex === index ? 'z-10' : 'z-0')}
                initial={false}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.92,
                  y: activeIndex === index ? 0 : index < activeIndex ? '-100%' : '100%',
                }}
                transition={{
                  opacity: { duration: 0.5, ease: 'easeInOut' },
                  scale: { duration: 0.5, ease: 'easeOut' },
                  y: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
                }}
              >
                <div className="border-base-500 h-full w-full overflow-hidden rounded-xl border">
                  <Image
                    src={src}
                    alt={project.alt[index]}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-full w-full object-cover transition-all duration-500"
                    style={{
                      objectPosition: index === 0 ? 'top' : 'center',
                    }}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="absolute right-2 bottom-2 z-20 flex gap-1.5 rounded-full border border-white/20 bg-black/30 px-2 py-1.5 shadow-sm backdrop-blur-sm">
            {thumbnails.map((_, index) => (
              <button
                key={index}
                onClick={() => !isTransitioning && setActiveIndex(index)}
                className={cn(
                  'size-2 cursor-pointer rounded-full transition-all duration-300',
                  activeIndex === index
                    ? 'scale-110 bg-white ring-1 ring-white/50 ring-offset-1 ring-offset-black/30'
                    : 'bg-white/60 hover:bg-white/80',
                )}
                aria-label={`View image ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <h2 className="line-clamp-1 text-lg font-semibold">{project.title}</h2>
          <p className="text-muted-foreground line-clamp-3 text-sm">{project.excerpt}</p>
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <li key={t} className="flex">
              <span className="text-muted-foreground inline-flex items-center rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-900">
                {t}
              </span>
            </li>
          ))}
        </ul>

        <div className="border-input mt-6 grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-2 border-t pt-4 text-sm sm:justify-end">
          <a
            className="focus-visible:ring-ring border-input bg-primary hover:bg-primary hover:border-foreground/30 inline-flex h-9 items-center justify-center gap-2 rounded-md border px-4 py-2 font-medium whitespace-nowrap text-white shadow-none transition-all duration-100 hover:border-b-4 focus-visible:ring-1 focus-visible:outline-none active:scale-[0.97] active:border-b disabled:pointer-events-none disabled:opacity-50"
            href={project.domain}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo <ExternalLink className="size-4 shrink-0" />
          </a>
          <a
            className="focus-visible:ring-ring border-input hover:text-accent-foreground hover:border-primary/30 inline-flex h-9 items-center justify-center gap-2 rounded-md border bg-zinc-50 px-4 py-2 font-medium whitespace-nowrap shadow-none transition-all duration-100 hover:border-b-4 hover:bg-zinc-100 focus-visible:ring-1 focus-visible:outline-none active:scale-[0.97] active:border-b disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-900 dark:hover:bg-zinc-950"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository <ExternalLink className="size-4 shrink-0" />
          </a>
        </div>
      </div>
    </motion.div>
  );
});

ProjectItem.displayName = 'ProjectItem';

export default ProjectItem;
