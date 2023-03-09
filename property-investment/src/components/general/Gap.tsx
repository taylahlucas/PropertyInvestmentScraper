
interface GapProps {
  height?: number;
}

const Gap = ({ height = 1 }: GapProps): JSX.Element => {
  return (
    <div style={{ height: height }} />
  );
};

export default Gap;