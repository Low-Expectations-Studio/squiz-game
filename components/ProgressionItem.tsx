interface ProgressionItemProps {
  number: number;
  percent?: number;
}

export const ProgressionItem: React.FunctionComponent<ProgressionItemProps> = ({
  number,
  percent = 100,
}) => {
  const value = 60 - Math.round((60 * percent) / 100);

  return (
    <div
      style={{
        WebkitTextStroke: '1px rgba(0,0,0,.7)',
      }}
      className="bold flex h-12 w-12 items-center justify-center rounded-full bg-white/10 bg-cover bg-repeat-x text-xl font-bold text-white"
    >
      {number}
    </div>
  );
};
