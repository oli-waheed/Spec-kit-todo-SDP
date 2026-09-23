# Data Model: Add Tasks

## Entity: Task

| Field | Type | Description | Validation |
|------|------|-------------|------------|
| id | string or number | Unique identifier for the task entry | Must be unique within the active session |
| description | string | Text entered by the user | Must be trimmed and non-empty |
| createdAt | datetime or timestamp | Time the task was created | Optional for UI display, but useful for ordering and traceability |

## Relationships

- A Task belongs to a single visible task list within the current session.
- One task list may contain many tasks.
- Each item is independent and rendered in the order it was added.

## Validation rules

- description must not be null or undefined
- description must be trimmed before validation
- description must contain at least one non-whitespace character to be accepted
- invalid input must not create a new task record

## State transitions

- Draft -> Validated -> Added
- Draft -> Empty input -> Rejected
- Added -> Visible in task list

## Notes

The data model is intentionally simple because the feature scope excludes editing, deletion, completion status, persistence, and advanced list management.
