import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import TeamMemberCard from '../team/TeamMemberCard';
import { TEAM_MEMBERS } from '../../data/team';

export default function TeamSection() {
  // Select leads and faculty for the homepage highlight
  const featuredMembers = TEAM_MEMBERS.filter(
    (m) => m.isLead || m.category === 'Faculty'
  ).slice(0, 4);

  return (
    <SectionWrapper
      id="team"
      badge="Club Leadership"
      title="Meet the Team"
      subtitle="The passionate student leads, technical heads, and faculty coordinators driving Programmers Club."
      action={
        <Link
          to="/team"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-soft transition-colors"
        >
          <span>View All 24 Members</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/team"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border hover:border-primary/50 text-text-primary text-sm font-medium hover:bg-surface-hover transition-all"
        >
          <span>Explore All Team Verticals & Profiles</span>
          <ArrowRight className="w-4 h-4 text-primary" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
