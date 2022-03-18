# Contributing

Once you've cloned this repo and followed the steps in [quick start](../README.md#quickstart) you'll be eager to start contributing code. Here are a few notes about how to do that once you've made edits and you're happy with the results.

## Commiting

We strive to keep our commits focussed on a single task or topic, and to keep them to a reasonable size so that reviewing them is not intimidating. To help us avoid repetetive discussions about trivcilaities we automate some checks before the code leaves your local environment.

### Pre-commit checks

When you make a commit on your local branch a set of pre-commit checks will run. THese help us ensure consistency, avoid common errors, and improve readbility. If your changes fail some or all of these checks you'll need to correct them. In rare cases, and when you are sure of your justification, you can pass `--no-verify` to bypass these checks.

#### Commit Message linting

Your commit message will be checked against our commit conventions. They are based on the principles at [https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)

```txt
    fix(LSH-10): correct handling of external links
```

The first part of this is the commit `type`. The most common types are "feat" for new features, and "fix" for bugfixes. Using these commit types helps us correctly manage our version numbers and changelogs. Since our release process calculates new version numbers from our commits it is very important to get this right.

- `feat` is for introducing a new feature
- `fix` is for bug fixes
- `docs` for documentation only changes
- `style` is for code formatting only
- `refactor` is for changes to code which should not be detectable by users or testers
- `test` is for changes which only touch test files or related tooling
- `build` is for changes which only touch our develop/release tools

Please ask questions if you're in doubt about the right prefix to use.

After the `type` there is an optional `scope`, if present it is deliniated by parentheses and it is usually used to contain a reference to an issue oin a tracker like JIRA. This helps folk get more information about the intent of the change.

After the `type` (and optional `scope`) there should be a colon and a space.

The `subject` of the commit follows. It should be a short indication of the change. The commit convention prefers that this is written in the present-imperative tense.

#### Prettification

All the files you touch in your work will be run through `prettier` so that you don't have to worry about whitespace and formatting conventions. This saves a lot of boring conversations in code review.

#### Linting

All the files you touch will also be checked with `eslint` for common problems. You might need to make some corrections before you can make your commit pass this test. It is worth taking a moment to read about any rules you trigger here. The explanations of each rule at [https://eslint.org/docs/rules/](https://eslint.org/docs/rules/) are thorough and informative.

#### Spellchecking

Spelling is hard. We increasingly use `cspell` - a programming-oriented spellchecker - to catch typos.

## Making a Pull Request

We use github `pull requests` to integrate changes to this codebase. When you've got a set of changes as one or more commits which you'd like to propose you should separate them into a branch made from the default branch, `main`. Everyone appreciates it very much if you are able to make the commit history on your branch as clean as possible.

We don't make any rules about branch names. Short is good, succinct and descriptive is useful. Avoid schemes like `JIRA-10/change-the-index` - the information there is better placed in the commit messages or PR header, and `/` in git branch names can sometimes cause suprising problems.

Once you have your branch the way you like it you can push it to the remote. Once it is there you can use the github interface to make a `pull request` targeting the `main` branch. (pro-tip: consider installing and using [Github's command-line tool](https://cli.github.com/) to make issuing PRs super-efficient)

It is totally cool to issue a "[Draft](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)" PR if you'd like to get feedback about your changes but aren't ready for them to be merged to the target branch yet.

Please take care to give good details about the changes in your PR to help reviewers later.

Once you've submitted the request a few different things will happen. Right away our CI :robot: will go to work on your branch. It will:

- Check out your branch
- Merge `main` into it if necessary
- Run our linters over the whole codebase
- Deploy a preview environment

If all that goes well it'll mark your PR with a nice green tick. If a check fails it'll place a red cross and a link where you can find out what went wrong.

Soon people will start to review your code. We do this to help each other find better ways to solve our problems, and also to spread knowledge around the team. In this project our rule is that two people who didn't contribute to the PR must give explicit approval before the branch can merge.

It is possible to request review from specific people using the github interface, and these days it even suggests people who might be appropriate. Feel free to do that, it works well.

Please keep an active eye on PRs you have open. It is your responsibility to shepherd them along to the point when they can be merged. You should check them regularly to see if they've got hung up at any point, or you can set up some notifications to help you with that. Often you'll find you need to maintain them to take advantage of points raised in review, or just to ensure that they can still merge cleanly. You can save yourself some time here by setting the PR to `automerge` - this isn't as scary as it sounds.

## Merging

Once all the robots and people are happy with a PR it will get merged. You'll find that your commit messages will make their way into the changelogs of the packages you edited. A good next step is to learn how you can track your changes on the way to production, and see how your new feature or fix performs!

**Thanks for helping out!**
