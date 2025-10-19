# Mandatory JSDoc Documentation

This rule enforces comprehensive JSDoc-style documentation for all TypeScript and JavaScript code in this codebase. Proper documentation improves code maintainability, enables better IDE support, and makes the codebase more accessible to team members.

## Scope

This rule applies to:

- All `.js` JavaScript files
- All `.ts` TypeScript files
- All `.jsx` React JavaScript files
- All `.tsx` React TypeScript files

## Required Documentation

### Functions and Methods

All functions and methods MUST have JSDoc comments that include:

1. A description of what the function does
2. `@param` tags for each parameter (with type and description)
3. `@returns` (or `@return`) tag describing the return value
4. `@throws` tag if the function can throw errors
5. `@async` tag for async functions (JavaScript files)
6. `@example` tag for complex or public API functions

**Good Example:**

```javascript
/**
 * Calculates the sum of two numbers and returns the result.
 *
 * @param {number} a - The first number to add
 * @param {number} b - The second number to add
 * @returns {number} The sum of a and b
 * @example
 * const result = add(5, 3);
 * console.log(result); // 8
 */
function add(a, b) {
  return a + b;
}
```

**TypeScript Example:**

```typescript
/**
 * Fetches user data from the API and returns a formatted user object.
 *
 * @param {string} userId - The unique identifier for the user
 * @returns {Promise<User>} A promise that resolves to the user object
 * @throws {Error} If the user is not found or the API request fails
 * @example
 * const user = await fetchUser('user-123');
 */
async function fetchUser(userId: string): Promise<User> {
  // implementation
}
```

**Bad Example (Missing JSDoc):**

```javascript
// ❌ NO JSDoc comment
function add(a, b) {
  return a + b;
}
```

### Classes and Constructors

All classes MUST have JSDoc comments that include:

1. A description of the class purpose
2. `@class` tag (optional but recommended for JavaScript)
3. Constructor documentation with `@param` tags for constructor parameters
4. Property documentation using `@property` or inline comments

**Good Example:**

```javascript
/**
 * Represents a user account with authentication capabilities.
 * Manages user credentials, sessions, and profile information.
 *
 * @class
 */
class UserAccount {
  /**
   * Creates a new user account.
   *
   * @param {string} username - The username for the account
   * @param {string} email - The user's email address
   * @param {Object} options - Additional options
   * @param {boolean} options.verified - Whether the email is verified
   * @param {string} [options.role='user'] - The user's role (defaults to 'user')
   */
  constructor(username, email, options = {}) {
    /** @type {string} The username */
    this.username = username;

    /** @type {string} The email address */
    this.email = email;

    /** @type {boolean} Email verification status */
    this.verified = options.verified || false;

    /** @type {string} User role */
    this.role = options.role || 'user';
  }

  /**
   * Authenticates the user with the provided password.
   *
   * @param {string} password - The password to verify
   * @returns {boolean} True if authentication succeeds, false otherwise
   * @throws {Error} If the account is locked or suspended
   */
  authenticate(password) {
    // implementation
  }
}
```

**TypeScript Example:**

```typescript
/**
 * Generic repository for database operations.
 * Provides CRUD operations for any entity type.
 *
 * @template T The entity type this repository manages
 */
class Repository<T> {
  /**
   * Creates a new repository instance.
   *
   * @param {string} tableName - The database table name
   */
  constructor(private tableName: string) {}

  /**
   * Finds an entity by its ID.
   *
   * @param {string} id - The entity identifier
   * @returns {Promise<T | null>} The found entity or null
   */
  async findById(id: string): Promise<T | null> {
    // implementation
  }
}
```

### Interfaces and Type Definitions (TypeScript)

All exported interfaces and type definitions MUST have JSDoc comments:

**Good Example:**

```typescript
/**
 * Configuration options for the API client.
 * Controls behavior like timeouts, retries, and authentication.
 */
interface ApiConfig {
  /** The base URL for API requests */
  baseUrl: string;

  /** Request timeout in milliseconds */
  timeout: number;

  /** Maximum number of retry attempts for failed requests */
  maxRetries?: number;

  /** Authentication token (optional) */
  authToken?: string;
}

/**
 * Represents the result of an API operation.
 *
 * @template T The type of data returned on success
 */
type ApiResult<T> = {
  /** Whether the operation succeeded */
  success: boolean;

  /** The response data (only present if success is true) */
  data?: T;

  /** Error message (only present if success is false) */
  error?: string;
};
```

### Type Aliases and Constants

All exported constants and type aliases MUST have JSDoc comments:

**Good Example:**

```javascript
/**
 * Maximum number of items allowed per page in pagination.
 *
 * @constant
 * @type {number}
 * @default 50
 */
const MAX_PAGE_SIZE = 50;

/**
 * Available user roles in the system.
 *
 * @enum {string}
 */
const UserRole = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user',
  GUEST: 'guest',
};

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} valid - Whether validation passed
 * @property {string[]} errors - List of validation error messages
 */
```

### Module and File-Level Documentation

Files that export multiple items or serve as modules SHOULD have file-level documentation:

**Good Example:**

```javascript
/**
 * @file User authentication and authorization utilities.
 * Provides functions for login, logout, token validation, and permission checks.
 *
 * @author Engineering Team
 * @version 2.1.0
 */

// rest of file...
```

## Required Tags Summary

| Element         | Required Tags                 | Optional But Recommended      |
| --------------- | ----------------------------- | ----------------------------- |
| Function/Method | `@param`, `@returns`          | `@example`, `@throws`, `@see` |
| Class           | Description, constructor docs | `@class`, `@example`          |
| Interface/Type  | Description, property docs    | `@template`, `@example`       |
| Constant        | `@type`, `@constant`          | `@default`                    |
| Enum            | `@enum`                       | Description of each value     |
| File/Module     | `@file`                       | `@author`, `@version`         |

## Exceptions

The following items do NOT require JSDoc comments:

1. Private helper functions that are clearly named and less than 5 lines
2. Simple getters and setters that only return or set a property
3. Arrow functions used as inline callbacks
4. Test files (`.test.js`, `.spec.ts`, etc.) - though test descriptions should still be clear
5. Configuration files that export simple objects

**Exception Example:**

```javascript
// ✅ OK: Simple private getter
class User {
  get id() {
    return this._id;
  }
}

// ✅ OK: Inline callback
users.map((user) => user.name);

// ✅ OK: Very simple helper (but documenting is still better!)
function isEven(n) {
  return n % 2 === 0;
}
```

## Enforcement Guidelines

When writing new code or reviewing existing code:

1. **Always add JSDoc** before writing the function/class body
2. **Update JSDoc** when modifying function signatures or behavior
3. **Review JSDoc** during code reviews - incomplete documentation should be flagged
4. **Use TypeScript types** in TypeScript files, but still provide descriptions in JSDoc
5. **Be descriptive** - avoid obvious comments like "Gets the name" for `getName()`
6. **Include examples** for public APIs and complex functions
7. **Document edge cases** and important behavior in the description
8. **Use proper grammar** - start with capital letters, use complete sentences

## TypeScript-Specific Considerations

In TypeScript files:

- Type information is already in the code, but JSDoc should still describe WHAT and WHY
- Use JSDoc primarily for descriptions, examples, and behavioral documentation
- `@param` and `@returns` descriptions are still required even when types are explicit
- Consider using `@template` for generic type parameters that need explanation

**TypeScript Example:**

```typescript
/**
 * Transforms an array of items using the provided mapping function.
 * This is a type-safe alternative to Array.map with better error handling.
 *
 * @template T The input item type
 * @template U The output item type
 * @param {T[]} items - The array of items to transform
 * @param {(item: T) => U} mapper - The transformation function
 * @returns {U[]} The transformed array
 * @throws {TypeError} If items is not an array or mapper is not a function
 * @example
 * const numbers = [1, 2, 3];
 * const doubled = transform(numbers, n => n * 2);
 * // Result: [2, 4, 6]
 */
function transform<T, U>(items: T[], mapper: (item: T) => U): U[] {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array');
  }
  if (typeof mapper !== 'function') {
    throw new TypeError('mapper must be a function');
  }
  return items.map(mapper);
}
```

## Implementation Checklist

Before committing code, verify:

- [ ] All exported functions have complete JSDoc
- [ ] All exported classes have complete JSDoc
- [ ] All public methods have complete JSDoc
- [ ] All parameters are documented with types and descriptions
- [ ] Return values are documented
- [ ] Complex functions have `@example` tags
- [ ] Functions that throw errors have `@throws` tags
- [ ] TypeScript generics have `@template` documentation when needed
- [ ] Deprecated functions are marked with `@deprecated`

## Tools and Resources

- JSDoc Official Documentation: https://jsdoc.app/
- TypeScript JSDoc Reference: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
- Use ESLint with `eslint-plugin-jsdoc` to automatically enforce JSDoc requirements
- Configure your IDE to show JSDoc hints and warnings

## Benefits of Following This Rule

1. **Better IDE Support**: Hover hints, autocomplete, and inline documentation
2. **Easier Onboarding**: New team members can understand code faster
3. **Living Documentation**: Documentation stays in sync with code
4. **Type Safety**: Enhanced type checking in JavaScript files
5. **Maintainability**: Clear understanding of function contracts and behavior
6. **Reduced Bugs**: Better understanding prevents misuse of functions

---

**Remember:** Good documentation is an investment in the future maintainability of the codebase. Take the time to write clear, comprehensive JSDoc comments for all significant code elements.
