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

2. **Creating responsive grids:**

```css
.grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 350px));
}
```

3. **Using event bubbling to listen for an event on multiple elements via their parent:** When we're making dynamic UIs, elements are conditionally added and removed from the DOM. Attaching event listeners to each of them is inefficient. Instead, we can attach a single listener to the parent and check _event.target_ to know exactly on what element was the event triggered.
