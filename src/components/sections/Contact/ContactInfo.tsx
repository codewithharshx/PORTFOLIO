import { PERSONAL_INFO } from '@/lib/constants';

export default function ContactInfo() {
  const labelStyle = {
    fontFamily: 'var(--font-instrument), Georgia, serif',
    fontStyle: 'italic' as const,
    fontWeight: 400,
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.9)'
  };

  return (
    <div className="space-y-6 text-left">
      <div>
        <h3 style={labelStyle} className="mb-1">Email</h3>
        <p className="text-white/60 text-lg">{PERSONAL_INFO.email}</p>
      </div>
      <div>
        <h3 style={labelStyle} className="mb-1">Phone</h3>
        <p className="text-white/60 text-lg">{PERSONAL_INFO.phone}</p>
      </div>
      <div>
        <h3 style={labelStyle} className="mb-1">Location</h3>
        <p className="text-white/60 text-lg">
          {PERSONAL_INFO.location.city}, {PERSONAL_INFO.location.state}, {PERSONAL_INFO.location.country}
        </p>
      </div>
    </div>
  );
}
