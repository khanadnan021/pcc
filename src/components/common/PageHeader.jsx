import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ 
  title, 
  description, 
  badge = 'Programmers Club // AIKTC',
  breadcrumbs = [],
  children
}) {
  return (
    <div className="relative w-full bg-surface border-b border-border/80 py-12 sm:py-16 overflow-hidden">
      {/* Ambient background glows */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-20 right-10 w-[350px] h-[250px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle tech background grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f25_1px,transparent_1px),linear-gradient(to_bottom,#1f1f25_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-35 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top green accent light line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <nav className="flex items-center gap-1.5 text-xs text-text-muted mb-4 font-mono" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    <ChevronRight className="w-3.5 h-3.5 text-text-muted/50" />
                    <span className={idx === breadcrumbs.length - 1 ? 'text-primary/90 font-medium' : 'hover:text-primary transition-colors'}>
                      {crumb}
                    </span>
                  </React.Fragment>
                ))}
              </nav>
            )}

            {/* Section Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/25 mb-4 shadow-[0_0_12px_rgba(123,193,66,0.12)]">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#7bc142]"></span>
                <span>{badge}</span>
              </div>
            )}

            {/* Heading & Subtitle */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-text-primary tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="mt-3.5 text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Optional Right-side content */}
          {children && (
            <div className="flex-shrink-0">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
