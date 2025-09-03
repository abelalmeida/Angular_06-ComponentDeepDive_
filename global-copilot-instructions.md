# Instructions for Copilot
Java: Use JDK 1.8.0_362.
JavaScript: Use ECMAScript 2022.
Angular: Use Angular 20. Do not use *ngIf or *ngFor or *ngSwitchCase ; use @if and @for. Suggest signals and required inputs.
Angular: Do not use decorators, use Signal functions where possible.
Node.js: Use Node.js 20+. Use modern JS features and best practices.
TypeScript: Use TypeScript 5.0+. Use latest TS features and best practices.
Code examples: Keep concise and relevant to standards.
jQuery: If replacing jQuery, use jQuery. If code uses jQuery, continue using it. If not, do not use jQuery.
Do not repeat the question.
Do not show existing code.
Do not use comments in code.
Use logging (e.g., console.log) when relevant.
No inline comments.
Only include comments if specifically requested.
For Java, use try-with-resources for resource management. In catch blocks, log the error and rethrow it.  
For JavaScript, use try-catch for error-prone operations and finally blocks for cleanup.  
Tabs are used for indentation.

Java example:
```java
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
	String line = reader.readLine();
} catch (IOException e) {
	System.out.println(e);
	throw e;
}
```

JavaScript example:
```javascript
try {
	let data = await fetchData();
	console.log(data);
} catch (error) {
	console.log(error);
	throw error;
} finally {
	console.log('Cleanup');
}
```