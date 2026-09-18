import React, { useState } from 'react';
import { FolderCheck, Copy, Check, Info, ChevronDown, ChevronUp, FileImage } from 'lucide-react';
import { TEAM_MEMBERS } from '../../data/team';

export default function PhotoUploadGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedName, setCopiedName] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedName(text);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className="w-full bg-surface border border-border rounded-2xl overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-surface-hover transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
            <FolderCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary flex items-center gap-2">
              <span>Photo Upload Guide & Directory Location</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-primary bg-primary/10 border border-primary/20">
                /public/team/
              </span>
            </h4>
            <p className="text-xs text-text-muted mt-0.5">
              Click here to see where to place your team photos and the exact required filenames.
            </p>
          </div>
        </div>
        <div className="text-text-muted">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {isOpen && (
        <div className="p-5 border-t border-border bg-bg/50 space-y-4">
          <div className="p-3.5 rounded-xl bg-accent/60 border border-border flex items-start gap-3">
            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div className="text-xs text-text-secondary leading-relaxed">
              <span className="font-semibold text-text-primary">Where to upload:</span> Place all image files in the <code className="text-primary font-mono bg-surface px-1.5 py-0.5 rounded border border-border">/public/team/</code> folder in the project root. The website automatically recognizes both the exact names and case-insensitive alternatives.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-2.5 rounded-lg bg-surface border border-border hover:border-border-hover group"
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <FileImage className="w-4 h-4 text-text-muted shrink-0 group-hover:text-primary transition-colors" />
                  <div className="truncate">
                    <div className="font-medium text-text-primary truncate">{member.name}</div>
                    <div className="font-mono text-[11px] text-text-muted truncate">
                      {member.image}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(member.image)}
                  className="p-1.5 rounded hover:bg-surface-hover text-text-muted hover:text-primary transition-colors shrink-0 ml-2"
                  title="Copy filename"
                >
                  {copiedName === member.image ? (
                    <Check className="w-3.5 h-3.5 text-primary" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
