### [<- Back](../README.md)

## Vulnerabilities and attacks

  * [Brute-Force attack](#brute-force-attack)
  * [Database injection](#database-injections)
  * [ReDOS](#regular-expressions-dos)
  * [Memory leaks](#memory-leaks)
  * [Hijacking the require chain](#hijacking-the-require-chain)
  * [Timing attack](#timing-attack)
  * [Hash table collision attack](#hash-table-collision-attack)


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

3. Make a snapshot

4. Run siege http://localhost:3000/atacks/memory-leak/

5. Wait ~ 2-3 minutes

6. Make a snapshot

7. Track a leak


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