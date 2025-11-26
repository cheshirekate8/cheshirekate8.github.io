interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-marian-blue dark:text-vivid-sky mb-4 mx-auto text-center">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-honolulu-blue via-pacific-cyan to-honolulu-blue mx-auto mb-6"></div>
    </>
  );
}
