interface ProgressionItemProps {
  number: number;
  percentRatio?: number;
}

export const ProgressionItem: React.FunctionComponent<ProgressionItemProps> = ({
  number,
  percentRatio = 0,
}) => {
  const bg = percentRatio === 0 ? 'bg-white/10' : 'bg-white/30';
  return (
    <div
      style={{
        WebkitTextStroke: '1px rgba(0,0,0,.7)',
      }}
      className={`bold ${bg} flex h-12 w-12 items-center justify-center rounded-full bg-cover bg-repeat-x text-xl font-bold text-white`}
    >
      {number}
    </div>
  );
};
