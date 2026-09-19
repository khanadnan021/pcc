import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function TeamMemberCard({ member }) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  // List of paths to attempt
  const candidates = [
    `/team/${member.image}`,
    ...(member.imageCandidates || []).map(img => `/team/${img}`),
    ...(member.imageCandidates || []).map(img => `/${img}`),
  ];
  // Deduplicate
  const uniqueCandidates = Array.from(new Set(candidates));

  const currentSrc = uniqueCandidates[candidateIndex];

  const handleImageError = () => {
    if (candidateIndex + 1 < uniqueCandidates.length) {
      setCandidateIndex(candidateIndex + 1);
    } else {
      setImageFailed(true);
    }
  };

  // Initials for fallback avatar
  const initials = member.name
    .replace(/^Prof\.\s*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div
      id={`team-card-${member.id}`}
      className="group relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 bg-surface-card border border-border/80 hover:border-primary/50 hover:bg-surface-hover/80 hover:shadow-lg"
    >
      {/* Avatar Container */}
      <div className="relative mt-2 mb-4">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105 ring-2 ring-border group-hover:ring-primary/40">
          {!imageFailed ? (
            <img
              src={currentSrc}
              alt={member.name}
              onError={handleImageError}
              className="w-full h-full object-cover rounded-full bg-surface"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-surface to-accent flex flex-col items-center justify-center border border-border select-none">
              <span className="font-heading font-bold text-xl sm:text-2xl text-primary tracking-wider">
                {initials}
              </span>
              <span className="text-[9px] font-mono text-text-muted mt-0.5">
                AIKTC
              </span>
            </div>
          )}
        </div>

        {/* Lead Crown/Indicator */}
        {member.isLead && (
          <span
            className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-primary ring-2 ring-bg flex items-center justify-center"
            title="Lead Member"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bg"></span>
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="font-heading font-semibold text-text-primary text-base sm:text-lg tracking-tight">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-primary text-xs sm:text-sm font-semibold mt-1">
        {member.role}
      </p>

      {/* Tags (Year & Department) */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
        {member.year && (
          <span className="px-2 py-0.5 rounded text-[11px] font-mono text-primary-soft bg-primary/10 border border-primary/20">
            {member.year}
          </span>
        )}
        {member.department && (
          <span className="px-2 py-0.5 rounded text-[11px] text-text-muted bg-surface border border-border">
            {member.department}
          </span>
        )}
      </div>

      {/* Bio / Description */}
      <p className="text-xs text-text-secondary mt-3 leading-relaxed min-h-[40px] line-clamp-3">
        {member.bio}
      </p>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-border/60 w-full">
        {member.socials?.github && (
          <a
            href={member.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-surface transition-colors"
            title={`${member.name} on GitHub`}
            aria-label="GitHub profile"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {member.socials?.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-surface transition-colors"
            title={`${member.name} on LinkedIn`}
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {member.socials?.email && (
          <a
            href={`mailto:${member.socials.email}`}
            className="p-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-surface transition-colors"
            title={`Email ${member.name}`}
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
