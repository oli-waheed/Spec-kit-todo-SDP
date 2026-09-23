# Quickstart: Add Tasks

## Goal

Verify the task creation flow works end-to-end for a user in a to-do application.

## Prerequisites

- The to-do application is running in a browser.
- A visible task input and Add button are available on the page.

## Validation scenarios

### Scenario 1: Add a valid task

1. Navigate to the to-do application screen.
2. Enter a task description such as "Buy groceries".
3. Click the Add button.
4. Confirm the new task appears in the task list immediately.
5. Confirm the page does not refresh.

Expected result: The task is visible in the task list right away and the input is cleared for the next entry.

### Scenario 2: Reject an empty task

1. Leave the task input blank.
2. Click the Add button.
3. Observe the validation behavior.

Expected result: No task is added and the user receives a clear validation message or blocked interaction.

### Scenario 3: Reject whitespace-only input

1. Enter a value containing only spaces.
2. Click the Add button.
3. Observe the result.

Expected result: The task is rejected and no empty item appears in the list.
