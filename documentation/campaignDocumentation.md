# Get - /api/campaigns

Hämta alla kampanjerbjudanden

## Returns

```
success: true,
message: 'Campaign found',
status: 200,
```

## Campaign not found

```
 return
 message: 'No campaigns found'
```

<hr><br><br>

# POST - /api/campaigns/addcampaign

lägga till kampanjerbjudanden som admin baserat information från `req.body`

## Req.body

```
price: number,
prod1: string, i detta fall ger du den specifika _id här för att ge rabatt
prod2: string, samma sak här
```

## Returns

```
success: true,
status: 200,
message: 'Campaign added'
```

## Errors

- ### Någon av parametrarna saknas
  ```
  success": false,
  message": '\"xxxxx\" is required', // xxxxx == variabel som saknas i `req.body`
  status": 400
  ```
  <hr><br><br>

# Delete - /api/campaigns/:id

Du raderar alla kampanjerbjudanden på en gång från db, även om du har 100 styckna så tas det bort på en gång.

## Returns

```
success: true,
status: 200,
message: 'Campaign deleted'
```

## Error

- If (!removeAllFromDb)
  ```
  message: 'No campaigns found'
  ```
