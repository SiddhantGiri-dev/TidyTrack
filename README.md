# TidyTrack

## A productivity app

## What I learnt

1. **How to customize checkboxes:**

```css
.task input[type="checkbox"] {
  width: 25px;
  height: 25px;
  border: 1px solid var(--color-sub-text);
  border-radius: 50%;
  appearance: none; // disables the checkbox's default look
  -webkit-appearance: none; // disables the checkbox's default look
  cursor: pointer;
}

.task input[type="checkbox"]:checked {
  background-color: var(--color-success);
  display: flex;
  align-items: center;
  justify-content: center;
}

.task input[type="checkbox"]:checked::after {
  content: "✔";
  font-size: 1.1rem;
  display: block;
  transform: rotate(10deg);
  color: white;
}
```

2. Creating responsive grids:

```css
.grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 350px));
 }
```
