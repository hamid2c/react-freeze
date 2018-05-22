react-freeze
============

A JavaScript function which makes properties of a React component immutable by using JavaScript's freeze function.

Invoke freezeComponent function in the constructor of a React component to freeze the properties of the component. "use strict" should be used in your program:

```js
"use strict";

import React, { Component } from 'react';

import { freezeComponent } from "./react-freeze";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {/*... init properties ...*/}
    freezeComponent(this);
  }
  ...
}

```