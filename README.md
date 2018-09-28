# NodeUkraine Conference 2018 Demo - Security in NodeJS

## Contents


1. [Description](#description) 
2. [Run Service](#run-server)
  * [Run for regular needs](#regular-needs)
  * [Run for memory leak investigation](#memory-leak-investigation)
3. [Articles](#articles)(./docs/articles.md)

## Description

There are dozens of mistakes that can be easily made and lead to huge security problems.  On the other hand, there are even more ways to break an application, such as DB injections, brute-force attacks, regular expression DOS, memory leaks, and hijacking require chain, just to name a few.  During the presentation, I’ll list the most common security problems, talk about the current situation in WEB and will explain how to deal with safety concerns. What can we do to decrease the level of 'insecurity'? I'll teach the audience to deal with security holes and will explain the must-steps which should be performed before launching a new application.

1. Brute-Force Attacks
2. Database Injections
3. Regular Expression DOS
4. Memory Leaks
5. Hijacking the require chain
6. Rainbow Table attack
7. Hash Table Collision attack
8. Timing attack

## Run server 

### Regular needs

`$npm run start`

### Memory leak investigation

`$npm run start:mem-leak-check`


## Scripts and Helpers

### Generate passwords for brute-force attack

`$npm run attack:brute-force`

### Simulate request load

`$siege http://localhost:3000/attacks/memory-leak/`

### Generate a long string 

`'take a look to the sky just before you die, its the last time you will'.repeat(100)`