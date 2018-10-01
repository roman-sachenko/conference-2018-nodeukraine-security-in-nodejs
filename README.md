# NodeUkraine Conference 2018 Demo - Security in NodeJS or Symphony of Destruction

## Contents


1. [Description](#description) 
2. [Run Service](#run-server)
  * [Run for regular needs](#regular-needs)
  * [Run for memory leak investigation](#memory-leak-investigation)
3. [Vulnerabilities and attacks](#vulnerabilities-and-attacks)
4. [Articles](./docs/articles.md)

## Description

Slides: https://slides.com/roman_sachenko/security-in-nodejs-symphony-of-destruction/

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


## Vulnerabilities and attacks

### Brute-Force attack

Run: `$python ./scripts/bruteForce.py`


### Database injections

Insert Users: `$node ./scripts/insertUsers.js`
Call: `DELETE http://127.0.0.1:3000/attacks/db-injection/`

With body:
```
{
	"name": {"$exists": true}
}

```

### Regular Expressions DOS

Send 2 requests with different body content 

`POST 127.0.0.1:3000/attacks/re-dos/`

```
{
	"title": "title"
}
```

and

```
{
	"title": "title and some long string olololol jfhdfjkghkfdhg!"
}
```


### Memory leaks

1. Start server for memory leak debug

`$node app.js --inspect`

2. Run inspector in Chrome

`chrome://inspect/`


### Hijacking the require chain

Nothing to show

### Rainbow table

Nothing to show

### Timing attack

Send 4 requests with different sets of body parameters (Compare timing)

`POST http://localhost:3000/attacks/timing/`

```
{
	"password": "pass",
	"compareByChar": false
}
```


```
{
	"password": "take a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you will",
	"compareByChar": false
}
```

```
{
	"password": "pass",
	"compareByChar": true
}
```

```
{
	"password": "take a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you will",
	"compareByChar": true
}
```

### Hash table collision attack

Nothing to show