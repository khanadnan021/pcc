import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Award, Target, Code2, Search, Sparkles } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import TeamMemberCard from '../components/team/TeamMemberCard';
import MemberDetailModal from '../components/team/MemberDetailModal';
import { TEAM_MEMBERS, TEAM_CATEGORIES, TEAM_STATS } from '../data/team';

const STAT_ICONS = {
  Users,
  Award,
  Target,
  Code2
};

export default function Team() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  // Filter team members based on category and search query
  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS.filter((member) => {
      const matchesCategory =
        selectedCategory === 'All' || member.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query) ||
        member.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full min-h-screen bg-bg">
      {/* Page Header */}
      <PageHeader
        title="Meet the Team"
        description="These are the students and faculty driving innovation at the Programmers Club."
        breadcrumbs={['Team']}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        {/* Metric Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TEAM_STATS.map((stat, idx) => {
            const Icon = STAT_ICONS[stat.icon] || Sparkles;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-surface via-surface-card to-surface-card/95 border border-border/90 hover:border-primary/50 flex flex-col items-center text-center overflow-hidden group transition-all duration-300 shadow-sm hover:shadow-[0_12px_30px_-8px_rgba(123,193,66,0.22)]"
              >
                {/* Top Glowing Accent Line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Soft Radial Ambient Glow */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Index Pill */}
                <span className="absolute top-3.5 right-4 font-mono text-[10px] font-bold text-text-muted/40 group-hover:text-primary transition-colors">
                  0{idx + 1}
                </span>

                {/* Icon Container */}
                <div className="relative mb-3.5 mt-1">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent border border-primary/25 text-primary flex items-center justify-center shadow-[0_0_18px_rgba(123,193,66,0.15)] group-hover:shadow-[0_0_24px_rgba(123,193,66,0.35)] group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>

                {/* Stat Value */}
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-text-primary to-text-secondary tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xs sm:text-sm font-heading font-semibold text-text-primary mt-1.5 tracking-wide">
                  {stat.label}
                </div>

                {/* Description Pill */}
                <div className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-text-muted bg-accent/70 px-2.5 py-0.5 rounded-full border border-border/80 group-hover:border-primary/30 group-hover:text-text-secondary transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 group-hover:bg-primary transition-colors" />
                  <span>{stat.description}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {TEAM_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-bg font-semibold shadow-md shadow-primary/20'
                      : 'bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-hover border border-border/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search team members..."
              className="w-full pl-10 pr-4 py-2 bg-surface rounded-xl border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted hover:text-text-primary"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Members Grid */}
        {filteredMembers.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredMembers.map((member) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <TeamMemberCard
                    member={member}
                    onSelect={setSelectedMember}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-surface border border-border">
            <Users className="w-12 h-12 text-text-muted mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-semibold text-text-primary">
              No team members found
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              No results matching "{searchQuery}" in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-surface-hover border border-border text-xs text-primary hover:text-primary-soft transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Profile & Strengths Modal */}
      <MemberDetailModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}
