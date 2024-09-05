import { FaBuffer } from "react-icons/fa";
export default function Experiences() {
  return (
    <section id="experience">
      <div className="py-section-y">
        <h2 className="flex items-center gap-2 sm:gap-4 text-3xl font-bold sm:text-2xl md:text-3xl">
          <FaBuffer className="size-6" /> Work Experience
        </h2>
        <div className="mt-8 space-y-8">
          <div className="relative pl-6  border-l-2">
            <h3 className="text-xl font-bold">Web Developer</h3>
            <p className="mt-1 text-muted-foreground">
              Acme Inc. | Jan 2020 - Present
            </p>
            <p className="mt-4 space-y-2 text-muted-foreground">
              Developed and maintained responsive, mobile-friendly websites
              using modern web technologies. Collaborated with designers and
              project managers to translate design concepts into functional web
              applications. Implemented and optimized SEO strategies to improve
              website visibility and user engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
