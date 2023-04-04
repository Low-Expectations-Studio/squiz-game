import classNames from 'classnames';

interface ProgressionItemProps {
  number: number;
  percentRatio?: number;
}

export const ProgressionItem: React.FunctionComponent<ProgressionItemProps> = ({
  number,
  percentRatio = 0,
}) => {
  return (
    <div
      style={{
        WebkitTextStroke: '1px rgba(0,0,0,.7)',
      }}
      className={classNames(
        'bold flex h-12 w-12 items-center justify-center rounded-full bg-white/20 bg-cover bg-repeat-x text-xl font-bold text-white backdrop-blur-lg',
        {
          'opacity-25': percentRatio === 0,
        },
      )}
    >
      {number}
    </div>
  );
};
