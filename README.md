# Welcome to Javascript!

I've translated a bunch of unit tests from your python exercises into javascript unit tests.
The goal of the assignment is the same as your other unit test based assignment: get green test output.
Of course, with a new language comes new supporting tech.
Instead of using [pytest][pytest] and [pip][pip], we are using [jest][jest] and [yarn][yarn].
Your interaction with these tools will be minimal right now, but you will use them more as we start on projects
using javascript.

[pytest]: https://docs.pytest.org/en/latest/
[pip]: https://pip.pypa.io/en/stable/
[jest]: https://facebook.github.io/jest/
[yarn]: https://yarnpkg.com/en/

# What do you do

To get started with this assignment you need to clone the repository.
After cloning, you run `yarn install` to install the required dependencies.
This is a little different from how we've used `pip`.
When we've used `pip`, we've specifically `pip install`ed a single package
for the entire system.
With `yarn` each project installs its own dependencies and each project
keeps a list of what it needs to run.
So to start up, we only need to say `yarn install`, and it will install
whatever is needed.
For this assignment, it should only need to install `jest`.

After running `yarn install` you should be able to say `yarn test`.
For your workflow, I'd suggest keeping terminal and editor open side-by-side and
running `yarn test --watch`. This command tells yarn to rerun your tests
anytime you save a file.

