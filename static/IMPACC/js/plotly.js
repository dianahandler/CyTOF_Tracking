var trace1 = {
    x: ["Nov 2020","Dec 2020","Jan 2021", "Feb 2021", "Mar 2021", "Apr 2021", "May 2021","Jun 2021","Jul 2021", "Aug 2021","Sep 2021","Oct 2021"],
    y: [6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    name: 'Phase One',
    type: 'bar'
  };
  
  var trace2 = {
    x: ["Nov 2020","Dec 2020","Jan 2021", "Feb 2021", "Mar 2021", "Apr 2021", "May 2021","Jun 2021","Jul 2021", "Aug 2021","Sep 2021","Oct 2021"],
    y: [0, 0, 0, 0, 3, 4, 10, 0, 0, 0, 0, 0,],
    name: 'Phase Two',
    type: 'bar'
  };

  var trace3 = {
    x: ["Nov 2020","Dec 2020","Jan 2021", "Feb 2021", "Mar 2021", "Apr 2021", "May 2021","Jun 2021","Jul 2021", "Aug 2021","Sep 2021","Oct 2021"],
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 15, 5,],
    name: 'Phase Three',
    type: 'bar'
  };
  
  var data = [trace1, trace2, trace3];
  
  var layout = {
      barmode: 'group',
      title: "Plate Acquisition Over Time",
      xaxis: {title: "Time"},
      yaxis: {title: "Number of Plates Acquired"}
    };
  
  Plotly.newPlot('myDiv', data, layout);
