import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  Mail,
  Zap,
  Award,
  CheckCircle2,
  Quote,
  Layers,
  GraduationCap
} from 'lucide-react';
import { getMemberDetails } from '../../data/memberStrengths';

export default function MemberDetailModal({ member, isOpen, onClose }) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset image status when member changes
  useEffect(() => {
    setCandidateIndex(0);
    setImageFailed(false);
  }, [member?.id]);

  if (!isOpen || !member) return null;

  const details = getMemberDetails(member);
  const isFaculty = member.id === 'tabrez-khan' || member.id === 'irfan-jamkhandikar' || member.category === 'Faculty';

  // List of candidate image paths
  const candidates = [
    `/team/${member.image}`,
    ...(member.imageCandidates || []).map((img) => `/team/${img}`),
    ...(member.imageCandidates || []).map((img) => `/${img}`)
  ];
  const uniqueCandidates = Array.from(new Set(candidates));
  const currentSrc = uniqueCandidates[candidateIndex];

  const handleImageError = () => {
    if (candidateIndex + 1 < uniqueCandidates.length) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setImageFailed(true);
    }
  };

  const initials = member.name
    .replace(/^Prof\.\s*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
          className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-surface-card border border-border/90 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Header Ambient Glow */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-surface/90 hover:bg-surface-hover border border-border/80 text-text-muted hover:text-text-primary transition-all z-20 focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Content Container */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6 custom-scrollbar">
            {/* Top Identity Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 pt-2">
              {/* Profile Image */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-2 ring-primary/40 p-1 bg-surface shadow-xl flex items-center justify-center">
                  {!imageFailed ? (
                    <img
                      src={currentSrc}
                      alt={member.name}
                      onError={handleImageError}
                      className="w-full h-full object-cover rounded-xl bg-surface"
                    />
                  ) : (
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-surface to-accent flex flex-col items-center justify-center border border-border select-none">
                      <span className="font-heading font-bold text-2xl text-primary tracking-wider">
                        {initials}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted mt-0.5">
                        AIKTC
                      </span>
                    </div>
                  )}
                </div>

                {member.isLead && (
                  <span
                    className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-primary text-bg font-mono font-bold text-[10px] shadow-md border border-bg"
                    title="Lead Member"
                  >
                    LEAD
                  </span>
                )}
              </div>

              {/* Basic Info */}
              <div className="text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold text-primary bg-primary/10 border border-primary/20">
                    {member.category}
                  </span>
                  {member.year && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono text-text-muted bg-surface border border-border">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {member.year}
                    </span>
                  )}
                  {member.department && (
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] text-text-muted bg-surface border border-border">
                      {member.department}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary tracking-tight mt-2">
                  {member.name}
                </h2>

                <p className="text-sm sm:text-base text-primary font-medium mt-1">
                  {member.role}
                </p>

                {/* Superpower tag */}
                {details.superpower && (
                  <div className="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1 rounded-xl bg-primary/10 border border-primary/25 text-primary-soft text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span>{details.superpower}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quote banner */}
            {details.quote && (
              <div className="relative p-4 rounded-2xl bg-surface/70 border border-border/70 text-text-secondary italic text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                <Quote className="w-5 h-5 text-primary shrink-0 opacity-70 mt-0.5" />
                <span>"{details.quote}"</span>
              </div>
            )}

            {/* Key Strengths & Qualities / About */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-text-primary">
                  {isFaculty ? 'About' : 'Key Strengths & Qualities'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {details.strengths?.map((strength, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface/90 border border-border/80 hover:border-primary/40 transition-colors flex flex-col gap-1.5"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{strength.title}</span>
                    </div>
                    <p className="text-[12px] text-text-secondary leading-relaxed pl-5.5">
                      {strength.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills / Academic Guidance */}
            {details.skills && details.skills.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-text-primary">
                    {isFaculty ? 'Areas of Expertise & Academic Guidance' : 'Skills & Core Competencies'}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {details.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-surface hover:bg-surface-hover border border-border/90 text-text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Club Contributions & Highlights */}
            {details.highlights && details.highlights.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-text-primary">
                    Club Impact & Highlights
                  </h3>
                </div>

                <ul className="space-y-2 text-xs text-text-secondary pt-1">
                  {details.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bio */}
            {member.bio && (
              <div className="pt-2 border-t border-border/60">
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                  {isFaculty ? 'Department Role & Background' : 'About'}
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>
            )}

            {/* Social Connect Footer */}
            {member.socials?.email && (
              <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
                <span className="text-xs text-text-muted">
                  Connect with {member.name.split(' ')[0]}
                </span>

                <a
                  href={`mailto:${member.socials.email}`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface hover:bg-surface-hover border border-border text-xs text-text-primary hover:text-primary transition-colors cursor-pointer"
                  title={`Email ${member.name}`}
                  aria-label="Send email"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Send Message</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
