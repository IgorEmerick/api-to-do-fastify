# API To Do
Back-end application to build a to-do list.

# Features

## Logs

**Register logs**
***

- [x] All requests must be registered into log files.

## Project

**Create project**
***

- [x] Should be possible create a project.
- [x] Should be possible set members on creation by email.
- [ ] Should send an invite email to members not found.
- [x] Should be possible set members permissions on creation.
- [x] Must request authentication.
- [x] Must request a name.

**Get project**
***

- [x] Should be possible get all project information (including status and tasks).
- [x] Must request authentication.
- [x] Must request at least view permission.

**List projects**
***

- [x] Should be possible list projects.
- [x] Must request authentication.
- [x] Must request at least view permission to projects on list.

**Update users permission**
***

- [x] Should be possible update users permission on project.
- [x] Should not be able to update permissions if user does not have any permission on project.
- [x] Must request authentication.
- [x] Must request admin permission on project.

**Update project members**
***

- [ ] Should be possible update project members list.
- [ ] Should not be able to update members list on a project that does not exist.
- [ ] Should not be able to add users that does not exist on project members.
- [ ] Must request authentication.
- [ ] Must request admin permission on project.

## Task

**Create task stage**
***

- [x] Should be possible create a stage into a project.
- [x] Should not create two stages with same name in same project.
- [x] Should not create a stage for a project that does not exists.
- [x] Must request authentication.
- [x] Must request admin permission on project.

**Create task**
***

- [x] Should be possible create a task.
- [x] Should not be possible create a task to a stage that does not exists.
- [x] Must request authentication.
- [x] Must request at least edit permission on task project.
- [x] Must request at least edit permission on task project to task owners.

## User

**Create user**
***

- [x] Should create an user.
- [x] Should not create two or more users with same email.
- [x] Password must contain from 10 to 16 characters.
- [x] Password must contain upper case.
- [x] Password must contain lower case.
- [x] Password must contain number.
- [x] Password must contain special character.
- [x] Should receive only valid emails.
- [x] Should receive only valid names.

**Authenticate user**
***

- [x] Should authenticate an user by email and password.
- [x] User should be able to choice if the authentication will be valid for 1 or 30 days.