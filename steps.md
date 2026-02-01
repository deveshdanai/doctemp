# Git Trial Run (Devesh + Ayush)

Goal: Practice working together using GitHub branches + dev workflow.

---

# Repo Branch Setup

- `main` → stable branch (do not touch daily)
- `dev` → shared development branch
- `feature-*` → temporary branches for each task

---

# PART 1 — Devesh First Trial

## 1. Clone Repo

```bash
git clone https://github.com/USERNAME/REPO.git
cd REPO

## 2. Clone Repo

```bash
git checkout dev
git pull origin dev


## 3. Create Feature Branch

git checkout -b feature-first-html

## 4. Add Files

<!DOCTYPE html>
<html>
<head>
  <title>Trial Run</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello from Devesh</h1>
</body>
</html>


### create style.css

h1 {
  font-family: sans-serif;



## 5. Commit Changes

git add .
git commit -m "Added initial HTML and CSS files"

## 6. Push Feature Branch

git push origin feature-first-html


# PART 2 — Ayush Trial

## 1. Clone Repo (First Time)

git clone https://github.com/USERNAME/REPO.git
cd REPO

## 2. Switch to Dev + Pull Latest

git checkout dev
git pull origin dev

Now friend should see:
	•	index.html
	•	style.css

## 3. Create New Feature Branch

git checkout -b feature-update-css

## 4. Update File
Edit style.css

h1 {
  font-family: sans-serif;
  color: blue;
}

Or update HTML text:

<h1>Hello from Friend</h1>


## 5. Commit Friend Changes

git add .
git commit -m "Updated heading style"

## 6. Push Friend Branch

git push origin feature-update-css