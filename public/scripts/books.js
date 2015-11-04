var CommentBox = React.createClass({
  render: function() {
    var rows = [
      { label: "a", id: 1 },
      { label: "b", id: 2 },
      { label: "c", id: 3 }
    ];



    return (
      <div className="commentBox">
        <h1>Books</h1>
        <ul>
          {rows.map(function(o){
            return (
              <BookItem key={o.id} id={o.id} label={o.label}/>
            );
          })}
        </ul>
      </div>
    );
  }
});

var BookItem = React.createClass({
  render: function() {
    return (
      <li id="aaa" className="bookItem">
        <a href={"#/book/"+this.props.id}>{this.props.label}</a>
      </li>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

