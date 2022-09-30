# Pulse GitHub Actions

Repository for shared GitHub actions and reusable workflows needed within the pulse platform.

## Following Actions are available

- [Find and Replace in File](actions/find-and-replace)

## and following [Reusable Workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows):

Furthermore, you will find [Workflow Samples](examples) about how to integrate these GH Actions and Reusable workflows into your project.

## Usage for GitHub Actions

Simply pull from your Workflow in your repository the needed action via the parameter `uses` and call the latest version, i.e.

```yaml
uses: janbulling/github-actions-lib/actions/ACTION-NAME@CURRENT-RELEASE-VERSION
```

## Usage for Reusable Workflows

For reusable workflows, you have to specify the name of the `yaml`-file of the callable workflow. The caller workflow should pass all `inputs` defined as `required` in the callable workflow for it to work. i.e.

```yaml
uses: janbulling/github-actions-lib/.github/workflows/WORKFLOW-NAME.yml@vCURRENT-RELEASE-VERSION
with: ...
secrets: ...
```

## Contributing

See [Contributing](CONTRIBUTING.md).
