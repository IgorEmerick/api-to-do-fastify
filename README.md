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

- [ ] Should be possible get all project information (including status and tasks) by id.
- [ ] Must request authentication.
- [ ] Must request at least view permission.

**List projects**
***

- [ ] Should be possible list projects.
- [ ] Must request authentication.
- [ ] Must request at least view permission to projects on list.

## Status

**Create status**
***

- [ ] Should be possible create a status into a project using status name and project id.
- [ ] Must request authentication.
- [ ] Must request admin permission on project.
- [ ] Should not create two status with same name in same project.

## Task

**Create task**
***

- [ ] Should be possible create a task using task name, description and status id.
- [ ] Must request authentication.
- [ ] Must request edit permission.

## User

**Create user**
***

- [x] Should create an user by name, email and password.
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