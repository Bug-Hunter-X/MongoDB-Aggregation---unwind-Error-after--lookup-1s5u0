# MongoDB Aggregation Error: $unwind Failure after $lookup

This repository demonstrates a common error encountered when using the `$lookup`, `$unwind`, and `$group` stages in MongoDB aggregation pipelines. The error arises when `$lookup` returns an array of objects instead of a single object, causing `$unwind` to fail.

## Problem

The provided `bug.js` file contains a MongoDB aggregation pipeline that uses `$lookup` to join two collections.  If the join results in multiple matching documents from the joined collection, the `$unwind` stage will throw an error because it expects a single document.

## Solution

The `bugSolution.js` file offers a corrected version of the pipeline. It correctly handles cases where `$lookup` returns multiple documents by using `$group` to consolidate the results into an array before further processing.

## How to Reproduce

1.  Clone this repository.
2.  Ensure you have a MongoDB instance running.
3.  Create the collections 'collectionA' and 'collectionB' as described in the code comments.
4.  Run `bug.js` to observe the error. 
5.  Run `bugSolution.js` to see the corrected aggregation.