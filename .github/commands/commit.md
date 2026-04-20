---
name: commit
description: Analyzes changes, suggests a structured commit, and executes upon confirmation
arguments:
  - name: feature-name
    description: The name of the feature or component being modified (optional)
    optional: true
tools:
  - git add .
  - git status
  - git diff HEAD
  - git branch --show-current
  - git log --oneline -10
  - git commit -m
---

# Git Commit Rule

This command analyzes current repository changes and generates **exactly one structured git commit**.

---

# Task & Workflow

1.  **Analysis:** Analyze `git status` and `git diff` to understand the changes.
2.  **Staging:** Run `git add .` to prepare the changes.
3.  **Inference:** Determine the `prefix`, `feature-name`, and `status`.
4.  **Drafting:** Generate a commit message following the format: `[prefix/feature] change status`.
5.  **PREVIEW & CONFIRMATION (Required):** * Present the drafted message to the user: *"Proposed commit: [prefix/feature] change status"*
    * **Wait** for user confirmation (e.g., "Yes", "OK", "Go").
6.  **Execution:** Once confirmed, execute `git commit -m "[message]"`.

---

# Commit Message Format

`[prefix/feature] change status`

### 1. Prefixes
- **feat**: New feature
- **fix**: Bug fix
- **refactor**: Code improvement
- **docs**: Documentation
- **style**: UI/CSS/Formatting
- **chore**: Maintenance

### 2. Feature Naming
- Use the **Component name**, **Folder name**, or **Module name**.
- *Example:* `navbar`, `auth-hook`, `api-client`.

### 3. Change Status
- **add**: New items
- **fix**: Fixed issues
- **improve**: Enhanced logic
- **update style**: UI changes
- **update docs**: Readme/Comment changes

---

# Examples

* `[feat/skills-section] add hexagon skill layout`
* `[fix/api-client] resolve timeout on login`
* `[style/global] update theme colors`

---

# Constraints

- **DO NOT** execute the `git commit` command until the user has explicitly confirmed the suggested message.
- If the user requests a change to the message, update the draft and ask for confirmation again.
- Keep the interaction concise.

---
