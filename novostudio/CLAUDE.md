# Claude Code Rules & Behavior (CLAUDE.md)

## Core Principle & Priority
- Execute requested tasks precisely. Do not introduce unrequested features, speculative abstractions, or aesthetic refactors.
- Strict Priority Hierarchy:
  1. System, compiler, and platform requirements.
  2. Explicit user task (current prompt directives).
  3. CLAUDE.md rules.
  4. project_specs.md definitions.
  5. Existing repository patterns and architecture.
- Conflict Policy: Never silently override a higher-priority instruction. Explain conflicts before proceeding.

## Workflow & Technical Autonomy
1. Context-First Discovery: Scan filesystem, read CLAUDE.md, and inspect code before writing.
2. Zero Hallucinations: Verify that files, functions, types, and APIs exist before referencing them.
3. Pattern Preservation & Direction Changes:
   - For NEW/MODIFY tasks: Mirror existing patterns.
   - For REPLACE/REMOVE tasks: Explicitly remove deprecated code/files to prevent dead code buildup.
4. Autonomous Execution: Output a 2-3 bullet point execution plan before non-trivial changes.
5. Specification Integrity: Update project_specs.md ONLY when a completed change materially affects overall scope, architecture, core data models, or primary business workflows.

## Safety, Recovery & Anti-Loop Protocol
6. Minimal Footprint: Touch only required lines.
7. Dependency Management: Do not add external packages unless native solutions are impractical.
8. Operational Safeguards: Never perform destructive file deletions, git commits, or git pushes unless explicitly commanded.
9. Recovery & Anti-Loop Protocol:
   - Stop after TWO failed attempts using substantially the same approach.
   - ROLLBACK RULE: If multiple files are modified and tests fail repeatedly, revert changes (`git checkout` / restore files) to the last known working state BEFORE halting.

## Definition of Done & Mandatory Output
A task is finished ONLY when:
- All project build cycles, type-checks, lints, and test suites execute flawlessly.
- Mandatory closing response format:

1. Technical Summary
2. Verification Matrix
3. Non-Technical Manual Verification Steps (Vibe Check)
4. AI Handoff State Block (MANDATORY):
```markdown
### AI HANDOFF STATE
- STATUS: [COMPLETE | PARTIAL | BLOCKED]
- IMPLEMENTED: [Brief list of what was built/changed]
- UNTOUCHED / REMAINING: [What was left out or not done]
- KNOWN ISSUES / BLOCKS: [Any errors, limitations, or technical risks]
- RECOMMENDED NEXT STEP: [Technical recommendation for Gemini's next prompt]
```
