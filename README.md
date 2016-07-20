# react-table-model
An abstraction over table to provide a better component model for data tables

## Why abstract the HTML table?
The HTML table elements fall short in a couple of ways:

1. Distinction between elements
    1. There's no distinction between the different kinds of `<tr>` tags
    1. There's no distinction between a body `<td>` and a foot `<td>`
    1. You can control styling of these elements through CSS, but you cannot control behavior of the elements
1. Working with the native elements doesn't offer a means for applying standard behaviors
    1. For instance, if you want to apply `aria-` attributes in a standard way, you need a custom component
    1. A custom component model affords opportunities to plug in site-wide extensions to the elements

## Why not use one of the dozens of "Grid" components?

### Scenarios
Grid components tend to offer a high-level abstraction over the `<table>` element and usually don't provide "escape hatches" where you can drop back down to markup for unsupported scenarios.  That means at some point you'll hit a scenario the grid doesn't support and have to choose between three terrible options:

1. Fail to support your scenario and ask your product owner or designer to compromise
1. Fork the Grid component and add support for your scenario
1. Forego the Grid component in that scenario

*react-table-model* is designed with the premise that you can always drop back down to raw markup and native HTML elements as needed.

### Weight
Grid components tend to be quite heavy, with dozens of scenarios, to avoid the above from happening.  That means even your simplest scenario that renders using a Grid has the pay the price for all of those features.  There's rarely a "pay-for-play" model.

*react-table-model* offers a very lightweight abstraction over the HTML table, but it proves to be very composable and extensible.  You opt into or compose any behavior you want to apply but basic scenarios never carry any more code than you need.

### Concept Counts
Grid components introduce new programming models that developers have to become familiar with.  Have you ever worked on a project where you had to be trained on how to use the project's Grid?  That's because of the high-level abstraction that is provided and it's an unnecessary burden.

*react-table-model* provides the same concept as an HTML table and arguably matches your mental model more closely than the native table does.  There's a Table; it has a Head, Body, and Foot.  Each of those has Rows and each Row has Cells.  Everything beyond that is simply a means for applying standard behaviors while elimating duplicate code throughout your project.

### Separation of Concerns
Grid components tend to offer features for manipulating the data being rendered, such as:

1. Data loading from APIs
1. Sorting
1. Paging
1. Filtering

These concerns should all be kept separate from your View layer and instead should be handled in your state management layer, through [redux](http://redux.js.org/) for example.  A well-factored application will not allow you to mix state management or data loading into your rendering components.

## Summary
You can always build a fully-feature Grid component using *react-table-model* by extracting patterns and wrapping the components, but you can't take a Grid component and factor out the simple building blocks.

*react-table-model* gives you the building blocks you need to accomplish your scenarios, simple and complex.  It makes the simple scenarios easy and the complex scenarios possible.
