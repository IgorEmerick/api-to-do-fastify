# API To Do
Back-end application to build a to-do list.

# Features

## Logs

**Register logs**
***

- [ ] All requests must be registered into a database table.

## Project

**Create project**
***

- [ ] Should be possible create a project.
- [ ] Should be possible set members on creation by email.
- [ ] Should send an invite email to members not found.
- [ ] Should be possible set members permissions on creation.
- [ ] Must request authentication.
- [ ] Must request a name.

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
- [ ] Should not create two or more users with same email.
- [ ] Password must contain from 8 to 16 characters.
- [ ] Password must contain upper case.
- [ ] Password must contain lower case.
- [ ] Password must contain number.
- [ ] Password must contain special character.
- [ ] Should receive only valid emails.
- [ ] Should receive only valid names.

**Authenticate user**
***

- [ ] Should authenticate an user by email and password.
- [ ] User should be able to choice if the authentication will be valid for 1 or 30 days.