# Contributing

Feel free to contribute and help us offer more exciting GH Actions to the
Pulse platform. Similarly, let us know if you find some room for improvement!

This document explains how to contribute to this project. By contributing you will
agree that your contribution will be put under the same license as this repository.

## Contributions

If you would like to contribute code you can do so through Daimler GitHub by
creating a branch and sending a pull request.

When submitting code, please make every effort to follow existing conventions
and style in order to keep the code as readable as possible.

## Collaborating with a new action or a new reusable workflow

If you have developed an action that should be added to this repository, do try to keep it as general as possible so that it can be used by any consumer.
Avoid hard coded, project-specific variables such as code structure, files location, user login data, etc.

### Structure for Actions

- The code is located in the `actions/` directory
- Each action has its own directory within `actions/`, the name of the action's directory is meaningful and descriptive
- In the directory `actions/your-action`, at least 2 Files are included
  - action.yaml
  - README.md (please refer to the [README_TEMPLATE](.github/README_TEMPLATE.md) and follow that structure)
- Additional scripts, `Dockerfile`s, etc. needed for your action to run can be placed in the same directory
- Do note that the [README_TEMPLATE](.github/README_TEMPLATE.md) includes a section `Usage`, which points to a sample usage of your action. This sample should be placed in the directory `workflow-samples/your-action`, where a single \*.yaml shows how to integrate your action in a workflow
- All links within this repo should refer to the relative path of the file you are linking to. Please avoid using fully qualified path names when possible

#### Node / JS Actions:

- In case your action runs a `Node` script, please place it in the `src` directory calling it `your-action.js`.
- The node environment is set up in the `actions/` directory. There is also the required `package.json`. Install your node modules there
- run the command `npm build src/your-action-name.js`. This creates a file `index.js` in the `dist`-directory. Rename this file to your action name. Your action should run this generated file instead of the one in the `/src`-directory.
- This process allows to ship actions without the `node_modules` folder
- Do't forget to run `npm run format`

### Structure for Reusable Workflows

- The code is located in the `.github/workflows/` directory. The name of the workflow is meaningful and descriptive
- Each reusable workflow has its own directory within `workflow-samples/your-workflow`, where 2 files are included
  - your-workflow.yaml (A sample usage of your reusable workflow showing how to integrate it from the calling workflow)
  - README.md (please refer to the [README_TEMPLATE](.github/README_TEMPLATE.md) and follow that structure)
- All links within this repo should refer to the relative path of the file you are linking to. Please avoid using fully qualified path names when possible
