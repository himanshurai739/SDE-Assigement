SDE Assignment - Merge Discontinuous Time Ranges
Overview

This small Node.js module merges overlapping or close time ranges into single continuous intervals.
Each time range is represented as [start, end) where both values are UNIX timestamps (in milliseconds).

If the gap between two ranges is smaller than or equal to the given threshold, those ranges are merged together.

Example

Input:

[
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
]


Threshold:
200

Output:

[ [1000, 2000], [2500, 4100], [8000, 9500] ]

How the Code Works

Sort all ranges by their start time.

Compare each range with the previous one.

If they overlap or the gap is within the threshold, merge them.

Return the final merged list.

Project Structure
merge-time-ranges/
│
├── mergeTimeRanges.js   # Main logic file
├── test.js              # Sample test file
└── README.md            # This file

How to Run
Step 1: Make sure Node.js is installed

Check with:

node -v

Step 2: Run the test file
node test.js


You’ll see the merged ranges printed on the console.
