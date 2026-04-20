# Skills Section Design

## Purpose

Display key professional skills in a visually structured layout using a step-based hexagon diagram.
Each hexagon represents a core skill category in the developer's portfolio.

---

## Layout Structure

The section contains **6 hexagon blocks** arranged in a zig-zag vertical flow.

```
        [1]
      [2] [3]
     [4] [5]
        [6]
```

Each block contains:

* Skill title
* Short description
* Optional icon or progress indicator

---

## Skill Categories

### 1. Frontend Development

**Technologies**

* HTML5
* CSS3
* JavaScript
* React
* TailwindCSS

**Description**

Build responsive and interactive user interfaces with modern frontend frameworks.

---

### 2. Backend Development

**Technologies**

* Node.js
* Express
* REST API
* Authentication
* Server architecture

**Description**

Develop scalable backend services and APIs for web applications.

---

### 3. Database Management

**Technologies**

* MongoDB
* MySQL
* PostgreSQL
* Data modeling
* Query optimization

**Description**

Design and manage structured and non-structured databases.

---

### 4. Dev Tools

**Technologies**

* Git
* GitHub
* Docker
* CI/CD
* Linux

**Description**

Use modern tools to streamline development workflow and deployment.

---

### 5. Problem Solving

**Skills**

* Algorithms
* Data structures
* Debugging
* Code optimization

**Description**

Apply analytical thinking to solve complex software problems.

---

### 6. Soft Skills

**Skills**

* Team collaboration
* Communication
* Time management
* Continuous learning

**Description**

Work effectively in teams and adapt quickly to new technologies.

---

## Design Guidelines

* Use **hexagon cards** for visual structure.
* Arrange cards in **staggered zig-zag layout**.
* Each card should include:

  * Icon
  * Title
  * Short description
* Apply **hover animation** for interaction.
* Ensure responsive layout for mobile devices.

---

## Suggested Component Structure

```
SkillsSection
 ├── SkillHexagon
 │     ├── Icon
 │     ├── SkillTitle
 │     └── SkillDescription
 └── HexagonGridLayout
```

---

## Example Usage

```jsx
<SkillsSection>
  <SkillHexagon title="Frontend Development" />
  <SkillHexagon title="Backend Development" />
  <SkillHexagon title="Database Management" />
  <SkillHexagon title="Dev Tools" />
  <SkillHexagon title="Problem Solving" />
  <SkillHexagon title="Soft Skills" />
</SkillsSection>
```

---

## Styling Notes

* Use **CSS Grid or Flexbox**
* Hexagon shape created using:

```
clip-path: polygon(...)
```

* Recommended colors:

| Skill Type      | Color      |
| --------------- | ---------- |
| Frontend        | Green      |
| Backend         | Teal       |
| Database        | Blue       |
| Dev Tools       | Gray       |
| Problem Solving | Dark Gray  |
| Soft Skills     | Light Gray |

---

## Responsive Behavior

Desktop

* Display hexagon zig-zag layout

Tablet

* Reduce spacing between hexagons

Mobile

* Convert layout to **single vertical stack**
