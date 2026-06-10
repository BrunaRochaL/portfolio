"use client";

import CountUp from "react-countup";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const statValues = [
  { num: 3 },
  { num: 12 },
  { num: 25 },
  { num: 320 },
];

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {statValues.map((item, index) => {
            const text = t.stats[index]?.text ?? "";
            return (
              <div
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={4}
                  delay={0.2}
                  suffix="+"
                  className="text-4xl font-extrabold text-metal xl:text-6xl"
                />
                <p
                  className={`${
                    text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/70`}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
