# Wejapa-J1-Team
TODO LIST CLI APPLICATION 


J1 (Javascript)
Plese before you push your codes, to the repository make sure you pull from the repository so the changes you have made can be reflected on your local machin, for us to avoid merge conflicts use the the git command line.

git pull origin master

Developers guide

The process here should guide you on how to contribute effectively to this project, follow the steps below. 

Master is the default branch.
All occurences of keneNwobodo will be yourown github username.
Fork the repository to generate a copy of your own.
Clone the repository.
git clone https://github.com/keneNwobodo
or
git clone repo url
Make the original Wejapa/J1-Team repo the remote upstream(at upstream)
git remote add upstream https://github.com/wejapa-J1-Team
Create a branch from Master. AlWAYS CREATE YOUR BRANCH FROM MASTER. the branch name should atleast be meaningful, make sure you have one story per branch(one(1) story === one(1) branch )

git checkout -b (name-of-branch)
Aftrer changes have been made  or after you have finished working on the task do:

git pull origin master

Consistently pull from the master branch to avoid not getting your pull request merged and to avoid conflicts. This way you can resolve conflicts from your local computer even before pushing alwyas check whtat branch you are on when making changes.
	Make your changes, add them and make your commits.

git commit -m "your messages"
Write good commit messages, this is important. So reviewers can know what you fixed, features you added etc is doing.
Push your codes to the new branch on your forked remote repository upstream repository.

git push origin (name-of-branch)

Make your pull reqquest(PR) from the branch of your repo to the develop branch of this (the wejapa-J1) repo and wait for it to be merged.
Write goo commit messages, very important. It is not just about the codes, the user workflow matters too!!

Commit Structure
type: subject (e.g body, footer
The title consists of the type of the messages and subject. The type is contained within the title and can be one of the these types:
feat: a new feature
fix: a bug fix
docs: changes to documentation
style: formatting, misingsemi colons, etc; no code changes in this case
refactor: refatcoring production code
testL adding tests, refactoring test, no production code change
chore: updating build tasks, packacge manager configs, etc no production code change

An example of a good commit message:

feat: Added signup up email, username, and password.


