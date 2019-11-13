import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'jsplumb';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  componentDidMount() {
    jsPlumb.ready(function () {
      var els = document.querySelectorAll(".wrapper");
      var item1 = document.querySelectorAll("#item1");

      var common = {
        isSource: true,
        isTarget: true,
        connector: "Straight",
        endpoint: [ "Dot", { radius:5 } ],
        paintStyle: { fill: "grey", outlineStroke: 5, outlineFill: "blue" },
        // hoverPaintStyle: { outlineStroke: "lightblue" },
        connectorStyle: { outlineStroke: "grey", strokeWidth: 1 },
        connectorHoverStyle: { strokeWidth: 2 }
      };
      jsPlumb.addEndpoint("item_left", {
        anchors: ["Right"],
        connector: "Flowchart"
      }, common);
      jsPlumb.addEndpoint("item_right", {
        anchors: ["Left"],
        connector: "Flowchart"
      }, common);
      jsPlumb.draggable(item1);
      
    });
  }

  render() {
    return (
      <div id="diagramContainer">
          <div id="item_left" className="item"></div>
          <div id="item_right" className="item" style={{ marginLeft: "50px", marginTop: 100 }}></div>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
