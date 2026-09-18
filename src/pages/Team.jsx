import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Award, Target, Code2, Search, Sparkles } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import TeamMemberCard from '../components/team/TeamMemberCard';
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
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-surface-card border border-border/80 flex flex-col items-center text-center relative overflow-hidden group hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-text-secondary mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-text-muted mt-0.5 hidden sm:block">
                  {stat.description}
                </div>
              </div>
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
                  <TeamMemberCard member={member} />
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
    </div>
  );
}
