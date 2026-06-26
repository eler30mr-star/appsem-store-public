export default function StatBadge({ icon: Icon, label, value }) {
  return (
    <div className="stat-badge">
      {Icon ? <Icon size={18} /> : null}
      <span>
        <strong>{value}</strong>
        <small>{label}</small>
      </span>
    </div>
  );
}
