interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col gap-0.5 items-center text-center mb-10 max-w-lg mx-auto">
      <span>{subTitle}</span>
      <h3 className="text-4xl">{title}</h3>
    </div>
  );
};

export default SectionTitle;
