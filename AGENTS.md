# CLAUDE.md

This is a starter kit for building a TypeScript application.

## Commands

```bash
bun install          # Install dependencies
bun dev              # Run application
bun run build        # Build for production (tsdown/rolldown build)
bun test             # Run tests (bun:test)

bun run check        # Run all checks (format, lint, typecheck, test)
bun run fix          # Auto-fix format and lint issues
bun run typecheck    # TypeScript type checking
bun run lint         # Run oxlint with type-aware rules
bun run format       # Run oxfmt formatter
```

## Coding Rules

- Use `bun` instead of `npm` or `pnpm`
- Use strict TypeScript with `bun:test` for testing
- NEVER cast with `any`
- AVOID inline type casting with `as` - use valibot or zod for runtime
  validation
- AVOID unnecessary try/catch
- Document methods using TSDoc format with one newline after the description
  before params
- Write tests first when fixing bugs or implementing features
- All changes automatically get formatted with `oxfmt` (no semis, doublequotes)
