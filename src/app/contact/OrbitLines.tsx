interface OrbitLinesProps {
  radii: number[];
  size: number;
  color?: string;
}

const OrbitLines = ({ radii, size, color = "gray" }: OrbitLinesProps) => {
  const center = size / 2;

  return (
    <div className="relative">
      <div className="-translate-x-1/6 md:translate-x-0">
        <svg
          width={size}
          height={size}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}

        >
          {radii.map((r, i) => (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={r}
              fill="none"
              stroke={color}
              strokeDasharray="6 6"
              strokeWidth="1"
              opacity={0.4}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default OrbitLines;
