# Server Routes


- ## Vehicle List

  - GET `/vehicleList`

      - Response:
        ```
        [
            {
                "id" : 1,
                "year" : 1981,
                "make" : "DMC",
                "model" : "DeLorean"
            },
            {
              ...
            },
            ...
        ]
        ```

  - POST `/vehicleList`

     - Request:
        ```
        {
          "year": 1981,
          "make": "DMC",
          "model": "DeLorean"
        }
        ```

     - Response: success or error

<br>

- ## Vehicle Data

  - GET `/vehicles/:vehicleId`

    Response: static files

  ### Basic Vehicle Data
  - GET `/vehicles/:vehicleId/data`

    Response: Basic data for the vehicle

    ```
    {
      'id': 1
      "year": 1981,
      "make": "DMC",
      "model": "DeLorean"
    }
    ```

  - DELETE `/vehicles/:vehicleId/delete`

    Response: 'success'

  ### Vehicle Mile Data
  - GET `/vehicles/:vehicleId/data/miles`

    Response: array of all mileage entries for the vehicle

    ```
    {
      id: int,
      description: string
      dateOccured: date,
      dateAdded: date
    }
    ```

  - POST `/vehicles/:vehicleId/data/miles`

    Request: Mile entry data

    ```
    {
      carId: int,
      mileage: int,
      dateAdded: date,
      dateOccured: date
    }
    ```

    Response: success or error
