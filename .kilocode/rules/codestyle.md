# Functional Programming Standards for TypeScript

This rule enforces functional programming principles and patterns when writing TypeScript code.

## Core Principles

### Immutability
- Always use `const` for variable declarations
- Never use `let` unless absolutely necessary for legitimate mutations
- Never use `var`
- Prefer immutable data structures and operations
- Use spread operators (`...`) for copying objects and arrays instead of mutation
- When updates are needed, create new objects/arrays rather than modifying existing ones

### Pure Functions
- Write pure functions that always return the same output for the same input
- Functions should not depend on or modify external state
- Avoid side effects such as console logs, API calls, or DOM manipulation inside pure functions
- Side effects should be clearly isolated and documented when necessary

### Function Composition
- Prefer composing small, single-purpose functions over large, complex ones
- Each function should do one thing well
- Use function composition to build complex behavior from simple parts
- Return early to reduce nesting and improve readability

## Code Patterns

### Prefer Functional Array Methods
Always use functional array methods over imperative loops:
- Use `map()` instead of `for` loops for transformations
- Use `filter()` instead of `for` loops for filtering
- Use `reduce()` instead of `for` loops for accumulation
- Use `forEach()` only for side effects, and prefer `map` when returning values
- Use `find()`, `some()`, `every()` for searching and validation

### Avoid Classes When Functions Suffice
- Prefer functions and modules over classes
- Use plain objects for data structures
- Only use classes when you need true object-oriented features like inheritance
- Prefer factory functions over constructors
- Use TypeScript interfaces and types for structure, not classes

### Higher-Order Functions
- Embrace higher-order functions (functions that take or return functions)
- Use currying and partial application when it improves readability
- Create reusable function factories

### Declarative Over Imperative
- Write code that expresses "what" rather than "how"
- Prefer declarative patterns over imperative step-by-step instructions
- Use ternary operators and logical operators for simple conditionals
- Prefer expressions over statements when possible

## TypeScript-Specific Guidelines

### Type Safety
- Leverage TypeScript's type system to enforce immutability
- Use `readonly` modifier for properties that shouldn't change
- Use `ReadonlyArray<T>` or `readonly T[]` for immutable arrays
- Use `Readonly<T>` utility type for immutable objects
- Prefer union types and discriminated unions over enums when appropriate

### Function Signatures
- Always explicitly type function parameters and return types
- Use generic types to maintain type safety with functional patterns
- Prefer function type expressions or type aliases for complex function types

## Examples

### Good: Functional Approach
```typescript
// Immutable data transformation
const addDiscount = (price: number, discount: number): number => {
  return price * (1 - discount);
};

// Pure function with array methods
const calculateTotal = (items: readonly Item[]): number => {
  return items
    .filter(item => item.active)
    .map(item => item.price)
    .reduce((sum, price) => sum + price, 0);
};

// Composition
const processOrders = (orders: readonly Order[]): ProcessedOrder[] => {
  return orders
    .filter(isValid)
    .map(applyDiscount)
    .map(formatForDisplay);
};
```

### Bad: Imperative Approach
```typescript
// Avoid: Mutation and imperative loops
function calculateTotal(items: Item[]): number {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].active) {
      total += items[i].price;
    }
  }
  return total;
}

// Avoid: Using classes unnecessarily
class Calculator {
  private result: number = 0;
  
  add(n: number): void {
    this.result += n;
  }
  
  getResult(): number {
    return this.result;
  }
}
```

## State Management

When state is necessary:
- Encapsulate state changes in well-defined boundaries
- Use reducers for complex state transformations
- Consider using state management patterns like Redux or Zustand that embrace immutability
- Pass state explicitly rather than relying on closures when possible

## Error Handling

- Return `Result<T, E>` or `Option<T>` types instead of throwing exceptions when appropriate
- Use functional error handling patterns
- Make errors explicit in function signatures
- Consider using libraries like `fp-ts` for advanced functional patterns

## Documentation

- Document any intentional side effects in function comments
- Clearly mark impure functions
- Explain the purpose and behavior of higher-order functions

## Exceptions

The following cases are acceptable exceptions to strict functional programming:
- Performance-critical code where mutation provides significant benefits
- Interfacing with imperative libraries or frameworks
- React component lifecycle methods and hooks (though prefer functional components)
- Direct DOM manipulation when necessary
- Logging and debugging during development