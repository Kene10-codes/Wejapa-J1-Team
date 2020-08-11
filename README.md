# Wejapa-J1-Team :earth_africa:
### TODO LIST CLI APPLICATION 

## Guide  To Install Node Modules.
Node modules is a prerequisite to run this application successfully and it did not come with this application because of its large file size. Hence you have to install the node modules.

## Steps To Install The Node Modules
* Open your terminal or command prompt
*  Locate the directory of your application
*  Type npm install node
*  Node modules will be installed on your local machine.
*  Run the application i.g node app

## Methods To Install Dependecies Used Includes
* npm install chalk - Used for to add color(s) to the output(s).
* npm install yargs - Used for parsing arguments and generating appealing user intergace.


## Thought Process Engaged To Make This App a Reality Inlcudes:
* Firstly, we came together as a team to discuss what a todo list app is.
* After series of opinion from each team member, we unanimously agreed that it is an application that keeps track of written tasks or errands that someone may  want to engage in other accomplish a particular goal.
* After that, we set out to think about the logic that we will use to make the app work just the way we wanted, so we opined to have am app that is able to create tasks(todo), * * list already created tasks, show individual or single task, update tasks, remove task and indicate if a task was completed or not.
* The momeent, we finished making suggestions on the functionality our app should have, the team lead shared the tasks among each team member. 
* Everyone setted out to accomplish their task. 
* After thorough research, and before we knew what was happening our app was ready!.

## Challenges We Faced 
Had to do thorough research to understand some dependencies to use in the application.
At some point understanding each others code for compilation was difficult but after the hassle, we later resolved it as a team.

## GIT WORKFLOW FOR DEVELOPERS

*  **J1(Javascript)** 
Plese before you push your codes, to the repository make sure you pull from the repository so the changes you have made can be reflected on your local machin, for us to avoid merge conflicts use the the git command line.

* git pull origin master

## Developers guide

The process here should guide you on how to contribute effectively to this project, follow the steps below. 

Master is the default branch.
All occurences of keneNwobodo will be yourown github username.
*  Fork the repository to generate a copy of your own.
*  Clone the repository.
*  git clone https://github.com/keneNwobodo
or
*  git clone repo url
Make the original Wejapa/J1-Team repo the remote upstream(at upstream)
git remote add origin https://github.com/wejapa-J1-Team
Create a branch from Master. AlWAYS CREATE YOUR BRANCH FROM MASTER. the branch name should atleast be meaningful, make sure you have one story per branch(one(1) story === one(1) branch )

* git checkout -b (name-of-branch)
Aftrer changes have been made  or after you have finished working on the task do:

* git pull origin master

Consistently pull from the master branch to avoid not getting your pull request merged and to avoid conflicts. This way you can resolve conflicts from your local computer even before pushing alwyas check whtat branch you are on when making changes.
*  Make your changes, add them and make your commits.

*  git commit -m "your messages"
Write good commit messages, this is important. So reviewers can know what you fixed, features you added etc is doing.
Push your codes to the new branch on your forked remote repository upstream repository.

*  git push origin (name-of-branch)

Make your pull reqquest(PR) from the branch of your repo to the develop branch of this (the wejapa-J1) repo and wait for it to be merged.
Write goo commit messages, very important. It is not just about the codes, the user workflow matters too!!

## Commit Structure
type: subject (e.g body, footer
The title consists of the type of the messages and subject. The type is contained within the title and can be one of the these types:
* feat: a new feature
* fix: a bug fix
* docs: changes to documentation
* style: formatting, misingsemi colons, etc; no code changes in this case
* refactor: refatcoring production code
* testL adding tests, refactoring test, no production code change
* chore: updating build tasks, packacge manager configs, etc no production code change

**An example of a good commit message:** 

* feat: Added signup up email, username, and password.


