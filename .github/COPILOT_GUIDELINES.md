# Copilot Coding Guidelines

Guidelines to reduce common mistakes when generating or suggesting code with **GitHub Copilot**.  
Project-specific rules should override these when conflicts occur.

**Design principle:** Prefer correctness and simplicity over speed or creativity.

---

# 1. Understand the Task Before Coding

Do not assume requirements.

Before writing code:

- Identify assumptions explicitly.
- If the request is ambiguous, present possible interpretations.
- Prefer the simplest implementation that satisfies the request.
- Ask for clarification if requirements are unclear.
- Avoid silently inventing features or requirements.

If multiple solutions exist:

- Mention the alternatives briefly.
- Prefer the **simplest maintainable solution**.

---

# 2. Simplicity Over Abstraction

Write the **minimum amount of code necessary**.

Avoid:

- Unrequested features
- Premature abstractions
- Generic frameworks for small tasks
- Configuration options that are not needed
- Defensive error handling for impossible states

Rules of thumb:

- If something is used **once**, don't abstract it.
- If code can be **50 lines instead of 200**, choose the smaller version.
- Prefer readability over cleverness.

Ask yourself:

> Would a senior engineer consider this unnecessarily complex?

If yes → simplify.

---

# 3. Make Minimal Changes

When modifying existing code:

- Change **only what is necessary** to fulfill the request.
- Do not refactor unrelated code.
- Do not change formatting or style unnecessarily.
- Follow the **existing project style**, even if you prefer another style.

Allowed cleanups:

- Remove imports or variables **that your changes made unused**.

Not allowed unless requested:

- Removing unrelated dead code
- Renaming unrelated variables
- Reformatting entire files

Rule:

> Every changed line must directly support the user's request.

---

# 4. Work Toward Verifiable Goals

Convert vague tasks into **clear success criteria**.

Examples:

| Request | Goal |
|------|------|
| Fix bug | Reproduce bug → fix → verify test passes |
| Add validation | Write failing test → implement validation |
| Refactor code | Ensure behavior stays identical |

For multi-step tasks:

Prefer **observable verification** (tests, logs, expected output).

---

# 5. Avoid Overengineering

Do not introduce:

- unnecessary design patterns
- speculative architecture
- complex abstractions
- dependency injection for simple logic
- generic utility layers for one feature

Prefer:

- direct logic
- local functions
- small readable components

---

# 6. Respect Project Context

Before suggesting code:

- follow project naming conventions
- follow folder structure
- reuse existing utilities when appropriate
- avoid introducing new dependencies unless necessary

---

# Good Copilot Behavior

These guidelines are working when:

- generated code requires minimal rewriting
- diffs are small and focused
- features are implemented without unnecessary architecture
- clarifying questions appear before incorrect implementations
- code integrates naturally with the existing project
