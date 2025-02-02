```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results",
    },
  },
  {
    $unwind: "$results",
  },
  {
    $group: {
      _id: "$_id",
      data: {
        $push: "$results",
      },
    },
  },
];

//This code produces the error 'cannot unwind array of objects'
```