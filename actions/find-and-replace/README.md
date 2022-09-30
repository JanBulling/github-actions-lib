# Find and Replace a String in any project file

A GitHub action to find and replace content in a project file.

## Input Parameters

| Name         | Description                                                                                | Required | Defaults         |
| ------------ | ------------------------------------------------------------------------------------------ | -------- | ---------------- |
| find         | A string to find and replace in your project files                                         | true     | -                |
| replace      | The string to replace it with                                                              | true     | -                |
| files        | A [glob](https://github.com/actions/toolkit/tree/master/packages/glob) of files to include | false    | `**` (All files) |
| regex        | Whether to match with `find` as a regular expression instead of a fixed string             | false    | `true`           |
| replaceFirst | If set, only the first found occurence of `find` is replaces                               | false    | `false`          |

## Output Parameters

None

## Usage

See the [sample workflow](../../examples/find-and-replace.example.yml).
