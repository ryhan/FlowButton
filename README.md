FlowButton
==========

This is an easy to use way to create custom 'Add to Flow' buttons for [Flow](http://www.getflow.com "Flow"), a task management app by [Metalab](http://metalabdesign.com/).

Check out a demo at [ryhan.me/lab/FlowButton/](http://ryhan.me/lab/FlowButton/ "FlowButton Demo").

## Why use this?
Flow unfortunately doesn't have a public API, as far as I am aware of.

## Usage

The following code is used to generate a button.
`<iframe flowTask="My Task Name" flowURL="www.relatedURL.com" flowDescription="My Task Description" seamless></iframe><script type="text/javascript" src="flow.js"></script>`

Note the various attributes that are available.

- `flowTask` is a required string representing the name of the task to be created. Keep it succinct.
- `flowURL` is an optional string representing a related URL.
- `flowDescription` is an optional string representing a markdown formatted description.


