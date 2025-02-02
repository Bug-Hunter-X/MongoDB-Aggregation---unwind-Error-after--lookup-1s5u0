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
    $group: {
      _id: "$_id",
      results: {
        $push: "$results",
      },
    }
  },
  {
    $unwind: "$results"
  }
];
```