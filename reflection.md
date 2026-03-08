
```markdown
# Reflection on AI-Assisted Development

For this assignment, I built a full stack Task Manager application using AI-assisted development tools such as Copilot/Cursor. The goal was not only to complete the application but also to understand how AI tools influence the development workflow.

## Moments Where AI Saved Time

The first moment where AI significantly saved time was during the initial project setup. Instead of manually creating the folder structure and writing boilerplate code for the Express server, I asked the AI to generate a backend project structure with Express and CORS enabled. The AI quickly generated the basic server configuration, which allowed me to start building features immediately.

Another moment where AI saved time was while generating React components. I prompted the AI to create components such as a task list, task form, and filtering functionality. The AI generated working component structures with hooks like `useState` and `useEffect`. This helped speed up the development process and reduced repetitive coding.

## Moments Where AI Generated Incorrect or Incomplete Code

One issue occurred when the AI suggested using `Date.now()` to generate task IDs. While this works in simple scenarios, it is not ideal for managing IDs in a structured way. I replaced it with an incremental ID approach to make the code more predictable.

Another issue appeared in the API routes where the AI-generated code did not include proper error handling. Without `try...catch` blocks, unexpected errors could cause the server to fail. I reviewed the code and added error handling to make the API more robust.

These examples show that AI-generated code still requires careful review and developer judgment.

## How AI Changed My Workflow

Working with AI changed my workflow by allowing me to move faster during the early stages of development. Instead of writing every piece of code manually, I could generate a starting point and then refine it. This approach felt similar to collaborating with a junior developer who provides suggestions that still need review.

However, I also realized that blindly accepting AI suggestions can introduce bugs or poor coding practices. It is important to read and understand every line of AI-generated code before using it.

## Advice for Junior Developers

Junior developers should be careful not to depend entirely on AI tools. AI can generate useful code, but it can also produce incorrect or outdated solutions. Developers must verify logic, test edge cases, and ensure the code follows best practices.

AI tools should be treated as assistants rather than replacements for developer knowledge. Understanding the underlying code remains essential for writing reliable and maintainable software.