# Lola Tech's Handbook

The essential resource for everyone who works at Lola Tech.

## Contributing

While our handbook is viewable by the public, you need to work at Lola Tech to suggest changes. You can do that via a PR against`main` in this repository, or, if you prefer to use a Content Management System, you can head over to <https://handbook-lola-tech.vercel.app/admin.html> where you can log in with any Github user who is a member of <https://github.com/lola-tech>.

## Development

We render our handbook with next.js from MDX sources. This is totally overkill. Most of the heavy lifting is currently to do with generating a useful table of contents, and enabling the use of `next/image` from inside markdown.

Currently styling is handled by [pico.css](https://picocss.com/) and as many emojii as we can think of.

The CMS is the amazing [NetlifyCMS](netlifycms.org) - check it out - it stores content in github and uses PRs for editorial workflow 💖

### Quickstart

```shell
gh clone lola-tech/handbook
cd handbook
nvm use
yarn
yarn dev
```
