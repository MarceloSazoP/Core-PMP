export function StatusPill({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-xs font-medium px-2 py-0.5 rounded-full"
      style={{
        color,
        backgroundColor: `${color}1a`,
        transition: "color 200ms ease, background-color 200ms ease",
      }}
    >
      {label}
    </span>
  );
}
