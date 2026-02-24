import Image from "next/image";

import { cn } from "@/lib/utils";

type UserFeedbackCardProps = {
  className?: string;
};

export function UserFeedbackCard({ className }: UserFeedbackCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-base-white/20 bg-base-black p-4",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <div>
          <div className="[font-family:var(--font-display)] text-2xl font-bold leading-8 tracking-normal text-neutral-25 md:text-5xl md:leading-(--text-5xl--line-height) md:tracking-[-0.02em]">
            5.0
          </div>
          <div className="mt-2 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Image
                key={idx}
                src="/icon/material-symbols_star-rounded.svg"
                alt=""
                width={32}
                height={32}
                className="h-6 w-6 md:h-8 md:w-8"
              />
            ))}
          </div>
        </div>
        <p className="font-sans text-base font-semibold leading-6 tracking-normal text-neutral-25 md:text-xl md:leading-(--text-xl--line-height) md:tracking-normal">
          Many Client Trust with me
        </p>
      </div>
    </div>
  );
}

export default UserFeedbackCard;
