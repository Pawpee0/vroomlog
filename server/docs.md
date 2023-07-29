# Server Routes


<details>
<summary> Vehicle List</summary>

## Vehicle List

GET `/vehicleList`

Response:

```
[
    {
        "id" : 1,
        "year" : 1981,
        "make" : "DMC",
        "model" : "DeLorean"
    },
    ...
]
```

POST `/vehicleList`

Request:

```
{
  "year": 1981,
  "make": "DMC",
  "model": "DeLorean"
}
```

Response: 'success'
</details>

<details>
<summary> Basic vehicle data</summary>

## basic vehicle data

GET `/vehicles/:vehicleId`

Response: static files


GET `/vehicles/:vehicleId/data`

Response:

```
{
  'id': 1
  "year": 1981,
  "make": "DMC",
  "model": "DeLorean"
}
```

DELETE `/vehicles/:vehicleId/delete`

Response: 'success'
</details>
