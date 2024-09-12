import { HiMiniBriefcase } from "react-icons/hi2";

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20">
      <div className="py-section-y">
        <h2 className="flex items-center gap-2 sm:gap-4 text-3xl font-bold sm:text-2xl md:text-3xl">
          <HiMiniBriefcase className="size-6" /> Projects
        </h2>
        <div className="mt-8 flex flex-col gap-8">
          <div className="flex flex-col items-start">
            <img
              src="/"
              width={640}
              height={360}
              alt="Project 1"
              className="rounded-lg"
              style={{ aspectRatio: "640/360", objectFit: "cover" }}
            />
            <h3 className="mt-4 text-xl font-bold">E-commerce Website</h3>
            <p className="mt-2 text-muted-foreground">
              A modern e-commerce website built with React, Next.js, and
              Tailwind CSS. It features a sleek and responsive design, a
              user-friendly shopping experience, and advanced e-commerce
              functionalities.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img
              src="/"
              width={640}
              height={360}
              alt="Project 2"
              className="rounded-lg"
              style={{ aspectRatio: "640/360", objectFit: "cover" }}
            />
            <h3 className="mt-4 text-xl font-bold">Landing Page</h3>
            <p className="mt-2 text-muted-foreground">
              A responsive and accessible landing page built with Tailwind CSS
              and React. It showcases a clean and modern design, with engaging
              content and a smooth user experience.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img
              src="/"
              width={640}
              height={360}
              alt="Project 3"
              className="rounded-lg"
              style={{ aspectRatio: "640/360", objectFit: "cover" }}
            />
            <h3 className="mt-4 text-xl font-bold">
              Data Visualization Dashboard
            </h3>
            <p className="mt-2 text-muted-foreground">
              A data visualization dashboard built with React, D3.js, and
              Tailwind CSS. It provides a comprehensive and intuitive interface
              for analyzing complex data sets, with interactive charts and
              graphs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
