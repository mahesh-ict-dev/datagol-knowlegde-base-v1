# Release Notes

This directory contains all DataGOL release notes organized by year and month for easy navigation and maintenance. The structure follows a chronological order with the most recent years and months appearing first.

## Directory Structure

```
docs/release-notes/
├── 2025/ (Most Recent Year First)
│   ├── 12/ (December)
│   ├── 11/ (November)
│   ├── 10/ (October)
│   ├── 09/ (September)
│   │   └── v1-76-0-minor-release.mdx
│   ├── 08/ (August)
│   ├── 07/ (July)
│   ├── 06/ (June)
│   ├── 05/ (May)
│   ├── 04/ (April)
│   ├── 03/ (March)
│   ├── 02/ (February)
│   └── 01/ (January)
├── 2024/
│   ├── 12/ (December)
│   ├── 11/ (November)
│   ├── 10/ (October)
│   ├── 09/ (September)
│   ├── 08/ (August)
│   ├── 07/ (July)
│   ├── 06/ (June)
│   ├── 05/ (May)
│   ├── 04/ (April)
│   │   └── v1-4-0-minor-release.mdx
│   ├── 03/ (March)
│   │   └── v1-3-0-minor-release.mdx
│   ├── 02/ (February)
│   │   └── v1-2-1-patch-release.mdx
│   └── 01/ (January)
│       ├── v1-2-0-major-release.mdx
│       └── v1-2-1-patch-release.mdx
└── README.md (this file)
```

## Creating New Release Notes

### Using the Script (Recommended)

Use the provided script to create new release notes:

```bash
node create-release-notes.js <version> <type> [date] [year] [month]
```

**Examples:**
```bash
# Create a minor release for current month
node create-release-notes.js 1.77.0 minor

# Create a patch release for specific date
node create-release-notes.js 1.77.1 patch 2025-10-15

# Create a major release for specific month
node create-release-notes.js 2.0.0 major 2025-11-01 2025 11
```

### Manual Creation

1. Navigate to the appropriate year/month directory
2. Create a new `.mdx` file following the naming convention: `v{version}-{type}-release.mdx`
3. Copy the content from `release-template.mdx` (located in the project root)
4. Replace all placeholder variables with actual values
5. Update the `sidebar_position` in the frontmatter

## File Naming Convention

- **Format:** `v{version}-{type}-release.mdx`
- **Examples:**
  - `v1-2-0-major-release.mdx`
  - `v1-2-1-patch-release.mdx`
  - `v1-3-0-minor-release.mdx`

## Release Types

### Major Release
- Significant new features
- Breaking changes
- Major architectural changes
- New major version number (e.g., 1.0.0 → 2.0.0)

### Minor Release
- New features
- Improvements
- Non-breaking changes
- New minor version number (e.g., 1.2.0 → 1.3.0)

### Patch Release
- Bug fixes
- Security updates
- Small improvements
- New patch version number (e.g., 1.2.0 → 1.2.1)

## Template Variables

When creating new release notes, replace these placeholders:

- `{version}`: Version number (e.g., 1.76.0)
- `{type}`: Release type (major, minor, patch)
- `{release_date}`: Release date (YYYY-MM-DD format)
- `{total_changes}`: Total number of changes
- `{position}`: Sidebar position number
- `{summary}`: Brief summary of the release
- `{new_features}`: Number of new features
- `{bug_fixes}`: Number of bug fixes
- `{performance_improvements}`: Number of performance improvements
- `{security_updates}`: Number of security updates
- `{api_version}`: API version (if applicable)

## Frontmatter Requirements

Each release notes file must include:

```yaml
---
title: DataGOL v{version} - {type} Release
description: {type} release with {summary}
sidebar_position: {position}
---
```

## Content Guidelines

### Structure
1. **What's New** - Major features and new integrations
2. **Improvements** - Performance and UX improvements
3. **Bug Fixes** - List of resolved issues
4. **Technical Changes** - Breaking changes and migration info
5. **Statistics** - Summary of changes
6. **Related Links** - Links to documentation and resources

### Writing Style
- Use clear, concise language
- Include emojis for visual appeal
- Provide specific details about changes
- Include migration instructions for breaking changes
- Add relevant links to documentation

## Navigation

Release notes are automatically organized in the sidebar under:
- **Release Notes** (main category)
  - **2025** (most recent year first)
    - **December 2025** (most recent month first)
    - **November 2025**
    - **October 2025**
    - **September 2025**
    - etc.
  - **2024** (previous year)
    - **December 2024** (most recent month first)
    - **November 2024**
    - **October 2024**
    - etc.

## Maintenance

- Keep release notes up to date
- Archive old releases as needed
- Maintain consistent formatting
- Update template as requirements change
- Review and update this README periodically
