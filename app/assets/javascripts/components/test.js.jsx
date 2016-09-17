
  var React = require('react'),
  ReactDOM = require('react-dom'),
  
  baseTheme = require('material-ui/styles/baseThemes/lightBaseTheme'),
  MuiThemeProvider = require('material-ui/styles/MuiThemeProvider'),
  getMuiTheme = require('material-ui/styles/getMuiTheme'),
  
  RaisedButton = require('material-ui/RaisedButton');

var MyAwesomeReactComponent = React.createClass({
    render: function() {
      return (
        <div>
          <MuiThemeProvider>
            <RaisedButton label="Default" />
          </MuiThemeProvider>
        </div>
        );
    }
  });


  

  var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <CommentList />
        <CommentForm />
        
      </div>
    );
  }
});

  var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});




$(document).ready(function () {
  ReactDOM.render(<CommentBox />, document.getElementById('content'));
});


  

 